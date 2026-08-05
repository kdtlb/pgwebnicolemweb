/* =========================================================
   Nicole Márquez · Sistema de idiomas (ES / EN / FR / PT)
   Traducción del lado del cliente. El HTML se escribe en
   español y se traduce marcando elementos con:
     data-i18n          -> reemplaza el contenido (innerHTML)
     data-i18n-ph       -> atributo placeholder
     data-i18n-aria     -> atributo aria-label
     data-i18n-content  -> atributo content (meta)
   El diccionario está en T[clave] = { es, en, fr, pt }.
   ========================================================= */
(function () {
  const LANGS = ['es', 'en', 'fr', 'pt'];

  const T = {
    /* ---------- NAV (compartido) ---------- */
    nav_home:    { es: 'Inicio',            en: 'Home',            fr: 'Accueil',              pt: 'Início' },
    nav_org:     { es: 'La Organizadora',   en: 'The Organizer',   fr: 'L’Organisatrice',      pt: 'A Organizadora' },
    nav_events:  { es: 'Eventos',           en: 'Events',          fr: 'Événements',           pt: 'Eventos' },
    nav_areas:   { es: 'Áreas de Trabajo',  en: 'Work Areas',      fr: 'Domaines d’expertise', pt: 'Áreas de Trabalho' },
    nav_contact: { es: 'Contacto',          en: 'Contact',         fr: 'Contact',              pt: 'Contato' },
    aria_menu:   { es: 'Abrir menú',        en: 'Open menu',       fr: 'Ouvrir le menu',       pt: 'Abrir menu' },

    /* ---------- FOOTER (compartido) ---------- */
    foot_desc: {
      es: 'Diseñamos y producimos experiencias únicas, elegantes y cuidadosamente planificadas: bodas, eventos sociales y corporativos en Tarija y otros destinos.',
      en: 'We design and produce unique, elegant and carefully planned experiences: weddings, social and corporate events in Tarija and other destinations.',
      fr: 'Nous concevons et produisons des expériences uniques, élégantes et soigneusement planifiées : mariages, événements sociaux et corporatifs à Tarija et dans d’autres lieux.',
      pt: 'Projetamos e produzimos experiências únicas, elegantes e cuidadosamente planejadas: casamentos, eventos sociais e corporativos em Tarija e outros destinos.'
    },
    foot_nav_title:     { es: 'Navegación', en: 'Navigation', fr: 'Navigation', pt: 'Navegação' },
    foot_contact_title: { es: 'Contacto',   en: 'Contact',    fr: 'Contact',    pt: 'Contato' },
    foot_copyright: {
      es: '© 2026 Nicole Márquez · Organización de Eventos. Tarija, Bolivia.',
      en: '© 2026 Nicole Márquez · Event Planning. Tarija, Bolivia.',
      fr: '© 2026 Nicole Márquez · Organisation d’Événements. Tarija, Bolivie.',
      pt: '© 2026 Nicole Márquez · Organização de Eventos. Tarija, Bolívia.'
    },
    foot_made: { es: 'Hecho por BuckdI.', en: 'Made by BuckdI.', fr: 'Réalisé par BuckdI.', pt: 'Feito por BuckdI.' },

    brand_tag: {
      es: 'Nicole Márquez · Organización de Eventos',
      en: 'Nicole Márquez · Event Planning',
      fr: 'Nicole Márquez · Organisation d’Événements',
      pt: 'Nicole Márquez · Organização de Eventos'
    },
    cta_talk_btn: {
      es: 'Conversemos sobre tu evento',
      en: 'Let’s talk about your event',
      fr: 'Parlons de votre événement',
      pt: 'Vamos falar sobre o seu evento'
    },

    /* ---------- INDEX ---------- */
    idx_title: {
      es: 'Nicole Márquez · Organización de Eventos en Tarija',
      en: 'Nicole Márquez · Event Planning in Tarija',
      fr: 'Nicole Márquez · Organisation d’Événements à Tarija',
      pt: 'Nicole Márquez · Organização de Eventos em Tarija'
    },
    idx_meta: {
      es: 'Diseñamos y producimos experiencias únicas, elegantes y cuidadosamente planificadas. Bodas, eventos sociales y corporativos en Tarija, Bolivia.',
      en: 'We design and produce unique, elegant and carefully planned experiences. Weddings, social and corporate events in Tarija, Bolivia.',
      fr: 'Nous concevons et produisons des expériences uniques, élégantes et soigneusement planifiées. Mariages, événements sociaux et corporatifs à Tarija, Bolivie.',
      pt: 'Projetamos e produzimos experiências únicas, elegantes e cuidadosamente planejadas. Casamentos, eventos sociais e corporativos em Tarija, Bolívia.'
    },
    idx_h1: {
      es: '<span class="line"><span>Creamos eventos</span></span><span class="line"><span>que se sueñan, se viven</span></span><span class="line"><span>y se <em>sienten</em></span></span>',
      en: '<span class="line"><span>We create events</span></span><span class="line"><span>that are dreamed, lived</span></span><span class="line"><span>and truly <em>felt</em></span></span>',
      fr: '<span class="line"><span>Nous créons des événements</span></span><span class="line"><span>que l’on rêve, que l’on vit</span></span><span class="line"><span>et que l’on <em>ressent</em></span></span>',
      pt: '<span class="line"><span>Criamos eventos</span></span><span class="line"><span>que se sonham, se vivem</span></span><span class="line"><span>e se <em>sentem</em></span></span>'
    },
    idx_lede: {
      es: 'Diseñamos y producimos experiencias únicas, elegantes y cuidadosamente planificadas. Organizamos bodas únicas, celebraciones sociales y eventos corporativos, transformando cada idea en una experiencia auténtica, memorable y hecha a medida.',
      en: 'We design and produce unique, elegant and carefully planned experiences. We organize unique weddings, social celebrations and corporate events, transforming every idea into an authentic, memorable and tailor-made experience.',
      fr: 'Nous concevons et produisons des expériences uniques, élégantes et soigneusement planifiées. Nous organisons des mariages uniques, des célébrations sociales et des événements corporatifs, transformant chaque idée en une expérience authentique, mémorable et sur mesure.',
      pt: 'Projetamos e produzimos experiências únicas, elegantes e cuidadosamente planejadas. Organizamos casamentos únicos, celebrações sociais e eventos corporativos, transformando cada ideia em uma experiência autêntica, memorável e feita sob medida.'
    },
    idx_btn_story: { es: 'Conoce nuestra historia', en: 'Discover our story', fr: 'Découvrez notre histoire', pt: 'Conheça a nossa história' },
    idx_btn_talk:  { es: 'Conversemos', en: 'Let’s talk', fr: 'Discutons', pt: 'Vamos conversar' },

    story_kicker: { es: 'Nuestra historia', en: 'Our story', fr: 'Notre histoire', pt: 'A nossa história' },
    story_h2: {
      es: 'Un sueño que se convirtió en una historia de éxito',
      en: 'A dream that became a success story',
      fr: 'Un rêve devenu une histoire de réussite',
      pt: 'Um sonho que se tornou uma história de sucesso'
    },
    story_p: {
      es: 'Nicole Márquez Organización de Eventos nació del sueño de una adolescente que encontraba alegría en ayudar a organizar celebraciones familiares, bodas y momentos especiales.',
      en: 'Nicole Márquez Event Planning was born from the dream of a teenager who found joy in helping to organize family celebrations, weddings and special moments.',
      fr: 'Nicole Márquez Organisation d’Événements est née du rêve d’une adolescente qui trouvait de la joie à aider à organiser des célébrations familiales, des mariages et des moments spéciaux.',
      pt: 'A Nicole Márquez Organização de Eventos nasceu do sonho de uma adolescente que encontrava alegria em ajudar a organizar celebrações familiares, casamentos e momentos especiais.'
    },
    ch1_cap: {
      es: '<b>El origen</b><span>de una vocación</span>',
      en: '<b>The origin</b><span>of a vocation</span>',
      fr: '<b>L’origine</b><span>d’une vocation</span>',
      pt: '<b>A origem</b><span>de uma vocação</span>'
    },
    ch1_num: { es: '— El comienzo —', en: '— The beginning —', fr: '— Le commencement —', pt: '— O começo —' },
    ch1_h3:  { es: 'De la pasión al talento', en: 'From passion to talent', fr: 'De la passion au talent', pt: 'Da paixão ao talento' },
    ch1_p1: {
      es: 'Con el tiempo, esa pasión se convirtió en talento, liderazgo y vocación. Nicole decidió prepararse, invertir en su formación y adquirir experiencia en distintos espacios vinculados al mundo de los eventos.',
      en: 'Over time, that passion became talent, leadership and vocation. Nicole decided to prepare herself, invest in her training and gain experience in various fields linked to the world of events.',
      fr: 'Au fil du temps, cette passion est devenue talent, leadership et vocation. Nicole a décidé de se former, d’investir dans sa formation et d’acquérir de l’expérience dans différents domaines liés au monde de l’événementiel.',
      pt: 'Com o tempo, essa paixão se transformou em talento, liderança e vocação. Nicole decidiu se preparar, investir na sua formação e adquirir experiência em diferentes espaços ligados ao mundo dos eventos.'
    },
    ch1_p2: {
      es: 'Cada celebración fue una escuela, cada detalle una oportunidad para aprender y perfeccionar un oficio que hoy define su manera de trabajar.',
      en: 'Every celebration was a school, every detail an opportunity to learn and perfect a craft that today defines her way of working.',
      fr: 'Chaque célébration a été une école, chaque détail une occasion d’apprendre et de perfectionner un métier qui définit aujourd’hui sa façon de travailler.',
      pt: 'Cada celebração foi uma escola, cada detalhe uma oportunidade de aprender e aperfeiçoar um ofício que hoje define a sua maneira de trabalhar.'
    },
    ch2_cap: {
      es: '<b>Hoy</b><span>una empresa consolidada</span>',
      en: '<b>Today</b><span>a consolidated company</span>',
      fr: '<b>Aujourd’hui</b><span>une entreprise établie</span>',
      pt: '<b>Hoje</b><span>uma empresa consolidada</span>'
    },
    ch2_num: { es: '— La empresa —', en: '— The company —', fr: '— L’entreprise —', pt: '— A empresa —' },
    ch2_h3:  { es: 'Un sueño hecho realidad', en: 'A dream come true', fr: 'Un rêve devenu réalité', pt: 'Um sonho tornado realidade' },
    ch2_p1: {
      es: 'Años después, ese sueño tomó forma en una empresa creada para diseñar experiencias memorables, elegantes y a la vanguardia, con una especial dedicación a las bodas.',
      en: 'Years later, that dream took shape in a company created to design memorable, elegant and cutting-edge experiences, with a special dedication to weddings.',
      fr: 'Des années plus tard, ce rêve a pris forme dans une entreprise créée pour concevoir des expériences mémorables, élégantes et avant-gardistes, avec un dévouement particulier aux mariages.',
      pt: 'Anos depois, esse sonho tomou forma em uma empresa criada para projetar experiências memoráveis, elegantes e na vanguarda, com uma dedicação especial aos casamentos.'
    },
    ch2_p2: {
      es: 'Hoy, Nicole Márquez Organización de Eventos transforma ideas en celebraciones únicas, cuidando cada detalle para que cada momento sea verdaderamente inolvidable.',
      en: 'Today, Nicole Márquez Event Planning transforms ideas into unique celebrations, taking care of every detail so that each moment is truly unforgettable.',
      fr: 'Aujourd’hui, Nicole Márquez Organisation d’Événements transforme les idées en célébrations uniques, en prenant soin de chaque détail pour que chaque moment soit vraiment inoubliable.',
      pt: 'Hoje, a Nicole Márquez Organização de Eventos transforma ideias em celebrações únicas, cuidando de cada detalhe para que cada momento seja verdadeiramente inesquecível.'
    },
    whatis_kicker: { es: 'Quiénes somos', en: 'Who we are', fr: 'Qui sommes-nous', pt: 'Quem somos' },
    whatis_h2: { es: 'Qué es Nicole Márquez', en: 'What is Nicole Márquez', fr: 'Qu’est-ce que Nicole Márquez', pt: 'O que é a Nicole Márquez' },
    whatis_p1: {
      es: 'Nicole Márquez Organización de Eventos es una empresa tarijeña, especializada en la planificación, diseño y producción de bodas, eventos sociales y encuentros corporativos.',
      en: 'Nicole Márquez Event Planning is a company from Tarija, specialized in the planning, design and production of weddings, social events and corporate gatherings.',
      fr: 'Nicole Márquez Organisation d’Événements est une entreprise de Tarija, spécialisée dans la planification, la conception et la production de mariages, d’événements sociaux et de rencontres corporatives.',
      pt: 'A Nicole Márquez Organização de Eventos é uma empresa de Tarija, especializada no planejamento, design e produção de casamentos, eventos sociais e encontros corporativos.'
    },
    whatis_p2: {
      es: 'Nuestra experiencia nos permite acompañar cada celebración con seguridad, creatividad y una visión integral. Trabajamos con pasión, cuidando cada detalle y construyendo una relación de confianza con nuestros clientes desde el primer encuentro.',
      en: 'Our experience allows us to accompany every celebration with confidence, creativity and a comprehensive vision. We work with passion, caring for every detail and building a relationship of trust with our clients from the very first meeting.',
      fr: 'Notre expérience nous permet d’accompagner chaque célébration avec assurance, créativité et une vision globale. Nous travaillons avec passion, en soignant chaque détail et en construisant une relation de confiance avec nos clients dès la première rencontre.',
      pt: 'A nossa experiência nos permite acompanhar cada celebração com segurança, criatividade e uma visão integral. Trabalhamos com paixão, cuidando de cada detalhe e construindo uma relação de confiança com os nossos clientes desde o primeiro encontro.'
    },
    whatis_p3: {
      es: 'Ofrecemos una atención cercana y personalizada, porque entendemos que cada evento tiene una historia, un propósito y una esencia propia. Por ello, desarrollamos propuestas hechas a medida, combinando elegancia, organización y profesionalismo.',
      en: 'We offer close and personalized attention, because we understand that every event has its own story, purpose and essence. That is why we develop tailor-made proposals, combining elegance, organization and professionalism.',
      fr: 'Nous offrons une attention proche et personnalisée, car nous comprenons que chaque événement a sa propre histoire, son propre but et sa propre essence. C’est pourquoi nous élaborons des propositions sur mesure, alliant élégance, organisation et professionnalisme.',
      pt: 'Oferecemos um atendimento próximo e personalizado, porque entendemos que cada evento tem uma história, um propósito e uma essência próprios. Por isso, desenvolvemos propostas feitas sob medida, combinando elegância, organização e profissionalismo.'
    },
    whatis_p4: {
      es: 'Más que organizar eventos, creamos experiencias memorables que reflejan la personalidad de cada cliente y permiten disfrutar cada momento con tranquilidad.',
      en: 'More than organizing events, we create memorable experiences that reflect each client’s personality and allow them to enjoy every moment with peace of mind.',
      fr: 'Plus que d’organiser des événements, nous créons des expériences mémorables qui reflètent la personnalité de chaque client et permettent de profiter de chaque instant en toute tranquillité.',
      pt: 'Mais do que organizar eventos, criamos experiências memoráveis que refletem a personalidade de cada cliente e permitem aproveitar cada momento com tranquilidade.'
    },
    svc_kicker: { es: 'Nuestros servicios', en: 'Our services', fr: 'Nos services', pt: 'Os nossos serviços' },
    svc_h2: { es: 'Lo que hacemos por ti', en: 'What we do for you', fr: 'Ce que nous faisons pour vous', pt: 'O que fazemos por você' },
    svc1_h3: { es: 'Bodas', en: 'Weddings', fr: 'Mariages', pt: 'Casamentos' },
    svc1_p: {
      es: 'Diseñamos bodas únicas, elegantes y llenas de significado. Nuestra experiencia nos permite acompañar a cada pareja desde la primera idea hasta el gran día, cuidando la planificación, el diseño, la logística y cada detalle de la celebración. Creamos experiencias personalizadas que reflejan la historia, el estilo y los sueños de cada pareja, para que puedan disfrutar este momento con tranquilidad, confianza y emoción.',
      en: 'We design unique, elegant and meaningful weddings. Our experience allows us to accompany each couple from the first idea to the big day, taking care of the planning, design, logistics and every detail of the celebration. We create personalized experiences that reflect the story, style and dreams of each couple, so they can enjoy this moment with peace of mind, confidence and emotion.',
      fr: 'Nous concevons des mariages uniques, élégants et pleins de sens. Notre expérience nous permet d’accompagner chaque couple de la première idée jusqu’au grand jour, en soignant la planification, la conception, la logistique et chaque détail de la célébration. Nous créons des expériences personnalisées qui reflètent l’histoire, le style et les rêves de chaque couple, afin qu’ils puissent profiter de ce moment en toute sérénité, confiance et émotion.',
      pt: 'Projetamos casamentos únicos, elegantes e cheios de significado. A nossa experiência nos permite acompanhar cada casal desde a primeira ideia até o grande dia, cuidando do planejamento, do design, da logística e de cada detalhe da celebração. Criamos experiências personalizadas que refletem a história, o estilo e os sonhos de cada casal, para que possam aproveitar este momento com tranquilidade, confiança e emoção.'
    },
    svc2_h3: { es: 'Eventos sociales', en: 'Social events', fr: 'Événements sociaux', pt: 'Eventos sociais' },
    svc2_p: {
      es: 'Organizamos cumpleaños, aniversarios, graduaciones, bautizos y celebraciones especiales con propuestas creativas y hechas a medida. Transformamos cada ocasión en una experiencia memorable, combinando una cuidadosa planificación, ambientación elegante y atención personalizada.',
      en: 'We organize birthdays, anniversaries, graduations, christenings and special celebrations with creative, tailor-made proposals. We transform every occasion into a memorable experience, combining careful planning, elegant décor and personalized attention.',
      fr: 'Nous organisons anniversaires, jubilés, remises de diplômes, baptêmes et célébrations spéciales avec des propositions créatives et sur mesure. Nous transformons chaque occasion en une expérience mémorable, alliant une planification soignée, une décoration élégante et une attention personnalisée.',
      pt: 'Organizamos aniversários, bodas, formaturas, batizados e celebrações especiais com propostas criativas e feitas sob medida. Transformamos cada ocasião em uma experiência memorável, combinando um planejamento cuidadoso, ambientação elegante e atendimento personalizado.'
    },
    svc3_h3: { es: 'Eventos corporativos', en: 'Corporate events', fr: 'Événements corporatifs', pt: 'Eventos corporativos' },
    svc3_p: {
      es: 'Planificamos encuentros empresariales, lanzamientos, cenas institucionales, aniversarios, congresos y eventos de integración. Trabajamos de manera profesional y estratégica para que cada evento refleje la identidad de la organización, transmita su mensaje y genere una experiencia positiva para sus invitados.',
      en: 'We plan business meetings, product launches, institutional dinners, anniversaries, conferences and team-building events. We work in a professional and strategic way so that each event reflects the organization’s identity, conveys its message and creates a positive experience for its guests.',
      fr: 'Nous planifions des rencontres d’affaires, des lancements, des dîners institutionnels, des anniversaires, des congrès et des événements de cohésion. Nous travaillons de manière professionnelle et stratégique afin que chaque événement reflète l’identité de l’organisation, transmette son message et génère une expérience positive pour ses invités.',
      pt: 'Planejamos encontros empresariais, lançamentos, jantares institucionais, aniversários, congressos e eventos de integração. Trabalhamos de maneira profissional e estratégica para que cada evento reflita a identidade da organização, transmita a sua mensagem e gere uma experiência positiva para os seus convidados.'
    },
    svc4_h3: { es: 'Eventos destino', en: 'Destination events', fr: 'Événements sur destination', pt: 'Eventos destino' },
    svc4_p: {
      es: 'Creamos bodas y celebraciones en escenarios especiales, encargándonos de la coordinación, logística, proveedores, ambientación y atención de invitados. Diseñamos experiencias exclusivas que combinan la belleza del destino con una organización impecable, para que cada momento sea inolvidable.',
      en: 'We create weddings and celebrations in special settings, handling coordination, logistics, suppliers, décor and guest care. We design exclusive experiences that combine the beauty of the destination with impeccable organization, so that every moment is unforgettable.',
      fr: 'Nous créons des mariages et des célébrations dans des cadres d’exception, en nous chargeant de la coordination, de la logistique, des prestataires, de la décoration et de l’accueil des invités. Nous concevons des expériences exclusives qui allient la beauté du lieu à une organisation impeccable, pour que chaque moment soit inoubliable.',
      pt: 'Criamos casamentos e celebrações em cenários especiais, encarregando-nos da coordenação, logística, fornecedores, ambientação e atendimento aos convidados. Projetamos experiências exclusivas que combinam a beleza do destino com uma organização impecável, para que cada momento seja inesquecível.'
    },
    why_kicker: { es: 'La diferencia', en: 'The difference', fr: 'La différence', pt: 'A diferença' },
    why_h2: { es: '¿Por qué elegirnos?', en: 'Why choose us?', fr: 'Pourquoi nous choisir ?', pt: 'Por que nos escolher?' },
    why1_h4: { es: 'Eventos personalizados', en: 'Personalized events', fr: 'Événements personnalisés', pt: 'Eventos personalizados' },
    why1_p: { es: 'Cada propuesta refleja tu estilo, esencia y propósito.', en: 'Every proposal reflects your style, essence and purpose.', fr: 'Chaque proposition reflète votre style, votre essence et votre objectif.', pt: 'Cada proposta reflete o seu estilo, essência e propósito.' },
    why2_h4: { es: 'Acompañamiento cercano', en: 'Close support', fr: 'Un accompagnement de proximité', pt: 'Acompanhamento próximo' },
    why2_p: { es: 'Estamos contigo desde la primera idea hasta el último detalle.', en: 'We are with you from the first idea to the last detail.', fr: 'Nous sommes à vos côtés de la première idée au dernier détail.', pt: 'Estamos com você desde a primeira ideia até o último detalhe.' },
    why3_h4: { es: 'Organización integral', en: 'Comprehensive organization', fr: 'Organisation complète', pt: 'Organização integral' },
    why3_p: { es: 'Planificamos, coordinamos y supervisamos cada etapa del evento.', en: 'We plan, coordinate and supervise every stage of the event.', fr: 'Nous planifions, coordonnons et supervisons chaque étape de l’événement.', pt: 'Planejamos, coordenamos e supervisionamos cada etapa do evento.' },
    why4_h4: { es: 'Proveedores seleccionados', en: 'Selected suppliers', fr: 'Prestataires sélectionnés', pt: 'Fornecedores selecionados' },
    why4_p: { es: 'Trabajamos con profesionales confiables y comprometidos con la calidad.', en: 'We work with reliable professionals committed to quality.', fr: 'Nous travaillons avec des professionnels fiables et engagés dans la qualité.', pt: 'Trabalhamos com profissionais confiáveis e comprometidos com a qualidade.' },
    why5_h4: { es: 'Diseño elegante y coherente', en: 'Elegant and coherent design', fr: 'Design élégant et cohérent', pt: 'Design elegante e coerente' },
    why5_p: { es: 'Creamos una experiencia visual armónica, cuidada y con identidad propia.', en: 'We create a harmonious, refined visual experience with its own identity.', fr: 'Nous créons une expérience visuelle harmonieuse, soignée et dotée d’une identité propre.', pt: 'Criamos uma experiência visual harmônica, cuidada e com identidade própria.' },
    why6_h4: { es: 'Atención a cada detalle', en: 'Attention to every detail', fr: 'Attention à chaque détail', pt: 'Atenção a cada detalhe' },
    why6_p: { es: 'Anticipamos necesidades para que disfrutes tu evento con tranquilidad.', en: 'We anticipate needs so you can enjoy your event with peace of mind.', fr: 'Nous anticipons les besoins pour que vous profitiez de votre événement en toute sérénité.', pt: 'Antecipamos necessidades para que você aproveite o seu evento com tranquilidade.' },
    why7_h4: { es: 'Experiencias hechas para ti', en: 'Experiences made for you', fr: 'Des expériences faites pour vous', pt: 'Experiências feitas para você' },
    why7_p: { es: 'Adaptamos cada celebración a tus expectativas, necesidades y presupuesto.', en: 'We adapt every celebration to your expectations, needs and budget.', fr: 'Nous adaptons chaque célébration à vos attentes, vos besoins et votre budget.', pt: 'Adaptamos cada celebração às suas expectativas, necessidades e orçamento.' },
    quote_index: {
      es: 'Más que organizar eventos, creamos experiencias memorables que reflejan la personalidad de cada cliente.',
      en: 'More than organizing events, we create memorable experiences that reflect each client’s personality.',
      fr: 'Plus que d’organiser des événements, nous créons des expériences mémorables qui reflètent la personnalité de chaque client.',
      pt: 'Mais do que organizar eventos, criamos experiências memoráveis que refletem a personalidade de cada cliente.'
    },
    cite_brand: {
      es: '— Nicole Márquez · Organización de Eventos',
      en: '— Nicole Márquez · Event Planning',
      fr: '— Nicole Márquez · Organisation d’Événements',
      pt: '— Nicole Márquez · Organização de Eventos'
    },
    teaser_kicker: { es: 'Descubre más', en: 'Discover more', fr: 'Découvrez plus', pt: 'Descubra mais' },
    teaser_h2: { es: 'Nuestro mundo, en cada detalle', en: 'Our world, in every detail', fr: 'Notre univers, dans chaque détail', pt: 'O nosso mundo, em cada detalhe' },
    teaser1_h3: { es: 'La Organizadora y su Equipo', en: 'The Organizer and her Team', fr: 'L’Organisatrice et son Équipe', pt: 'A Organizadora e a sua Equipe' },
    teaser1_p: { es: 'Quién imagina, dirige y firma cada celebración, junto al equipo que la hace posible.', en: 'Who imagines, leads and signs every celebration, together with the team that makes it possible.', fr: 'Celle qui imagine, dirige et signe chaque célébration, aux côtés de l’équipe qui la rend possible.', pt: 'Quem imagina, dirige e assina cada celebração, junto à equipe que a torna possível.' },
    teaser1_go: { es: 'Conocer a Nicole →', en: 'Meet Nicole →', fr: 'Rencontrer Nicole →', pt: 'Conhecer a Nicole →' },
    teaser2_h3: { es: 'Nuestros Eventos', en: 'Our Events', fr: 'Nos Événements', pt: 'Os Nossos Eventos' },
    teaser2_p: { es: 'Bodas, eventos sociales y corporativos, cada uno nacido de una historia única.', en: 'Weddings, social and corporate events, each born from a unique story.', fr: 'Mariages, événements sociaux et corporatifs, chacun né d’une histoire unique.', pt: 'Casamentos, eventos sociais e corporativos, cada um nascido de uma história única.' },
    teaser2_go: { es: 'Ver los eventos →', en: 'See the events →', fr: 'Voir les événements →', pt: 'Ver os eventos →' },
    teaser3_h3: { es: 'Áreas de Trabajo', en: 'Work Areas', fr: 'Domaines d’expertise', pt: 'Áreas de Trabalho' },
    teaser3_p: { es: 'Todo lo que cuidamos por ti, de la primera idea hasta el último detalle.', en: 'Everything we take care of for you, from the first idea to the last detail.', fr: 'Tout ce dont nous prenons soin pour vous, de la première idée au dernier détail.', pt: 'Tudo o que cuidamos por você, da primeira ideia ao último detalhe.' },
    teaser3_go: { es: 'Explorar áreas →', en: 'Explore areas →', fr: 'Explorer les domaines →', pt: 'Explorar áreas →' },

    /* ---------- ORGANIZADORA ---------- */
    org_title: {
      es: 'La Organizadora y su Equipo · Nicole Márquez Tarija',
      en: 'The Organizer and her Team · Nicole Márquez Tarija',
      fr: 'L’Organisatrice et son Équipe · Nicole Márquez Tarija',
      pt: 'A Organizadora e a sua Equipe · Nicole Márquez Tarija'
    },
    org_meta: {
      es: 'Nicole Márquez, organizadora de eventos en Tarija, y el equipo que hace posible cada celebración.',
      en: 'Nicole Márquez, event planner in Tarija, and the team that makes every celebration possible.',
      fr: 'Nicole Márquez, organisatrice d’événements à Tarija, et l’équipe qui rend chaque célébration possible.',
      pt: 'Nicole Márquez, organizadora de eventos em Tarija, e a equipe que torna cada celebração possível.'
    },
    org_hero_kicker: { es: 'Detrás de cada celebración', en: 'Behind every celebration', fr: 'Derrière chaque célébration', pt: 'Por trás de cada celebração' },
    org_hero_h1: {
      es: 'La Organizadora<br>y su <em>Equipo</em>',
      en: 'The Organizer<br>and her <em>Team</em>',
      fr: 'L’Organisatrice<br>et son <em>Équipe</em>',
      pt: 'A Organizadora<br>e a sua <em>Equipe</em>'
    },
    org_hero_p: {
      es: 'La visión, la mano firme y el equipo humano que sostienen cada evento de Nicole Márquez.',
      en: 'The vision, the steady hand and the human team behind every Nicole Márquez event.',
      fr: 'La vision, la main sûre et l’équipe humaine qui soutiennent chaque événement de Nicole Márquez.',
      pt: 'A visão, a mão firme e a equipe humana que sustentam cada evento de Nicole Márquez.'
    },
    org_role_kicker: { es: 'Fundadora & Directora', en: 'Founder & Director', fr: 'Fondatrice & Directrice', pt: 'Fundadora & Diretora' },
    org_role: { es: 'Organizadora de Eventos · Tarija', en: 'Event Planner · Tarija', fr: 'Organisatrice d’Événements · Tarija', pt: 'Organizadora de Eventos · Tarija' },
    org_p1: {
      es: 'Nicole Márquez es una joven empresaria tarijeña especializada en la organización y coordinación de eventos. Su formación reúne conocimientos en gastronomía, decoración de interiores y una especialización en Organización y Coordinación de Eventos, complementados con cursos internacionales del Event Management Center.',
      en: 'Nicole Márquez is a young entrepreneur from Tarija specialized in the organization and coordination of events. Her training brings together knowledge in gastronomy, interior decoration and a specialization in Event Organization and Coordination, complemented by international courses from the Event Management Center.',
      fr: 'Nicole Márquez est une jeune entrepreneuse de Tarija spécialisée dans l’organisation et la coordination d’événements. Sa formation réunit des connaissances en gastronomie, en décoration d’intérieur et une spécialisation en Organisation et Coordination d’Événements, complétées par des cours internationaux de l’Event Management Center.',
      pt: 'Nicole Márquez é uma jovem empresária de Tarija especializada na organização e coordenação de eventos. A sua formação reúne conhecimentos em gastronomia, decoração de interiores e uma especialização em Organização e Coordenação de Eventos, complementados com cursos internacionais do Event Management Center.'
    },
    org_p2: {
      es: 'Con siete años de experiencia, ha consolidado una trayectoria destacada en la organización de bodas y eventos, especialmente en la campiña tarijeña y en otros escenarios llenos de encanto en Bolivia.',
      en: 'With seven years of experience, she has built an outstanding track record in organizing weddings and events, especially in the Tarija countryside and other charming settings across Bolivia.',
      fr: 'Avec sept ans d’expérience, elle a bâti un parcours remarquable dans l’organisation de mariages et d’événements, en particulier dans la campagne de Tarija et dans d’autres cadres pleins de charme en Bolivie.',
      pt: 'Com sete anos de experiência, consolidou uma trajetória de destaque na organização de casamentos e eventos, especialmente no campo tarijenho e em outros cenários cheios de encanto na Bolívia.'
    },
    org_p3: {
      es: 'Su trabajo se distingue por la atención personalizada, el cuidado de cada detalle y la capacidad de anticipar y resolver cada desafío con serenidad.',
      en: 'Her work stands out for its personalized attention, care for every detail and the ability to anticipate and resolve every challenge with serenity.',
      fr: 'Son travail se distingue par une attention personnalisée, le soin de chaque détail et la capacité d’anticiper et de résoudre chaque défi avec sérénité.',
      pt: 'O seu trabalho se distingue pela atenção personalizada, o cuidado com cada detalhe e a capacidade de antecipar e resolver cada desafio com serenidade.'
    },
    org_quote: {
      es: 'Un gran evento no solo se mide por lo que sale bien, sino también por todo aquello que se logró prever y solucionar para que los invitados simplemente disfruten.',
      en: 'A great event is measured not only by what goes well, but also by everything that was anticipated and solved so that the guests can simply enjoy.',
      fr: 'Un grand événement ne se mesure pas seulement à ce qui se passe bien, mais aussi à tout ce qui a pu être anticipé et résolu pour que les invités profitent simplement.',
      pt: 'Um grande evento não se mede apenas pelo que dá certo, mas também por tudo aquilo que se conseguiu prever e resolver para que os convidados simplesmente aproveitem.'
    },
    org_cite: { es: '— El sello de Nicole Márquez', en: '— The Nicole Márquez signature', fr: '— La signature de Nicole Márquez', pt: '— A marca de Nicole Márquez' },
    org_stats_kicker: { es: 'Una trayectoria que celebra', en: 'A track record worth celebrating', fr: 'Un parcours qui se célèbre', pt: 'Uma trajetória que celebra' },
    org_stats_h2: {
      es: 'Años de oficio, cada momento fluye con elegancia',
      en: 'Years of craft, every moment flows with elegance',
      fr: 'Des années de métier, chaque moment se déroule avec élégance',
      pt: 'Anos de ofício, cada momento flui com elegância'
    },
    org_stat1: { es: 'Años de experiencia', en: 'Years of experience', fr: 'Ans d’expérience', pt: 'Anos de experiência' },
    org_stat2: { es: 'Atención personalizada', en: 'Personalized attention', fr: 'Attention personnalisée', pt: 'Atendimento personalizado' },
    org_stat3: { es: 'y otros destinos', en: 'and other destinations', fr: 'et d’autres lieux', pt: 'e outros destinos' },
    org_stat4: { es: 'Cuidado en cada detalle', en: 'Care in every detail', fr: 'Soin dans chaque détail', pt: 'Cuidado em cada detalhe' },
    org_team_kicker: { es: 'La organizadora y su equipo', en: 'The organizer and her team', fr: 'L’organisatrice et son équipe', pt: 'A organizadora e a sua equipe' },
    org_team_h2: { es: 'Nuestro equipo base', en: 'Our core team', fr: 'Notre équipe de base', pt: 'A nossa equipe base' },
    member1_role: { es: 'Responsable de atención y logística', en: 'Head of client care and logistics', fr: 'Responsable de l’accueil et de la logistique', pt: 'Responsável por atendimento e logística' },
    member2_role: { es: 'Community Manager', en: 'Community Manager', fr: 'Community Manager', pt: 'Community Manager' },
    member3_role: { es: 'Apoyo en planificación y coordinación logística', en: 'Support in planning and logistics coordination', fr: 'Appui à la planification et à la coordination logistique', pt: 'Apoio no planejamento e coordenação logística' },
    org_team_note: {
      es: 'Además, para cada evento conformamos un equipo de servicio cuidadosamente seleccionado, con experiencia en atención de celebraciones, criterio profesional y la cordialidad necesaria para brindar una experiencia de calidad tanto a nuestros clientes como a sus invitados.',
      en: 'In addition, for each event we assemble a carefully selected service team, with experience in celebration service, professional judgment and the warmth needed to provide a quality experience for both our clients and their guests.',
      fr: 'De plus, pour chaque événement, nous constituons une équipe de service soigneusement sélectionnée, avec de l’expérience dans le service des célébrations, un jugement professionnel et la cordialité nécessaire pour offrir une expérience de qualité à nos clients comme à leurs invités.',
      pt: 'Além disso, para cada evento formamos uma equipe de serviço cuidadosamente selecionada, com experiência no atendimento de celebrações, critério profissional e a cordialidade necessária para oferecer uma experiência de qualidade tanto aos nossos clientes quanto aos seus convidados.'
    },
    org_cta_kicker: { es: 'Hablemos de tu evento', en: 'Let’s talk about your event', fr: 'Parlons de votre événement', pt: 'Vamos falar sobre o seu evento' },
    org_cta_h2: { es: '¿Tienes una celebración en mente?', en: 'Do you have a celebration in mind?', fr: 'Vous avez une célébration en tête ?', pt: 'Tem uma celebração em mente?' },
    org_cta_p: {
      es: 'Nicole y su equipo estarán encantados de escuchar tu idea y convertirla en una experiencia inolvidable.',
      en: 'Nicole and her team will be delighted to hear your idea and turn it into an unforgettable experience.',
      fr: 'Nicole et son équipe seront ravies d’écouter votre idée et de la transformer en une expérience inoubliable.',
      pt: 'Nicole e a sua equipe terão prazer em ouvir a sua ideia e transformá-la em uma experiência inesquecível.'
    },

    /* ---------- EVENTOS ---------- */
    ev_title: {
      es: 'Nuestros Eventos · Nicole Márquez Tarija',
      en: 'Our Events · Nicole Márquez Tarija',
      fr: 'Nos Événements · Nicole Márquez Tarija',
      pt: 'Os Nossos Eventos · Nicole Márquez Tarija'
    },
    ev_meta: {
      es: 'Bodas, eventos corporativos y eventos sociales diseñados a medida en Tarija, Bolivia.',
      en: 'Weddings, corporate events and social events tailor-made in Tarija, Bolivia.',
      fr: 'Mariages, événements corporatifs et événements sociaux sur mesure à Tarija, Bolivie.',
      pt: 'Casamentos, eventos corporativos e eventos sociais feitos sob medida em Tarija, Bolívia.'
    },
    ev_hero_kicker: { es: 'Cada evento nace de una historia única', en: 'Every event is born from a unique story', fr: 'Chaque événement naît d’une histoire unique', pt: 'Cada evento nasce de uma história única' },
    ev_hero_h1: { es: 'Nuestros <em>Eventos</em>', en: 'Our <em>Events</em>', fr: 'Nos <em>Événements</em>', pt: 'Os Nossos <em>Eventos</em>' },
    ev_hero_p: {
      es: 'Diseñamos bodas, celebraciones sociales y eventos corporativos personalizados, cuidando cada detalle con elegancia, sensibilidad y profesionalismo.',
      en: 'We design personalized weddings, social celebrations and corporate events, caring for every detail with elegance, sensitivity and professionalism.',
      fr: 'Nous concevons des mariages, des célébrations sociales et des événements corporatifs personnalisés, en soignant chaque détail avec élégance, sensibilité et professionnalisme.',
      pt: 'Projetamos casamentos, celebrações sociais e eventos corporativos personalizados, cuidando de cada detalhe com elegância, sensibilidade e profissionalismo.'
    },
    ev_intro_kicker: { es: 'Experiencias a medida', en: 'Tailor-made experiences', fr: 'Des expériences sur mesure', pt: 'Experiências sob medida' },
    ev_intro_h2: { es: 'Más que organizar eventos, creamos recuerdos', en: 'More than organizing events, we create memories', fr: 'Plus que d’organiser des événements, nous créons des souvenirs', pt: 'Mais do que organizar eventos, criamos recordações' },
    ev_intro_p: {
      es: 'Cada evento nace de una historia única. Más que organizar eventos, creamos experiencias memorables para disfrutar con tranquilidad, confianza y emoción.',
      en: 'Every event is born from a unique story. More than organizing events, we create memorable experiences to enjoy with peace of mind, confidence and emotion.',
      fr: 'Chaque événement naît d’une histoire unique. Plus que d’organiser des événements, nous créons des expériences mémorables à savourer en toute sérénité, confiance et émotion.',
      pt: 'Cada evento nasce de uma história única. Mais do que organizar eventos, criamos experiências memoráveis para aproveitar com tranquilidade, confiança e emoção.'
    },
    ev_w_kicker: { es: '01 · Bodas', en: '01 · Weddings', fr: '01 · Mariages', pt: '01 · Casamentos' },
    ev_w_h3: { es: 'Bodas', en: 'Weddings', fr: 'Mariages', pt: 'Casamentos' },
    ev_w_p: {
      es: 'Creamos bodas únicas, elegantes y profundamente personales. Acompañamos a cada pareja desde la primera idea hasta el gran día, cuidando la planificación, el diseño, los proveedores, la logística y cada detalle de la celebración. Nuestra experiencia en bodas realizadas en la campiña tarijeña y otros escenarios especiales nos permite transformar cada historia de amor en una experiencia memorable, armoniosa y llena de emoción.',
      en: 'We create unique, elegant and deeply personal weddings. We accompany each couple from the first idea to the big day, taking care of the planning, design, suppliers, logistics and every detail of the celebration. Our experience with weddings held in the Tarija countryside and other special settings allows us to transform every love story into a memorable, harmonious experience full of emotion.',
      fr: 'Nous créons des mariages uniques, élégants et profondément personnels. Nous accompagnons chaque couple de la première idée jusqu’au grand jour, en soignant la planification, la conception, les prestataires, la logistique et chaque détail de la célébration. Notre expérience des mariages célébrés dans la campagne de Tarija et d’autres cadres d’exception nous permet de transformer chaque histoire d’amour en une expérience mémorable, harmonieuse et pleine d’émotion.',
      pt: 'Criamos casamentos únicos, elegantes e profundamente pessoais. Acompanhamos cada casal desde a primeira ideia até o grande dia, cuidando do planejamento, do design, dos fornecedores, da logística e de cada detalhe da celebração. A nossa experiência em casamentos realizados no campo tarijenho e em outros cenários especiais nos permite transformar cada história de amor em uma experiência memorável, harmoniosa e cheia de emoção.'
    },
    ev_c_kicker: { es: '02 · Corporativos', en: '02 · Corporate', fr: '02 · Corporatifs', pt: '02 · Corporativos' },
    ev_c_h3: { es: 'Eventos Corporativos', en: 'Corporate Events', fr: 'Événements Corporatifs', pt: 'Eventos Corporativos' },
    ev_c_p: {
      es: 'Diseñamos y organizamos eventos corporativos que comunican, conectan y fortalecen la identidad de cada empresa o institución. Trabajamos de manera profesional y estratégica para que cada encuentro transmita su mensaje y genere una experiencia positiva para todos los invitados.',
      en: 'We design and organize corporate events that communicate, connect and strengthen the identity of each company or institution. We work in a professional and strategic way so that every gathering conveys its message and creates a positive experience for all guests.',
      fr: 'Nous concevons et organisons des événements corporatifs qui communiquent, connectent et renforcent l’identité de chaque entreprise ou institution. Nous travaillons de manière professionnelle et stratégique afin que chaque rencontre transmette son message et génère une expérience positive pour tous les invités.',
      pt: 'Projetamos e organizamos eventos corporativos que comunicam, conectam e fortalecem a identidade de cada empresa ou instituição. Trabalhamos de maneira profissional e estratégica para que cada encontro transmita a sua mensagem e gere uma experiência positiva para todos os convidados.'
    },
    ev_s_kicker: { es: '03 · Sociales', en: '03 · Social', fr: '03 · Sociaux', pt: '03 · Sociais' },
    ev_s_h3: { es: 'Eventos Sociales', en: 'Social Events', fr: 'Événements Sociaux', pt: 'Eventos Sociais' },
    ev_s_p: {
      es: 'Creamos celebraciones únicas para compartir los momentos más importantes de la vida. Organizamos cumpleaños, aniversarios, bautizos, graduaciones y otras ocasiones especiales, desarrollando propuestas personalizadas que reflejan el estilo y la esencia de cada cliente.',
      en: 'We create unique celebrations to share life’s most important moments. We organize birthdays, anniversaries, christenings, graduations and other special occasions, developing personalized proposals that reflect the style and essence of each client.',
      fr: 'Nous créons des célébrations uniques pour partager les moments les plus importants de la vie. Nous organisons anniversaires, jubilés, baptêmes, remises de diplômes et autres occasions spéciales, en élaborant des propositions personnalisées qui reflètent le style et l’essence de chaque client.',
      pt: 'Criamos celebrações únicas para compartilhar os momentos mais importantes da vida. Organizamos aniversários, bodas, batizados, formaturas e outras ocasiões especiais, desenvolvendo propostas personalizadas que refletem o estilo e a essência de cada cliente.'
    },
    ev_testi_kicker: { es: 'Lo que dicen nuestras parejas', en: 'What our couples say', fr: 'Ce que disent nos couples', pt: 'O que dizem os nossos casais' },
    ev_testi_h2: { es: 'Testimonios', en: 'Testimonials', fr: 'Témoignages', pt: 'Depoimentos' },
    testi1: {
      es: '«Nos sentimos acompañados en todo momento. Nicole cuidó cada detalle y nos permitió disfrutar nuestra boda con total tranquilidad.»',
      en: '“We felt supported at every moment. Nicole took care of every detail and allowed us to enjoy our wedding with complete peace of mind.”',
      fr: '« Nous nous sommes sentis accompagnés à chaque instant. Nicole a soigné chaque détail et nous a permis de profiter de notre mariage en toute tranquillité. »',
      pt: '«Sentimo-nos acompanhados o tempo todo. Nicole cuidou de cada detalhe e nos permitiu aproveitar o nosso casamento com total tranquilidade.»'
    },
    testi2: {
      es: '«Nos encantó cómo entendió nuestra idea y la transformó en una celebración elegante, cálida y llena de personalidad.»',
      en: '“We loved how she understood our idea and turned it into an elegant, warm celebration full of personality.”',
      fr: '« Nous avons adoré la façon dont elle a compris notre idée et l’a transformée en une célébration élégante, chaleureuse et pleine de personnalité. »',
      pt: '«Adoramos como ela entendeu a nossa ideia e a transformou em uma celebração elegante, calorosa e cheia de personalidade.»'
    },
    testi3: {
      es: '«Más que una organizadora, fue una gran aliada durante todo el proceso. Nos dio seguridad, orden y mucha tranquilidad.»',
      en: '“More than a planner, she was a great ally throughout the whole process. She gave us confidence, order and great peace of mind.”',
      fr: '« Plus qu’une organisatrice, elle a été une grande alliée tout au long du processus. Elle nous a apporté assurance, organisation et beaucoup de sérénité. »',
      pt: '«Mais do que uma organizadora, foi uma grande aliada durante todo o processo. Deu-nos segurança, ordem e muita tranquilidade.»'
    },
    testi_cite: { es: '— Pareja de novios', en: '— Newlywed couple', fr: '— Couple de mariés', pt: '— Casal de noivos' },
    ev_cta_kicker: { es: 'Tu celebración empieza aquí', en: 'Your celebration starts here', fr: 'Votre célébration commence ici', pt: 'A sua celebração começa aqui' },
    ev_cta_h2: { es: '¿Qué evento tienes en mente?', en: 'What event do you have in mind?', fr: 'Quel événement avez-vous en tête ?', pt: 'Que evento tem em mente?' },
    ev_cta_p: {
      es: 'Cuéntanos tu idea y la convertiremos en una experiencia única, elegante y memorable.',
      en: 'Tell us your idea and we will turn it into a unique, elegant and memorable experience.',
      fr: 'Parlez-nous de votre idée et nous la transformerons en une expérience unique, élégante et mémorable.',
      pt: 'Conte-nos a sua ideia e a transformaremos em uma experiência única, elegante e memorável.'
    },

    /* ---------- ÁREAS ---------- */
    ar_title: {
      es: 'Áreas de Trabajo · Nicole Márquez Tarija',
      en: 'Work Areas · Nicole Márquez Tarija',
      fr: 'Domaines d’expertise · Nicole Márquez Tarija',
      pt: 'Áreas de Trabalho · Nicole Márquez Tarija'
    },
    ar_meta: {
      es: 'Áreas de trabajo de Nicole Márquez Organización de Eventos: planificación, diseño, logística, protocolo y coordinación integral en Tarija.',
      en: 'Work areas of Nicole Márquez Event Planning: planning, design, logistics, protocol and comprehensive coordination in Tarija.',
      fr: 'Domaines d’expertise de Nicole Márquez Organisation d’Événements : planification, conception, logistique, protocole et coordination complète à Tarija.',
      pt: 'Áreas de trabalho da Nicole Márquez Organização de Eventos: planejamento, design, logística, protocolo e coordenação integral em Tarija.'
    },
    ar_hero_kicker: { es: 'Todo bajo un mismo equipo', en: 'All under one team', fr: 'Tout au sein d’une même équipe', pt: 'Tudo sob uma mesma equipe' },
    ar_hero_h1: { es: 'Áreas de <em>Trabajo</em>', en: 'Work <em>Areas</em>', fr: 'Domaines d’<em>expertise</em>', pt: 'Áreas de <em>Trabalho</em>' },
    ar_hero_p: {
      es: 'Coordinamos cada engranaje de tu celebración para que tú solo te ocupes de disfrutarla.',
      en: 'We coordinate every part of your celebration so that you only have to enjoy it.',
      fr: 'Nous coordonnons chaque rouage de votre célébration pour que vous n’ayez qu’à en profiter.',
      pt: 'Coordenamos cada engrenagem da sua celebração para que você só precise aproveitá-la.'
    },
    ar_kicker: { es: 'Lo que cuidamos por ti', en: 'What we take care of for you', fr: 'Ce dont nous prenons soin pour vous', pt: 'O que cuidamos por você' },
    ar_h2: { es: 'Organización integral, de inicio a fin', en: 'Comprehensive organization, from start to finish', fr: 'Une organisation complète, du début à la fin', pt: 'Organização integral, do início ao fim' },
    ar_p: {
      es: 'Planificamos, coordinamos y supervisamos cada etapa del evento, cuidando cada detalle para que todo fluya con elegancia y naturalidad.',
      en: 'We plan, coordinate and supervise every stage of the event, caring for every detail so that everything flows with elegance and ease.',
      fr: 'Nous planifions, coordonnons et supervisons chaque étape de l’événement, en soignant chaque détail pour que tout se déroule avec élégance et naturel.',
      pt: 'Planejamos, coordenamos e supervisionamos cada etapa do evento, cuidando de cada detalhe para que tudo flua com elegância e naturalidade.'
    },
    area1_h4: { es: 'Planificación y organización integral', en: 'Comprehensive planning and organization', fr: 'Planification et organisation complètes', pt: 'Planejamento e organização integral' },
    area1_p: { es: 'Estructuramos cada etapa del evento, del concepto inicial al cierre, para que todo ocurra según lo previsto.', en: 'We structure every stage of the event, from the initial concept to the closing, so that everything happens as planned.', fr: 'Nous structurons chaque étape de l’événement, du concept initial à la clôture, pour que tout se déroule comme prévu.', pt: 'Estruturamos cada etapa do evento, do conceito inicial ao encerramento, para que tudo ocorra conforme o previsto.' },
    area2_h4: { es: 'Diseño, conceptualización y ambientación', en: 'Design, concept and décor', fr: 'Conception, création et décoration', pt: 'Design, conceituação e ambientação' },
    area2_p: { es: 'Definimos la identidad visual de tu celebración: estilo, paleta y ambientación con carácter propio.', en: 'We define the visual identity of your celebration: style, palette and décor with its own character.', fr: 'Nous définissons l’identité visuelle de votre célébration : style, palette et décoration au caractère unique.', pt: 'Definimos a identidade visual da sua celebração: estilo, paleta e ambientação com caráter próprio.' },
    area3_h4: { es: 'Selección y coordinación de proveedores', en: 'Supplier selection and coordination', fr: 'Sélection et coordination des prestataires', pt: 'Seleção e coordenação de fornecedores' },
    area3_p: { es: 'Elegimos y coordinamos proveedores confiables, cuidando la calidad de cada servicio.', en: 'We choose and coordinate reliable suppliers, ensuring the quality of every service.', fr: 'Nous choisissons et coordonnons des prestataires fiables, en veillant à la qualité de chaque service.', pt: 'Escolhemos e coordenamos fornecedores confiáveis, cuidando da qualidade de cada serviço.' },
    area4_h4: { es: 'Gestión logística y cronograma', en: 'Logistics management and schedule', fr: 'Gestion logistique et planning', pt: 'Gestão logística e cronograma' },
    area4_p: { es: 'Organizamos tiempos, recursos y movimientos con un cronograma preciso para cada momento.', en: 'We organize timing, resources and movements with a precise schedule for every moment.', fr: 'Nous organisons le temps, les ressources et les déplacements avec un planning précis pour chaque moment.', pt: 'Organizamos tempos, recursos e movimentos com um cronograma preciso para cada momento.' },
    area5_h4: { es: 'Protocolo y atención de invitados', en: 'Protocol and guest care', fr: 'Protocole et accueil des invités', pt: 'Protocolo e atendimento aos convidados' },
    area5_p: { es: 'Cuidamos el protocolo y la recepción para que cada invitado se sienta bienvenido.', en: 'We look after protocol and reception so that every guest feels welcome.', fr: 'Nous veillons au protocole et à l’accueil pour que chaque invité se sente le bienvenu.', pt: 'Cuidamos do protocolo e da recepção para que cada convidado se sinta bem-vindo.' },
    area6_h4: { es: 'Entretenimiento y producción artística', en: 'Entertainment and artistic production', fr: 'Divertissement et production artistique', pt: 'Entretenimento e produção artística' },
    area6_p: { es: 'Música, shows y experiencias que dan vida y energía a la celebración.', en: 'Music, shows and experiences that bring life and energy to the celebration.', fr: 'Musique, spectacles et expériences qui donnent vie et énergie à la célébration.', pt: 'Música, shows e experiências que dão vida e energia à celebração.' },
    area7_h4: { es: 'Coordinación y supervisión durante el evento', en: 'Coordination and supervision during the event', fr: 'Coordination et supervision pendant l’événement', pt: 'Coordenação e supervisão durante o evento' },
    area7_p: { es: 'Dirigimos el evento minuto a minuto para que todo fluya con naturalidad.', en: 'We direct the event minute by minute so that everything flows naturally.', fr: 'Nous dirigeons l’événement minute par minute pour que tout se déroule naturellement.', pt: 'Dirigimos o evento minuto a minuto para que tudo flua com naturalidade.' },
    area8_h4: { es: 'Resolución de imprevistos y cuidado del detalle', en: 'Handling the unexpected and attention to detail', fr: 'Gestion des imprévus et souci du détail', pt: 'Resolução de imprevistos e cuidado com o detalhe' },
    area8_p: { es: 'Anticipamos y resolvemos cualquier imprevisto para que tú solo disfrutes.', en: 'We anticipate and resolve any unexpected issue so that you can simply enjoy.', fr: 'Nous anticipons et résolvons tout imprévu pour que vous n’ayez qu’à profiter.', pt: 'Antecipamos e resolvemos qualquer imprevisto para que você apenas aproveite.' },
    ar_zone_kicker: { es: 'Dónde celebramos', en: 'Where we celebrate', fr: 'Où nous célébrons', pt: 'Onde celebramos' },
    ar_zone_h2: { es: 'La campiña <em>tarijeña</em> y más allá', en: 'The Tarija <em>countryside</em> and beyond', fr: 'La campagne de <em>Tarija</em> et au-delà', pt: 'O campo <em>tarijenho</em> e além' },
    ar_zone_p: {
      es: 'Atendemos bodas, eventos sociales y corporativos en Tarija y otros destinos, según las características de cada celebración. Conocemos cada rincón donde un evento puede volverse memorable: de los viñedos del valle a los salones de la ciudad.',
      en: 'We serve weddings, social and corporate events in Tarija and other destinations, according to the characteristics of each celebration. We know every corner where an event can become memorable: from the valley’s vineyards to the city’s halls.',
      fr: 'Nous assurons des mariages, des événements sociaux et corporatifs à Tarija et dans d’autres lieux, selon les caractéristiques de chaque célébration. Nous connaissons chaque recoin où un événement peut devenir mémorable : des vignobles de la vallée aux salons de la ville.',
      pt: 'Atendemos casamentos, eventos sociais e corporativos em Tarija e outros destinos, conforme as características de cada celebração. Conhecemos cada canto onde um evento pode se tornar memorável: dos vinhedos do vale aos salões da cidade.'
    },
    zone1: { es: 'Campiña tarijeña <span>Viñedos &amp; haciendas</span>', en: 'Tarija countryside <span>Vineyards &amp; estates</span>', fr: 'Campagne de Tarija <span>Vignobles &amp; domaines</span>', pt: 'Campo tarijenho <span>Vinhedos &amp; haciendas</span>' },
    zone2: { es: 'Ciudad de Tarija <span>Salones &amp; jardines</span>', en: 'City of Tarija <span>Halls &amp; gardens</span>', fr: 'Ville de Tarija <span>Salons &amp; jardins</span>', pt: 'Cidade de Tarija <span>Salões &amp; jardins</span>' },
    zone3: { es: 'Valle de la Concepción <span>Bodegas</span>', en: 'Valle de la Concepción <span>Wineries</span>', fr: 'Valle de la Concepción <span>Caves viticoles</span>', pt: 'Valle de la Concepción <span>Vinícolas</span>' },
    zone4: { es: 'Otros destinos <span>A consultar</span>', en: 'Other destinations <span>On request</span>', fr: 'Autres lieux <span>Sur demande</span>', pt: 'Outros destinos <span>A consultar</span>' },
    mapcard: { es: '<b>Tarija</b><span>Bolivia · Sur</span>', en: '<b>Tarija</b><span>Bolivia · South</span>', fr: '<b>Tarija</b><span>Bolivie · Sud</span>', pt: '<b>Tarija</b><span>Bolívia · Sul</span>' },
    ar_cta_kicker: { es: 'Comencemos', en: 'Let’s begin', fr: 'Commençons', pt: 'Vamos começar' },
    ar_cta_h2: { es: 'Tu evento empieza con una conversación', en: 'Your event starts with a conversation', fr: 'Votre événement commence par une conversation', pt: 'O seu evento começa com uma conversa' },
    ar_cta_p: { es: 'Cuéntanos qué imaginas. Nosotros nos encargamos de todo lo demás.', en: 'Tell us what you imagine. We take care of everything else.', fr: 'Dites-nous ce que vous imaginez. Nous nous occupons de tout le reste.', pt: 'Conte-nos o que você imagina. Nós cuidamos de todo o resto.' },
    ar_cta_btn1: { es: 'Conversemos', en: 'Let’s talk', fr: 'Discutons', pt: 'Vamos conversar' },
    ar_cta_btn2: { es: 'Conoce a la organizadora', en: 'Meet the organizer', fr: 'Rencontrez l’organisatrice', pt: 'Conheça a organizadora' },

    /* ---------- CONTACTO ---------- */
    co_title: {
      es: 'Contacto · Nicole Márquez Organización de Eventos · Tarija',
      en: 'Contact · Nicole Márquez Event Planning · Tarija',
      fr: 'Contact · Nicole Márquez Organisation d’Événements · Tarija',
      pt: 'Contato · Nicole Márquez Organização de Eventos · Tarija'
    },
    co_meta: {
      es: 'Conversemos sobre tu próximo evento. Contacta a Nicole Márquez en Tarija: WhatsApp, correo y formulario.',
      en: 'Let’s talk about your next event. Contact Nicole Márquez in Tarija: WhatsApp, email and form.',
      fr: 'Parlons de votre prochain événement. Contactez Nicole Márquez à Tarija : WhatsApp, e-mail et formulaire.',
      pt: 'Vamos falar sobre o seu próximo evento. Contate Nicole Márquez em Tarija: WhatsApp, e-mail e formulário.'
    },
    co_hero_kicker: { es: 'Hablemos de tu celebración', en: 'Let’s talk about your celebration', fr: 'Parlons de votre célébration', pt: 'Vamos falar sobre a sua celebração' },
    co_hero_h1: {
      es: 'Conversemos sobre tu<br>próximo <em>evento</em>',
      en: 'Let’s talk about your<br>next <em>event</em>',
      fr: 'Parlons de votre<br>prochain <em>événement</em>',
      pt: 'Vamos falar sobre o seu<br>próximo <em>evento</em>'
    },
    co_hero_p: {
      es: 'Cada gran celebración comienza con una idea. Queremos conocer la tuya, escuchar lo que imaginas y ayudarte a convertirla en una experiencia única, elegante y memorable.',
      en: 'Every great celebration begins with an idea. We want to know yours, hear what you imagine and help you turn it into a unique, elegant and memorable experience.',
      fr: 'Chaque grande célébration commence par une idée. Nous voulons connaître la vôtre, écouter ce que vous imaginez et vous aider à la transformer en une expérience unique, élégante et mémorable.',
      pt: 'Cada grande celebração começa com uma ideia. Queremos conhecer a sua, ouvir o que você imagina e ajudá-lo a transformá-la em uma experiência única, elegante e memorável.'
    },
    co_info_kicker: { es: 'Contacto directo', en: 'Direct contact', fr: 'Contact direct', pt: 'Contato direto' },
    co_info_h2: { es: 'Estamos para ti', en: 'We’re here for you', fr: 'Nous sommes là pour vous', pt: 'Estamos aqui para você' },
    co_info_p: {
      es: 'Cuéntanos qué tipo de evento estás planificando, la fecha aproximada, el lugar y aquello que te gustaría hacer realidad. Nos pondremos en contacto contigo para brindarte una atención personalizada.',
      en: 'Tell us what type of event you are planning, the approximate date, the venue and what you would like to make real. We will get in touch with you to offer personalized attention.',
      fr: 'Dites-nous quel type d’événement vous planifiez, la date approximative, le lieu et ce que vous aimeriez concrétiser. Nous vous contacterons pour vous offrir une attention personnalisée.',
      pt: 'Conte-nos que tipo de evento você está planejando, a data aproximada, o local e aquilo que gostaria de tornar realidade. Entraremos em contato com você para oferecer um atendimento personalizado.'
    },
    co_phone_label: { es: 'Teléfono / WhatsApp', en: 'Phone / WhatsApp', fr: 'Téléphone / WhatsApp', pt: 'Telefone / WhatsApp' },
    co_email_label: { es: 'Correo electrónico', en: 'Email', fr: 'E-mail', pt: 'E-mail' },
    co_loc_label: { es: 'Ubicación', en: 'Location', fr: 'Emplacement', pt: 'Localização' },
    co_follow: { es: 'Síguenos', en: 'Follow us', fr: 'Suivez-nous', pt: 'Siga-nos' },
    co_form_h3: { es: 'Solicita una reunión', en: 'Request a meeting', fr: 'Demandez un rendez-vous', pt: 'Solicite uma reunião' },
    co_form_sub: {
      es: 'Completa el formulario y te contactaremos para diseñar tu evento. Tu mensaje llegará directamente a nuestro correo.',
      en: 'Fill out the form and we will contact you to design your event. Your message will go directly to our email.',
      fr: 'Remplissez le formulaire et nous vous contacterons pour concevoir votre événement. Votre message arrivera directement dans notre boîte mail.',
      pt: 'Preencha o formulário e entraremos em contato para projetar o seu evento. A sua mensagem chegará diretamente ao nosso e-mail.'
    },
    co_name_label: { es: 'Nombre completo', en: 'Full name', fr: 'Nom complet', pt: 'Nome completo' },
    co_name_ph: { es: 'Tu nombre', en: 'Your name', fr: 'Votre nom', pt: 'O seu nome' },
    co_type_label: { es: 'Tipo de evento', en: 'Type of event', fr: 'Type d’événement', pt: 'Tipo de evento' },
    co_email_ph: { es: 'tucorreo@ejemplo.com', en: 'youremail@example.com', fr: 'votremail@exemple.com', pt: 'seuemail@exemplo.com' },
    opt_boda: { es: 'Boda', en: 'Wedding', fr: 'Mariage', pt: 'Casamento' },
    opt_social: { es: 'Evento social', en: 'Social event', fr: 'Événement social', pt: 'Evento social' },
    opt_corp: { es: 'Evento corporativo', en: 'Corporate event', fr: 'Événement corporatif', pt: 'Evento corporativo' },
    opt_dest: { es: 'Evento destino', en: 'Destination event', fr: 'Événement sur destination', pt: 'Evento destino' },
    opt_other: { es: 'Otro', en: 'Other', fr: 'Autre', pt: 'Outro' },
    co_msg_label: { es: 'Cuéntanos más', en: 'Tell us more', fr: 'Dites-nous en plus', pt: 'Conte-nos mais' },
    co_msg_ph: { es: 'Fecha aproximada, lugar, número de invitados y lo que imaginas...', en: 'Approximate date, venue, number of guests and what you imagine...', fr: 'Date approximative, lieu, nombre d’invités et ce que vous imaginez...', pt: 'Data aproximada, local, número de convidados e o que você imagina...' },
    co_submit: { es: 'Solicitar una reunión', en: 'Request a meeting', fr: 'Demander un rendez-vous', pt: 'Solicitar uma reunião' },
    co_form_note: { es: 'Al enviar, se abrirá tu correo con el mensaje listo para confirmar.', en: 'When you submit, your email will open with the message ready to confirm.', fr: 'En envoyant, votre messagerie s’ouvrira avec le message prêt à confirmer.', pt: 'Ao enviar, o seu e-mail será aberto com a mensagem pronta para confirmar.' },
    co_hours1_label: { es: 'Lunes a Viernes', en: 'Monday to Friday', fr: 'Du lundi au vendredi', pt: 'Segunda a sexta' },
    co_hours2_label: { es: 'Sábados', en: 'Saturdays', fr: 'Samedis', pt: 'Sábados' },
    co_hours3_label: { es: 'Reuniones', en: 'Meetings', fr: 'Rendez-vous', pt: 'Reuniões' },
    co_hours3_val: { es: 'Previa cita', en: 'By appointment', fr: 'Sur rendez-vous', pt: 'Com hora marcada' },
    co_cta_kicker: { es: 'Tu evento empieza aquí', en: 'Your event starts here', fr: 'Votre événement commence ici', pt: 'O seu evento começa aqui' },
    co_cta_h2: { es: 'Permítenos acompañarte', en: 'Let us accompany you', fr: 'Laissez-nous vous accompagner', pt: 'Permita-nos acompanhá-lo' },
    co_cta_p: {
      es: 'Con experiencia, creatividad y atención personalizada, juntos podemos transformar tu idea en una celebración verdaderamente inolvidable.',
      en: 'With experience, creativity and personalized attention, together we can transform your idea into a truly unforgettable celebration.',
      fr: 'Avec expérience, créativité et attention personnalisée, ensemble nous pouvons transformer votre idée en une célébration vraiment inoubliable.',
      pt: 'Com experiência, criatividade e atendimento personalizado, juntos podemos transformar a sua ideia em uma celebração verdadeiramente inesquecível.'
    },
    co_cta_btn: { es: 'Escribir por WhatsApp', en: 'Message on WhatsApp', fr: 'Écrire sur WhatsApp', pt: 'Escrever pelo WhatsApp' },

    /* ---------- CORREO del formulario (contacto) ---------- */
    mail_subject: { es: 'Solicitud de reunión', en: 'Meeting request', fr: 'Demande de rendez-vous', pt: 'Solicitação de reunião' },
    mail_name: { es: 'Nombre', en: 'Name', fr: 'Nom', pt: 'Nome' },
    mail_email: { es: 'Correo', en: 'Email', fr: 'E-mail', pt: 'E-mail' },
    mail_type: { es: 'Tipo de evento', en: 'Type of event', fr: 'Type d’événement', pt: 'Tipo de evento' },
    mail_default: { es: 'Nuevo contacto', en: 'New contact', fr: 'Nouveau contact', pt: 'Novo contato' },

    /* ---------- Botón flotante de WhatsApp ---------- */
    wa_aria: { es: 'Escríbenos por WhatsApp', en: 'Message us on WhatsApp', fr: 'Écrivez-nous sur WhatsApp', pt: 'Fale conosco pelo WhatsApp' },
    wa_text: {
      es: 'Hola, me gustaría más información sobre sus servicios de organización de eventos.',
      en: 'Hello, I would like more information about your event planning services.',
      fr: 'Bonjour, je souhaiterais plus d’informations sur vos services d’organisation d’événements.',
      pt: 'Olá, gostaria de mais informações sobre os seus serviços de organização de eventos.'
    },

    /* ---------- Página 404 ---------- */
    nf_title: { es: 'Página no encontrada · Nicole Márquez', en: 'Page not found · Nicole Márquez', fr: 'Page introuvable · Nicole Márquez', pt: 'Página não encontrada · Nicole Márquez' },
    nf_kicker: { es: 'Error 404', en: 'Error 404', fr: 'Erreur 404', pt: 'Erro 404' },
    nf_h1: { es: 'Esta página se<br>ha <em>extraviado</em>', en: 'This page has<br>gone <em>missing</em>', fr: 'Cette page s’est<br><em>égarée</em>', pt: 'Esta página se<br><em>perdeu</em>' },
    nf_text: {
      es: 'Lo sentimos, no encontramos lo que buscabas. Volvamos a un lugar seguro para seguir planeando tu celebración.',
      en: 'Sorry, we couldn’t find what you were looking for. Let’s go back to a safe place to keep planning your celebration.',
      fr: 'Désolés, nous n’avons pas trouvé ce que vous cherchiez. Revenons en lieu sûr pour continuer à planifier votre célébration.',
      pt: 'Desculpe, não encontramos o que você procurava. Vamos voltar a um lugar seguro para continuar planejando a sua celebração.'
    },
    nf_btn: { es: 'Volver al inicio', en: 'Back to home', fr: 'Retour à l’accueil', pt: 'Voltar ao início' }
  };

  /* ---------- Motor ---------- */
  function getLang() {
    // Español por defecto; solo cambia si el visitante lo eligió antes.
    const l = localStorage.getItem('nm-lang');
    return LANGS.indexOf(l) !== -1 ? l : 'es';
  }

  function translate(key, lang) {
    const entry = T[key];
    if (!entry) return null;
    return entry[lang] != null ? entry[lang] : entry.es;
  }

  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = translate(el.getAttribute('data-i18n'), lang);
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const v = translate(el.getAttribute('data-i18n-ph'), lang);
      if (v != null) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const v = translate(el.getAttribute('data-i18n-aria'), lang);
      if (v != null) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const v = translate(el.getAttribute('data-i18n-content'), lang);
      if (v != null) el.setAttribute('content', v);
    });

    document.querySelectorAll('.lang-switch [data-lang]').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  // API global para scripts en línea (p. ej. el formulario de contacto)
  window.NM_I18N = {
    t: function (key) { return translate(key, getLang()) || ''; },
    lang: getLang,
    set: setLang
  };

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    localStorage.setItem('nm-lang', lang);
    apply(lang);
  }

  // Aplica lo antes posible
  apply(getLang());

  document.addEventListener('DOMContentLoaded', () => {
    apply(getLang());
    document.querySelectorAll('.lang-switch [data-lang]').forEach((b) => {
      b.addEventListener('click', () => setLang(b.getAttribute('data-lang')));
    });
  });
})();
