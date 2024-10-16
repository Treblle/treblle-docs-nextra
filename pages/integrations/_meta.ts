import { createCatchAllMeta } from 'nextra/catch-all'
import json from '../../docs-integrations-paths.json' assert { type: 'json' }

export default () => {
    return createCatchAllMeta(json.filePaths, json.nestedMeta)
}

