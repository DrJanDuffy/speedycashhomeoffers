import type { Route } from "./+types/test";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Test Page" }];
};

export default function Test() {
  return (
    <div>
      <h1>Test Page - SSR Working</h1>
      <p>If you see this, basic SSR is functional.</p>
    </div>
  );
}
