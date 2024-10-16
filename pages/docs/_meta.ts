import { createCatchAllMeta } from 'nextra/catch-all'
import json from '../../graphql-eslint.json' assert { type: 'json' }

export default () => {
    console.log("saassssdffgghtghkoljngfdkjilugshbnfjhbgafejkafeh")
    return createCatchAllMeta(json.filePaths, json.nestedMeta)
}
