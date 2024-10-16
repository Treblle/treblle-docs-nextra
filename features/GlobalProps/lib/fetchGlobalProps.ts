import type { PageMapItem } from 'nextra';
import { buildDynamicMeta } from 'nextra/remote'


export type GlobalProps = {
	__nextra_pageMap: PageMapItem[]
};

export async function fetchGlobalProps(): Promise<GlobalProps> {

    const { __nextra_pageMap } = await buildDynamicMeta()

    console.log(
        "GlobalProps fetched",__nextra_pageMap
    )

    return {
        __nextra_pageMap
    };
  }