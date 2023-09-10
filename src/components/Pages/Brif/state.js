
export const list = [
  {
    text: "Kontakt ma’lumotlar",
    key: "contact_infos",
    child: [
      {
        text: "Loyiha nomi",
        key: "project_name"
      },
      {
        text: "Ism-familiya",
        key: "full_name"
      },
      {
        text: "Lavozim",
        key: "position"
      },
      {
        text: "Telefon raqam",
        key: "phone_number"
      },
      {
        text: "Kompaniya manzili",
        key: "company"
      },
      {
        text: "Veb-sayt va ijtimoiy tarmoqlar ma’lumotlari",
        key: "social_info"
      },
      {
        text: "Flayer va reklama bannerlari uchun ma’lumotlar",
        text_area: true,
        key: "banner_adds"
      },
      {
        text: "Qo’shimcha ma’lumotlar",
        text_area: true,
        key: "additional_info"
      },
      {
        text: "Yangi logotip ishlab chiqish kerakmi yoki eskisini redizayn qilish kerakmi?",
        select: true,
        list: [
          {
            text: "Yangi logotip",
            active: false,
            key: "new_logo",
            id: 1,
          },
          {
            text: "Redizayn",
            active: false,
            key: "redesign",
            id: 2,
          },
        ],
      },
    ],
  },
  {
    text: "Biznes faoliyati haqida ma’lumotlar",
    key: "info_business",
    child: [
      {
        text: "Brendning kuchli tomonlari",
        key: "brend_strength"
      },
      {
        text: "Brend missiyasi",
        key: "brend_mission"
      },
      {
        text: "Brendning qadriyatlari",
        key: "brend_ability"
      },
      {
        text: "Brend xarakteri",
        key: "brend_character"
      },
      {
        text: "Brend va’dasi",
        key: "brend_promise"
      },
      {
        text: "Brend segmenti",
        key: "brend_segment"
      },
      {
        text: "Mijozlari haqida",
        key: "brend_clients"
      },
    ],
  },
  {
    text: "Logotip haqida ma’lumotlar",
    key: "logo_info",
    select: [
      {
        text: "Tasdiqlash ishorasi bilan belgilang.",
        active: false,
        key: "info_logo",
        id: 1,
      },
    ],
    child: [
      {
        text: "Logotipingiz qanday rangda bo’lsin?",
        list: [
          {
            title: "Yashil rang",
            active: false,
            key: "green",
            id: 1,
            image: "/svg/Brif/evos.svg",
          },
          {
            title: "To'q sariq rang",
            active: false,
            key: "orange",
            id: 2,
            image: "/svg/Brif/apelsin.svg",
          },
          {
            title: "Sariq rang",
            active: false,
            key: "yellow",
            id: 3,
            image: "/svg/Brif/goldin.svg",
          },
          {
            title: "Kumush rang",
            active: false,
            key: "silver",
            id: 4,
            image: "/svg/Brif/elegant.svg",
          },
          {
            title: "Qizil rang",
            active: false,
            key: "red",
            id: 5,
            image: "/svg/Brif/energy.svg",
          },
          {
            title: "Siyoh rang",
            key: "ink",
            active: false,
            id: 6,
            image: "/svg/Brif/creative.svg",
          },
          {
            title: "Pushti rang",
            active: false,
            key: "pink",
            id: 7,
            image: "/svg/Brif/pink.svg",
          },
          {
            title: "Ko’k rang",
            active: false,
            key: "blue",
            id: 8,
            image: "/svg/Brif/blue.svg",
          },
          {
            title: "Qora rang",
            active: false,
            key: "black",
            id: 9,
            image: "/svg/Brif/black.svg",
          },
          {
            title: "Jigar rang",
            active: false,
            key: "brown",
            id: 10,
            image: "/svg/Brif/brown.svg",
          },
        ],
      },
      {
        text: "Qanday rang umuman ishlatilmasin?",
      },
      {
        text: "Logotipingiz qanday stilda bo’lsin?"
      },
      {
        text: "Logotipingiz sohangizni bildirib tursinmi?",
        
      },
      {
        text: "Logotipingiz aniq bo‘lsinmi yoki mavhummi?"
      }
    ],
  },
  {
    text: "Logotip haqida qo’shimcha ma’lumotlar",
    key: "logo_additional_info",
    child: [
      {
        text: "Logotipda nima umuman tasvirlanmasligini xohlaysiz?",
        key: "hidden_in_logo"
      },
      {
        text: "Deskriptor/sloganingiz bormi? Logotipda ishlatilishi kerakmi?",
        key: "slogon_logo",
        slogon_active: false
      },
      {
        text: "Raqobatchilaringiz kimlar?",
        key: "competitors"
      },
      {
        text: "Sizni mijozlaringiz qayerlarda ko’radi?",
        key: "clients_view"
      },
      {
        text: "Nechta odam logotip bo’yicha yakuniy qarorni qabul qiladi?",
        key: "final_decision"
      }
    ]
  }
];
