import Head from "next/head";
import { RestaurantsFormDialog } from "~/components/restaurants-form-dialog";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.restaurant.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>

      <main className="container py-4">
        <div className="flex justify-between">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </h1>

          <RestaurantsFormDialog />
        </div>
      </main>
    </>
  );
}
