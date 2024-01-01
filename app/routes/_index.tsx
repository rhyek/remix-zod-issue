import { useLoaderData } from '@remix-run/react';
import { z } from 'zod';

export function loader() {
  const envs = z
    .object({
      apiKey: z.string(),
    })
    .parse({
      apiKey: undefined, // this will throw an error
    });

  return {
    envs,
  };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
