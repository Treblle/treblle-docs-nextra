import { createCatchAllMeta } from 'nextra/catch-all'
import json from '../../docs-treblle-paths.json' assert { type: 'json' }

export default () => {
    return createCatchAllMeta(json.filePaths, json.nestedMeta)
}
