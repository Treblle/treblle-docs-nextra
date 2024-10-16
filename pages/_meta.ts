import { createCatchAllMeta } from 'nextra/catch-all'
import json from '../docs-general-paths.json' assert { type: 'json' }

export default createCatchAllMeta(json.filePaths, json.nestedMeta)
