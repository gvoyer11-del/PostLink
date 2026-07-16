export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { sujet, tonifier, audience, structure, emojis, hashtags } = req.body;

  // 1. Définition du profil de l'IA
  let systemPrompt = "Tu es un copywriter fantôme d'élite sur LinkedIn. Tu rédiges des posts de niveau international qui génèrent des milliers d'interactions.\n";

  // 2. Structuration selon les méthodes marketing professionnelles
  if (structure === 'aida') {
    systemPrompt += "- Structure ton post strictement selon la méthode AIDA (Attention : phrase d'accroche choc, Intérêt : capter l'intérêt avec un fait/problème, Désir : montrer les bénéfices et créer l'envie, Action : appel à l'action clair à la fin).\n";
  } else if (structure === 'pas') {
    systemPrompt += "- Structure ton post strictly selon la formule PAS (Problème : énoncer une frustration claire de l'audience, Agitation : appuyer là où ça fait mal pour montrer le coût de ne rien faire, Solution : apporter ta solution comme l'unique réponse évidente, suivie d'un appel à l'action).\n";
  } else {
    systemPrompt += "- Structure classique : une phrase d'accroche courte (moins de 10 mots), un développement aéré avec des retours à la ligne fréquents, et une question ouverte engageante à la fin.\n";
  }

  // 3. Application du ton de voix (Tonifier)
  if (tonifier === 'histoire') {
    systemPrompt += "- Utilise les codes du storytelling : commence par un événement inattendu au présent, partage une expérience personnelle, humaine et sincère, tire une leçon forte.\n";
  } else if (tonifier === 'expert') {
    systemPrompt += "- Adopte un ton d'autorité, analytique et basé sur les faits. Utilise une liste à puces claire (ex: 1., 2., 3.) pour donner de la valeur actionnable immédiatement.\n";
  } else if (tonifier === 'persuasif') {
    systemPrompt += "- Ton ultra persuasif, audacieux et direct. Utilise le biais d'urgence ou d'exclusivité.\n";
  } else if (tonifier === 'minimaliste') {
    systemPrompt += "- Reste très court, direct à l'essentiel. Style épuré sans fioriture, chaque phrase doit avoir un impact maximum.\n";
  }

  // 4. Adaptation à l'audience cible
  systemPrompt += `- Ton audience cible est composée de : ${audience}. Utilise le jargon adapté à leur industrie et parle directement à leurs frustrations spécifiques.\n`;

  // 5. Gestion des Emojis et Hashtags
  if (emojis) {
    systemPrompt += "- Utilise des emojis de façon stratégique (en début de paragraphe ou liste à puces) pour aérer le post, sans en abuser.\n";
  } else {
    systemPrompt += "- N'utilise ABSOLUMENT AUCUN emoji dans tout le texte. Le ton doit être épuré et sobre.\n";
  }

  if (hashtags) {
    systemPrompt += "- Ajoute à la toute fin du post entre 2 et 3 hashtags professionnels extrêmement pertinents.\n";
  } else {
    systemPrompt += "- Ne mets AUCUN hashtag à la fin du post.\n";
  }

  systemPrompt += "- Règle d'or : Rédige exclusivement en français. Fais des phrases courtes de moins de 15 mots. Aère énormément avec des sauts de ligne réguliers pour maximiser le taux de lecture sur mobile.";

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Rédige un post LinkedIn haut de gamme sur le sujet suivant : "${sujet}"` }
        ],
        temperature: 0.75
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
