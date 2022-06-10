import { NFTStorage, File } from 'nft.storage';
import fs from 'fs';
const NFT_STORAGE_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA0YjBjODUwNDRFZTQ0NzY2ODJlNTM1OEViZTA1YjBEMkVmN0M2OTciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NDg0NTEyMDgzNSwibmFtZSI6ImZkb25nZmRvbmcifQ.KQY1jqD31uwQebjeRI_BfxVOvQkUFxRoS1UfajlgRj0'; //API 키입력
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
const metadata = await client.store({
  name: "Bing7's NFT",
  description: "Bing7's nft for practice!",
  image: new File([fs.readFileSync('./temp.PNG')], 'temp.PNG', {
    type: 'image/PNG',
  }),
  attributes: [
    {
      trait_type: 'Rarity',
      value: 'LEGENDARY',
    },
  ],
});
console.log(metadata.url);
