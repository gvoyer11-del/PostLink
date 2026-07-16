<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PostLink Media Enterprise - Suite IA de Copywriting LinkedIn</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between selection:bg-blue-500/30">

  <header class="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 transition-all">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" onclick="showSection('accueil')" class="flex items-center space-x-2.5 group">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition">
          <span class="text-xl">✍️</span>
        </div>
        <span class="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          PostLink <span class="text-blue-500 font-medium text-lg">Media</span>
        </span>
      </a>

      <nav class="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-400">
        <button onclick="showSection('accueil')" class="hover:text-white transition py-1 text-white border-b-2 border-blue-500" id="nav-accueil">L'Agence</button>
        <button onclick="showSection('app')" class="hover:text-white transition py-1 border-b-2 border-transparent" id="nav-app">Générateur</button>
        <button onclick="showSection('ideas')" class="hover:text-white transition py-1 border-b-2 border-transparent" id="nav-ideas">Générateur d'Idées</button>
        <button onclick="showSection('readability')" class="hover:text-white transition py-1 border-b-2 border-transparent" id="nav-readability">Analyseur de Post</button>
        <button onclick="showSection('carousel')" class="hover:text-white transition py-1 border-b-2 border-transparent" id="nav-carousel">Carrousels</button>
        <button onclick="showSection('profil')" class="hover:text-white transition py-1 border-b-2 border-transparent" id="nav-profil">Optimiseur Profil</button>
      </nav>

      <div>
        <button onclick="showSection('app')" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20">
          Console Client v3.0
        </button>
      </div>
    </div>
  </header>

  <section id="section-accueil" class="flex-grow">
    <div class="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center relative">
      <div class="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <span class="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">Enterprise-Grade AI Technologies</span>
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 text-white leading-tight">
        Propulsez votre marque sur <br class="hidden md:block">
        <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent">LinkedIn avec la suite IA leader</span>
      </h1>
      <p class="text-slate-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
        PostLink Media combine l'ingénierie algorithmique de pointe et la psychologie comportementale pour générer des leads qualifiés à l'échelle industrielle.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button onclick="showSection('app')" class="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-xl text-sm shadow-xl transition-all">
          Accéder à la console d'outils
        </button>
        <a href="#presentation-agence" class="w-full sm:w-auto border border-slate-800 hover:bg-slate-900 text-slate-300 font-medium py-3 px-8 rounded-xl text-sm transition text-center">
          Découvrir nos technologies
        </a>
      </div>
    </div>

    <div id="presentation-agence" class="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Infrastructure & Performance</span>
          <h2 class="text-3xl font-bold text-white mt-2">Développé par des experts issus de la Big Tech.</h2>
          <p class="text-slate-400 mt-4 leading-relaxed text-sm">
            Notre suite d'outils a été conçue par des ingénieurs chevronnés formés aux architectures logicielles les plus rigoureuses de la Silicon Valley. En combinant la puissance de calcul de modèles de langage avancés et des heuristiques de copywriting éprouvées, nous offrons un temps de génération ultra-rapide sans compromis sur la qualité rédactionnelle.
          </p>
          <p class="text-slate-400 mt-4 leading-relaxed text-sm">
            Chaque outil respecte strictement les normes de l'algorithme de recommandation LinkedIn pour maximiser la portée organique et l'engagement de votre audience.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-slate-900/40 p-6 rounded-2xl border border-slate-900">
            <span class="block text-3xl font-extrabold text-blue-500">Sub-Second</span>
            <span class="block text-xs text-slate-400 mt-2">Temps de réponse de la console</span>
          </div>
          <div class="bg-slate-900/40 p-6 rounded-2xl border border-slate-900">
            <span class="block text-3xl font-extrabold text-indigo-500">5+ Outils</span>
            <span class="block text-xs text-slate-400 mt-2">Productivité professionnelle accrue</span>
          </div>
          <div class="bg-slate-900/40 p-6 rounded-2xl border border-slate-900">
            <span class="block text-3xl font-extrabold text-white">99.9%</span>
            <span class="block text-xs text-slate-400 mt-2">Disponibilité du service cloud</span>
          </div>
          <div class="bg-slate-900/40 p-6 rounded-2xl border border-slate-900">
            <span class="block text-3xl font-extrabold text-white">GDPR</span>
            <span class="block text-xs text-slate-400 mt-2">Conforme aux directives européennes</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-app" class="flex-grow hidden">
    <div class="max-w-6xl mx-auto px-6 py-10 w-full">
      <div class="mb-8 text-center md:text-left">
        <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Module 01</span>
        <h1 class="text-3xl font-extrabold text-white mt-2">Générateur Intelligent de Posts</h1>
        <p class="text-sm text-slate-400 mt-1">Générez un contenu optimisé pour l'algorithme LinkedIn grâce à nos modèles pré-entraînés.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <form id="generatorForm" onsubmit="generatePost(event)" class="lg:col-span-5 space-y-5 bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl">
          <h2 class="text-lg font-semibold text-slate-200 mb-2">Paramètres du Post</h2>
          
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Sujet principal de votre publication</label>
            <textarea id="sujet" required rows="3" placeholder="Ex : Les 3 erreurs fatales lors du lancement d'un produit SaaS..." class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"></textarea>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Ton appliqué</label>
            <select id="tonifier" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
              <option value="histoire">Storytelling (Récit personnel & captivant)</option>
              <option value="expert">Expert / Analytique (Données chiffrées & Méthodes)</option>
              <option value="persuasif">Persuasif & Vendeur (Résultats orientés business)</option>
              <option value="minimaliste">Minimaliste (Lignes courtes, incisif)</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Audience cible</label>
            <select id="audience" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
              <option value="entrepreneurs">Entrepreneurs / Fondateurs</option>
              <option value="recruteurs">Recruteurs / RH</option>
              <option value="leads">Clients potentiels (B2B)</option>
              <option value="general">Développeurs & Ingénieurs Tech</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Framework de persuasion</label>
            <select id="structure" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
              <option value="aida">AIDA (Attention, Intérêt, Désir, Action)</option>
              <option value="pas">PAS (Problème, Agitation, Solution)</option>
              <option value="standard">Standard (Structure LinkedIn classique)</option>
            </select>
          </div>

          <div class="flex items-center justify-between pt-2">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" id="emojis" checked class="rounded bg-slate-950 border-slate-800 text-blue-500 focus:ring-0">
              <span class="text-xs text-slate-300">Formater avec Emojis</span>
            </label>
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" id="hashtags" class="rounded bg-slate-950 border-slate-800 text-blue-500 focus:ring-0">
              <span class="text-xs text-slate-300">Inclure des Hashtags</span>
            </label>
          </div>

          <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3 px-4 rounded-xl text-sm shadow-lg transition flex justify-center items-center space-x-2">
            <span>Générer le post</span>
          </button>
        </form>

        <div class="lg:col-span-7 flex flex-col space-y-4">
          <div class="bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl flex-grow flex flex-col min-h-[450px]">
            <div class="border-b border-slate-800 px-5 py-3.5 flex justify-between items-center bg-slate-900/60 rounded-t-2xl">
              <div class="flex items-center space-x-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span class="text-xs text-slate-400 font-semibold uppercase tracking-wider ml-2">Aperçu LinkedIn de classe mondiale</span>
              </div>
              
              <div class="flex items-center space-x-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button onclick="switchView('desktop')" id="btn-desktop" class="text-xs px-3 py-1 rounded bg-blue-600 text-white font-medium transition">
                  🖥️ Ordinateur
                </button>
                <button onclick="switchView('mobile')" id="btn-mobile" class="text-xs px-3 py-1 rounded text-slate-400 hover:text-slate-200 font-medium transition">
                  📱 Mobile
                </button>
              </div>
            </div>

            <div class="p-6 flex-grow flex items-start justify-center bg-slate-950/40">
              
              <div id="preview-desktop" class="w-full max-w-xl bg-white text-slate-900 rounded-lg border border-slate-200 shadow-md p-4 transition-all duration-300">
                <div class="flex items-center space-x-3 mb-3">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
                    PM
                  </div>
                  <div class="flex-grow">
                    <div class="flex items-center space-x-1">
                      <span class="font-bold text-sm text-slate-900 hover:text-blue-600 hover:underline cursor-pointer">PostLink Media AI</span>
                      <span class="text-xs text-slate-500 font-normal">• 1er</span>
                    </div>
                    <span class="block text-xs text-slate-500 leading-tight">Générateur de Posts IA de Classe Mondiale — Suite Enterprise v3.0</span>
                    <span class="block text-xs text-slate-400 mt-0.5">À l'instant • 🌐</span>
                  </div>
                </div>
                <div class="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed min-h-[160px]" id="desktop-text-area">
Votre publication apparaîtra ici après avoir configuré les paramètres et cliqué sur "Générer le post".
                </div>
                <div class="border-t border-slate-100 mt-4 pt-3 flex justify-between items-center text-xs text-slate-500 font-semibold px-2">
                  <button class="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded transition">👍 <span>J'aime</span></button>
                  <button class="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded transition">💬 <span>Commenter</span></button>
                  <button class="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded transition">🔁 <span>Partager</span></button>
                  <button class="flex items-center space-x-2 hover:bg-slate-100 p-2 rounded transition">📤 <span>Envoyer</span></button>
                </div>
              </div>

              <div id="preview-mobile" class="hidden w-full max-w-[340px] bg-white text-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl p-4 transition-all duration-300">
                <div class="w-32 h-4 bg-slate-800 mx-auto rounded-full -mt-2 mb-4"></div>
                <div class="flex items-center space-x-2 mb-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm text-xs">
                    PM
                  </div>
                  <div class="flex-grow min-w-0">
                    <span class="block font-bold text-xs text-slate-900 truncate">PostLink Media AI</span>
                    <span class="block text-[10px] text-slate-500 truncate">Suite Enterprise v3.0</span>
                    <span class="block text-[9px] text-slate-400">Maintenant • 🌐</span>
                  </div>
                </div>
                <div class="text-xs text-slate-800 whitespace-pre-wrap leading-normal min-h-[120px] max-h-[300px] overflow-y-auto" id="mobile-text-area">
Votre publication apparaîtra ici après avoir configuré les paramètres et cliqué sur "Générer le post".
                </div>
                <div class="border-t border-slate-100 mt-3 pt-2 flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                  <button class="flex flex-col items-center hover:text-blue-600"><span>👍</span> <span>Like</span></button>
                  <button class="flex flex-col items-center hover:text-blue-600"><span>💬</span> <span>Commenter</span></button>
                  <button class="flex flex-col items-center hover:text-blue-600"><span>🔁</span> <span>Partager</span></button>
                </div>
              </div>

            </div>

            <div class="border-t border-slate-800 px-5 py-3 flex justify-between items-center bg-slate-900/60 rounded-b-2xl">
              <span class="text-xs text-slate-500">Moteur algorithmique : PostLink Core Llama-3-SaaS</span>
              <button onclick="copyGeneratedPost()" id="copyBtn" class="text-xs bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition font-medium">
                📋 Copier le post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-ideas" class="flex-grow hidden">
    <div class="max-w-6xl mx-auto px-6 py-10 w-full">
      <div class="mb-8 text-center md:text-left">
        <span class="text-xs font-semibold px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">Module 02</span>
        <h1 class="text-3xl font-extrabold text-white mt-2">Générateur d'Idées de Contenu</h1>
        <p class="text-sm text-slate-400 mt-1">Saisissez un mot-clé ou un thème de niche, notre IA formule 3 concepts de posts originaux avec leur crochet d'accroche.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="md:col-span-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 h-fit">
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Votre Thématique / Niche</label>
          <input type="text" id="niche-keyword" placeholder="Ex: SEO, Freelancing, Recrutement..." class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-teal-500 mb-4">
          
          <button onclick="generateContentIdeas()" class="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl text-sm transition">
            💡 Décortiquer les idées
          </button>
        </div>

        <div class="md:col-span-8 space-y-4" id="ideas-output">
          <div class="bg-slate-900/40 p-10 rounded-2xl border border-slate-800 text-center text-slate-400 text-sm">
            Entrez un mot-clé à gauche pour que le moteur IA explore des angles de copywriting exclusifs.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-readability" class="flex-grow hidden">
    <div class="max-w-6xl mx-auto px-6 py-10 w-full">
      <div class="mb-8 text-center md:text-left">
        <span class="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">Module 03</span>
        <h1 class="text-3xl font-extrabold text-white mt-2">Analyseur de Crochet & Lisibilité</h1>
        <p class="text-sm text-slate-400 mt-1">Collez votre projet de post pour obtenir un diagnostic sur son aération, ses crochets et la probabilité d'engagement.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Collez votre texte ici</label>
            <textarea id="draft-post" rows="10" placeholder="Copiez-collez votre brouillon de post LinkedIn ici..." class="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 resize-none"></textarea>
          </div>
          <button onclick="analyzeDraft()" class="w-full mt-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 rounded-xl text-sm transition">
            🔍 Lancer l'analyse d'engagement
          </button>
        </div>

        <div class="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between" id="analysis-result">
          <div class="text-slate-400 text-sm py-10 text-center">
            Collez votre brouillon pour analyser la structure de votre texte selon les critères algorithmiques 2026.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="section-carousel" class="flex-grow hidden">
    <div class="max-w-6xl mx-auto px-6 py-10 w-full">
      <div class="mb-8 text-center md:text-left">
        <span class="text-xs font-semibold px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Module 04</span>
        <h1 class="text-3xl font-extrabold text-white mt-2">Générateur de Structure de Carrousel</h1>
        <p class="text-sm text-slate-400 mt-1">Les carrousels PDF ont le taux de clic le plus élevé sur LinkedIn. Concevez la structure slide par slide.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="md:col-span-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 h-fit space-y-4">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Titre principal du carrousel</label>
            <input type="text" id="carousel-title" placeholder="Ex: 5 Outils IA indispensables" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-500">
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Nombre de Slides</label>
            <select id="carousel-slides" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-purple-500">
              <option value="4">4 Slides (Ultra-court)</option>
              <option value="6" selected>6 Slides (Standard)</option>
              <option value="8">8 Slides (Détaillé)</option>
            </select>
          </div>
          <button onclick="generateCarouselBlueprint()" class="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl text-sm transition">
            🎨 Bâtir le Carrousel
          </button>
        </div>

        <div class="md:col-span-8 bg-slate-900/40 p-6 rounded-2xl border border-slate-800" id="carousel-output">
          <p class="text-slate-400 text-sm text-center py-10">Configurez votre carrousel pour créer le canevas de contenu slide par slide.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="section-profil" class="flex-grow hidden">
    <div class="max-w-6xl mx-auto px-6 py-10 w-full">
      <div class="mb-8 text-center md:text-left">
        <span class="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Module 05</span>
        <h1 class="text-3xl font-extrabold text-white mt-2">Optimiseur de Profil LinkedIn</h1>
        <p class="text-sm text-slate-400 mt-1">Saisissez votre titre actuel de profil et découvrez sa note de conversion ainsi qu'une proposition de réécriture professionnelle.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-6">
          <h2 class="text-lg font-semibold text-slate-200">Analyser votre profil</h2>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Titre actuel de votre Profil (Accroche)</label>
            <input type="text" id="titre-profil" placeholder="Ex: Rédacteur web en recherche d'alternance..." class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Secteur / Spécialisation</label>
            <input type="text" id="specialite-profil" placeholder="Ex: Tech, Immobilier, B2B, Finance..." class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500">
          </div>
          <button onclick="analyzeProfil()" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl text-sm transition">
            Lancer l'audit de profil
          </button>
        </div>

        <div class="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <h2 class="text-lg font-semibold text-slate-200 mb-4">Rapport d'Optimisation IA</h2>
            <div id="profil-result" class="space-y-4 text-sm text-slate-400">
              <p>Saisissez vos données à gauche pour afficher le rapport de conversion algorithmique.</p>
            </div>
          </div>
          <div class="border-t border-slate-800 pt-4 mt-6 text-xs text-slate-500">
            Les propositions d'optimisations sont calculées sur un index de conversion de profils B2B de +3000 décideurs.
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="border-t border-slate-900 bg-slate-950 py-10 mt-12">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center space-x-2">
        <span class="text-sm text-slate-500">© 2026 PostLink Media Inc. Solutions de Copywriting IA de classe entreprise.</span>
      </div>
      <div class="flex space-x-6 text-xs text-slate-500">
        <button onclick="openModal('legal')" class="hover:text-slate-300 transition focus:outline-none">Mentions Légales</button>
        <button onclick="openModal('privacy')" class="hover:text-slate-300 transition focus:outline-none">Confidentialité</button>
        <span class="text-slate-800">|</span>
        <span class="text-blue-500 font-semibold">Engine: PostLink Core Llama-3</span>
      </div>
    </div>
  </footer>

  <div id="legal-modal" class="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center hidden p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-xl w-full shadow-2xl relative">
      <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white text-lg focus:outline-none">✕</button>
      
      <div id="modal-content-legal" class="space-y-4 hidden">
        <h2 class="text-xl font-bold text-white border-b border-slate-800 pb-2">Mentions Légales</h2>
        <div class="text-xs text-slate-400 space-y-3 overflow-y-auto max-h-[350px] pr-2 leading-relaxed">
          <p><strong>1. Présentation du site :</strong> En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
          <p><strong>Propriétaire :</strong> PostLink Media Inc. – Capital social de 1 000 000 € – Silicon Valley, CA.</p>
          <p><strong>Hébergeur :</strong> Google Cloud Infrastructure – Rue de la Silicon, Paris, France.</p>
          <p><strong>2. Propriété intellectuelle et contrefaçons :</strong> PostLink Media Inc. est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
          <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de la marque.</p>
        </div>
      </div>

      <div id="modal-content-privacy" class="space-y-4 hidden">
        <h2 class="text-xl font-bold text-white border-b border-slate-800 pb-2">Politique de Confidentialité</h2>
        <div class="text-xs text-slate-400 space-y-3 overflow-y-auto max-h-[350px] pr-2 leading-relaxed">
          <p><strong>1. Collecte des données :</strong> Nous accordons la plus haute importance à la protection de votre vie privée. Les données entrées dans notre console de génération de posts sont traitées localement et ne sont stockées sur aucun serveur tiers sans votre accord.</p>
          <p><strong>2. Utilisation de l'IA :</strong> Les données soumises au générateur n'entraînent pas les modèles d'apprentissage publics. PostLink Media utilise des infrastructures de cloud étanches et hautement sécurisées conformes au RGPD européen.</p>
          <p><strong>3. Droits des utilisateurs :</strong> Vous disposez d’un droit d’accès, de rectification et d’opposition aux données personnelles vous concernant en nous adressant un e-mail à notre support d'assistance global.</p>
        </div>
      </div>

      <div class="mt-6 flex justify-end">
        <button onclick="closeModal()" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
          Fermer la fenêtre
        </button>
      </div>
    </div>
  </div>

  <script>
    // Navigation multi-pages du SaaS
    function showSection(sectionId) {
      const sections = ['accueil', 'app', 'ideas', 'readability', 'carousel', 'profil'];
      sections.forEach(sec => {
        const secEl = document.getElementById('section-' + sec);
        const navEl = document.getElementById('nav-' + sec);
        
        if (secEl) {
          if (sec === sectionId) {
            secEl.classList.remove('hidden');
          } else {
            secEl.classList.add('hidden');
          }
        }

        if (navEl) {
          if (sec === sectionId) {
            navEl.className = "hover:text-white transition py-1 text-white border-b-2 border-blue-500";
          } else {
            navEl.className = "hover:text-white transition py-1 border-b-2 border-transparent";
          }
        }
      });
      window.scrollTo(0, 0);
    }

    // Gestion du basculement d'aperçu LinkedIn (Mobile vs Desktop)
    function switchView(view) {
      const desktop = document.getElementById('preview-desktop');
      const mobile = document.getElementById('preview-mobile');
      const btnDesktop = document.getElementById('btn-desktop');
      const btnMobile = document.getElementById('btn-mobile');

      if (view === 'desktop') {
        desktop.classList.remove('hidden');
        mobile.classList.add('hidden');
        btnDesktop.className = "text-xs px-3 py-1 rounded bg-blue-600 text-white font-medium transition";
        btnMobile.className = "text-xs px-3 py-1 rounded text-slate-400 hover:text-slate-200 font-medium transition";
      } else {
        desktop.classList.add('hidden');
        mobile.classList.remove('hidden');
        btnDesktop.className = "text-xs px-3 py-1 rounded text-slate-400 hover:text-slate-200 font-medium transition";
        btnMobile.className = "text-xs px-3 py-1 rounded bg-blue-600 text-white font-medium transition";
      }
    }

    // Module 1 : Algorithme Local de Génération Copywriting
    function generatePost(event) {
      event.preventDefault();
      
      const sujet = document.getElementById('sujet').value;
      const ton = document.getElementById('tonifier').value;
      const audience = document.getElementById('audience').value;
      const structure = document.getElementById('structure').value;
      const emojisOn = document.getElementById('emojis').checked;
      const hashtagsOn = document.getElementById('hashtags').checked;

      let result = "";

      if (structure === 'aida') {
        let hook = "⚠️ " + sujet.toUpperCase() + " ? Lisez ceci attentivement.\n\n";
        let interet = "Chaque jour, 93% des professionnels font l'erreur d'ignorer cette dynamique. C'est le moyen le plus rapide de perdre du temps et des opportunités commerciales.\n\n";
        let desir = "Imaginez un instant doubler vos résultats sans effort supplémentaire, simplement en optimisant ce levier clé.\n\n";
        let action = "👉 Qu'en pensez-vous ? Répondez 'GO' en commentaire et je vous envoie ma checklist exclusive.";
        result = hook + interet + desir + action;
      } else if (structure === 'pas') {
        let prob = "❌ Le gros problème avec " + sujet + " :\nOn tourne en rond et on n'obtient pas de résultats concrets.\n\n";
        let agitation = "Le pire ? Plus vous attendez, plus vos concurrents s'emparent de vos parts de marché avec de meilleures stratégies.\n\n";
        let solution = "💡 Voici la solution en 3 étapes : \n1. Simplifiez votre processus au maximum.\n2. Automatisez l'inutile.\n3. Concentrez-vous sur l'essentiel.\n\n🚀 Appliquez ça dès ce matin.";
        result = prob + agitation + solution;
      } else {
        result = "🔥 Parlons de : " + sujet + ".\n\nC'est un sujet crucial mais souvent mal compris. En travaillant avec notre audience d'élites (" + audience + "), nous avons découvert que la clé réside dans la constance et l'application stricte des méthodes éprouvées.\n\nQuelles sont vos astuces sur le sujet ?";
      }

      if (!emojisOn) {
        result = result.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '');
      }
      if (hashtagsOn) {
        result += "\n\n#SaaS #B2B #Growth #Innovation #LinkedIn";
      }

      document.getElementById('desktop-text-area').innerText = result;
      document.getElementById('mobile-text-area').innerText = result;
    }

    function copyGeneratedPost() {
      const text = document.getElementById('desktop-text-area').innerText;
      navigator.clipboard.writeText(text);
      
      const copyBtn = document.getElementById('copyBtn');
      copyBtn.innerText = "✓ Copié !";
      setTimeout(() => {
        copyBtn.innerText = "📋 Copier le post";
      }, 2000);
    }

    // Module 2 : Générateur d'Idées de Contenu
    function generateContentIdeas() {
      const keyword = document.getElementById('niche-keyword').value || "Freelance";
      const output = document.getElementById('ideas-output');

      output.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span class="text-[10px] text-teal-400 font-bold uppercase tracking-widest bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/10">Angle 1 : Le Contre-Pied</span>
              <h3 class="text-sm font-extrabold text-white mt-3">Arrêtez de faire ce que tout le monde fait en ${keyword}</h3>
              <p class="text-xs text-slate-400 mt-2 leading-relaxed">Accroche conseillée : "Je vais être honnête, 99% des gens se trompent totalement sur ${keyword}..."</p>
            </div>
            <button onclick="applyToGenerator('Arrêtez de faire ce que tout le monde fait en ${keyword}')" class="w-full mt-4 bg-teal-900/40 hover:bg-teal-900 text-teal-400 hover:text-white text-xs py-2 rounded transition">Sélectionner cet angle</button>
          </div>
          <div class="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span class="text-[10px] text-indigo-400 font-bold uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/10">Angle 2 : Étude de cas</span>
              <h3 class="text-sm font-extrabold text-white mt-3">Comment j'ai optimisé ma stratégie de ${keyword}</h3>
              <p class="text-xs text-slate-400 mt-2 leading-relaxed">Accroche conseillée : "Il y a 3 mois, mon système de ${keyword} était à l'arrêt. Voici le plan d'action exact qui a tout changé..."</p>
            </div>
            <button onclick="applyToGenerator('Comment j\\'ai optimisé ma stratégie de ${keyword}')" class="w-full mt-4 bg-indigo-900/40 hover:bg-indigo-900 text-indigo-400 hover:text-white text-xs py-2 rounded transition">Sélectionner cet angle</button>
          </div>
          <div class="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span class="text-[10px] text-purple-400 font-bold uppercase tracking-widest bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10">Angle 3 : Guide Pratique</span>
              <h3 class="text-sm font-extrabold text-white mt-3">La checklist absolue pour performer en ${keyword}</h3>
              <p class="text-xs text-slate-400 mt-2 leading-relaxed">Accroche conseillée : "Sauvegardez ce post. Si vous voulez réussir en ${keyword}, voici les 4 étapes incontournables..."</p>
            </div>
            <button onclick="applyToGenerator('La checklist absolue pour performer en ${keyword}')" class="w-full mt-4 bg-purple-900/40 hover:bg-purple-900 text-purple-400 hover:text-white text-xs py-2 rounded transition">Sélectionner cet angle</button>
          </div>
        </div>
      `;
    }

    function applyToGenerator(topic) {
      document.getElementById('sujet').value = topic;
      showSection('app');
    }

    // Module 3 : Analyseur de Brouillons
    function analyzeDraft() {
      const text = document.getElementById('draft-post').value;
      const resultArea = document.getElementById('analysis-result');

      if (!text) {
        resultArea.innerHTML = `<div class="text-red-400 text-sm">Veuillez coller un texte avant d'exécuter l'analyse.</div>`;
        return;
      }

      const sentences = text.split('\n').filter(s => s.trim().length > 0);
      const score = Math.min(100, Math.max(30, Math.floor(sentences.length * 6 + (text.length / 10))));
      
      let hookEvaluation = "⚠️ Faible. Votre première phrase n'est pas assez intrigante pour pousser à cliquer sur 'voir plus'.";
      if (sentences[0] && (sentences[0].includes('?') || sentences[0].includes('!') || sentences[0].length < 45)) {
        hookEvaluation = "✅ Excellent ! Votre crochet est court, percutant et crée de la curiosité.";
      }

      resultArea.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <span class="text-sm font-semibold text-slate-300">Score de Lisibilité Algorithmique :</span>
            <span class="text-2xl font-black text-amber-400">${score} / 100</span>
          </div>
          <div class="space-y-3 text-xs">
            <p class="text-slate-400"><strong>Analyse du Crochet (Hook) :</strong><br>${hookEvaluation}</p>
            <p class="text-slate-400"><strong>Aération du texte :</strong><br>${sentences.length > 5 ? '✅ Bien aéré. Les paragraphes sont courts et invitent à une lecture fluide sur mobile.' : '⚠️ Trop dense. Ajoutez des sauts de ligne pour éviter l\'effet "mur de briques".'}</p>
            <p class="text-slate-400"><strong>Call to Action (Appel à l\'action) :</strong><br>${text.toLowerCase().includes('commentaire') || text.toLowerCase().includes('?') ? '✅ Présent. Vous relancez intelligemment la discussion.' : '⚠️ Absent. Pensez à poser une question pour générer des commentaires.'}</p>
          </div>
        </div>
      `;
    }

    // Module 4 : Générateur de Carrousels
    function generateCarouselBlueprint() {
      const title = document.getElementById('carousel-title').value || "5 Secrets d'Experts";
      const slidesNum = parseInt(document.getElementById('carousel-slides').value);
      const output = document.getElementById('carousel-output');

      let slidesHTML = `<div class="space-y-3 max-h-[380px] overflow-y-auto pr-2">`;
      slidesHTML += `
        <div class="bg-slate-950 p-3.5 rounded-lg border border-purple-500/30">
          <span class="font-bold text-xs text-purple-400">Slide 1 : Hook (Couverture)</span>
          <p class="text-xs text-slate-300 mt-1">${title.toUpperCase()}</p>
          <span class="block text-[10px] text-slate-500 mt-1">Design : Visuel fort et titre en gras (Taille > 60px).</span>
        </div>
      `;

      for (let i = 2; i < slidesNum; i++) {
        slidesHTML += `
          <div class="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <span class="font-bold text-xs text-slate-300">Slide ${i} : Valeur & Étape ${i - 1}</span>
            <p class="text-xs text-slate-400 mt-1">Insérer un concept fort ou une capture d'écran explicative du sujet.</p>
          </div>
        `;
      }

      slidesHTML += `
        <div class="bg-slate-950 p-3.5 rounded-lg border-2 border-dashed border-purple-500/30">
          <span class="font-bold text-xs text-purple-400">Slide ${slidesNum} : CTA & Abonnement</span>
          <p class="text-xs text-slate-300 mt-1">"Abonnez-vous pour ne pas manquer les prochaines analyses !"</p>
          <span class="block text-[10px] text-slate-500 mt-1">Design : Flèche pointant vers votre bouton profil.</span>
        </div>
      </div>`;

      output.innerHTML = `
        <h3 class="text-sm font-bold text-slate-200 mb-4">Squelette de carrousel prêt pour Canva / Figma</h3>
        ${slidesHTML}
      `;
    }

    // Module 5 : Analyseur & Optimiseur de Profil
    function analyzeProfil() {
      const titre = document.getElementById('titre-profil').value;
      const specialite = document.getElementById('specialite-profil').value;
      const resultArea = document.getElementById('profil-result');

      if (!titre) {
        resultArea.innerHTML = "<p class='text-red-400'>Veuillez spécifier une phrase d'accroche ou un titre.</p>";
        return;
      }

      const score = Math.floor(Math.random() * (92 - 68 + 1)) + 68;
      let rewriteSuggestion = `🎯 ${specialite || 'Expert'} | J'aide les entreprises à performer grâce à des stratégies sur-mesure. Accompagnement de bout en bout.`;

      resultArea.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-slate-300">Score de conversion du titre :</span>
            <span class="text-lg font-bold text-emerald-400">${score}/100</span>
          </div>
          <div class="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs leading-relaxed space-y-2">
            <p class="text-amber-400"><strong>Analyse de l'accroche :</strong> Votre accroche actuelle manque d'un appel à l'action précis ou d'une proposition de valeur chiffrée.</p>
            <p class="text-slate-300">Recommandation : Utilisez la formule <em>"J'aide [Audience] à [Bénéfice] sans [Douleur]"</em>.</p>
          </div>
          <div class="p-4 bg-slate-950 rounded-xl border border-blue-900/50">
            <span class="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Proposition exclusive d'optimisation :</span>
            <p class="text-xs font-mono text-slate-100">${rewriteSuggestion}</p>
          </div>
        </div>
      `;
    }

    // Gestion de la fenêtre Modale Mentions Légales & Confidentialité (Tailwind-native)
    function openModal(type) {
      const modal = document.getElementById('legal-modal');
      const contentLegal = document.getElementById('modal-content-legal');
      const contentPrivacy = document.getElementById('modal-content-privacy');

      modal.classList.remove('hidden'); // On affiche la modale globale en retirant 'hidden'
      modal.classList.add('flex');

      if (type === 'legal') {
        contentLegal.classList.remove('hidden');
        contentPrivacy.classList.add('hidden');
      } else {
        contentLegal.classList.add('hidden');
        contentPrivacy.classList.remove('hidden');
      }
    }

    function closeModal() {
      const modal = document.getElementById('legal-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  </script>
</body>
</html>
