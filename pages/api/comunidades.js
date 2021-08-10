import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(req, res) {
  if(req.method === 'POST') {
    const TOKEN = '9621713e876bf55bb7812bd251767d';
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: '972363',
      ...req.body
      // title: "Teste",
      // imageUrl: "https://github.com/Nardogomes.png",
      // creatorSlug: "Nardogomes"
    });

    res.json({
      registroCriado: registroCriado
    });
  }
}
