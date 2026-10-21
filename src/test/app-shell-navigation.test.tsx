import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AppShell } from "@/components/receiptiq/app-shell";

const destinations = [
  { label: "Overview", path: "/app" },
  { label: "Upload receipts", path: "/app/upload-receipts" },
  { label: "Receipt history", path: "/app/receipt-history" },
  { label: "Investigations", path: "/app/investigations" },
  { label: "Evidence & findings", path: "/app/evidence-findings" },
  { label: "Reports", path: "/app/reports" },
  { label: "Review history", path: "/app/review-history" },
  { label: "Settings & account", path: "/app/settings-account" },
  { label: "Pricing", path: "/app/pricing" },
];

const rootRoute = createRootRoute({ component: () => <Outlet /> });
const overviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/app",
  component: () => (
    <AppShell>
      <div>Overview page</div>
    </AppShell>
  ),
});
const sectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/app/$section",
  component: () => {
    const { section } = sectionRoute.useParams();
    const destination = destinations.find(({ path }) => path.endsWith(section));
    return (
      <AppShell>
        <div>{destination?.label ?? section}</div>
      </AppShell>
    );
  },
});
const testRouteTree = rootRoute.addChildren([overviewRoute, sectionRoute]);

async function renderWorkspaceAtMobileWidth() {
  window.innerWidth = 390;
  const router = createRouter({
    routeTree: testRouteTree,
    history: createMemoryHistory({ initialEntries: ["/app"] }),
  });
  await router.load();
  render(<RouterProvider router={router} />);
  return router;
}

describe("ReceiptIQ mobile navigation", () => {
  it("visits each destination once and closes the drawer after selection", async () => {
    const router = await renderWorkspaceAtMobileWidth();

    for (const destination of destinations) {
      fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

      const drawer = await screen.findByRole("complementary", {
        name: "Mobile navigation",
      });
      fireEvent.click(within(drawer).getByRole("link", { name: destination.label }));

      await waitFor(() => {
        expect(router.state.location.pathname).toBe(destination.path);
        expect(
          screen.getByRole("heading", {
            level: 1,
            name: destination.label,
          }),
        ).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(
          screen.queryByRole("complementary", { name: "Mobile navigation" }),
        ).not.toBeInTheDocument();
      });
    }
  });

  it("closes from the backdrop and close button", async () => {
    await renderWorkspaceAtMobileWidth();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    await screen.findByRole("complementary", { name: "Mobile navigation" });
    fireEvent.click(screen.getByRole("button", { name: "Close navigation" }));
    await waitFor(() => {
      expect(
        screen.queryByRole("complementary", { name: "Mobile navigation" }),
      ).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const drawer = await screen.findByRole("complementary", {
      name: "Mobile navigation",
    });
    fireEvent.click(within(drawer).getByRole("button", { name: "Close menu" }));
    await waitFor(() => {
      expect(
        screen.queryByRole("complementary", { name: "Mobile navigation" }),
      ).not.toBeInTheDocument();
    });
  });

  it("supports browser back after navigating to a different section", async () => {
    const router = await renderWorkspaceAtMobileWidth();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const drawer = await screen.findByRole("complementary", {
      name: "Mobile navigation",
    });
    fireEvent.click(within(drawer).getByRole("link", { name: "Reports" }));
    await screen.findByRole("heading", { level: 1, name: "Reports" });

    act(() => router.history.back());

    await waitFor(() => {
      expect(router.state.location.pathname).toBe("/app");
      expect(screen.getByRole("heading", { level: 1, name: "Overview" })).toBeInTheDocument();
    });
  });
});
