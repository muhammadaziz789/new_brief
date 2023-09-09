export interface ListItem {
  text?: string | any;
  subtext?: string;
  select?: { text: string; active: boolean; id: number }[];
  child?: {
    text: string;
    text_area?: boolean;
    select?: boolean;
    list?: {
      title?: string;
      text?: string;
      active: boolean;
      id: number;
      image?: string;
    }[];
  }[];
}

export const list: ListItem[] = [
  {
    text: "Kontakt ma’lumotlar",
    child: [
      {
        text: "Loyiha nomi",
      },
      {
        text: "Ism-familiya",
      },
      {
        text: "Lavozim",
      },
      {
        text: "Telefon raqam",
      },
      {
        text: "Kompaniya manzili",
      },
      {
        text: "Veb-sayt va ijtimoiy tarmoqlar ma’lumotlari",
      },
      {
        text: "Flayer va reklama bannerlari uchun ma’lumotlar",
        text_area: true,
      },
      {
        text: "Qo’shimcha ma’lumotlar",
        text_area: true,
      },
      {
        text: "Yangi logotip ishlab chiqish kerakmi yoki eskisini redizayn qilish kerakmi?",
        select: true,
        list: [
          {
            text: "Yangi logotip",
            active: false,
            id: 1,
          },
          {
            text: "Redizayn",
            active: false,
            id: 2,
          },
        ],
      },
    ],
  },
  {
    text: "Biznes faoliyati haqida ma’lumotlar",
    child: [
      {
        text: "Brendning kuchli tomonlari",
      },
      {
        text: "Brend missiyasi",
      },
      {
        text: "Brendning qadriyatlari",
      },
      {
        text: "Brend xarakteri",
      },
      {
        text: "Brend va’dasi",
      },
      {
        text: "Brend segmenti",
      },
      {
        text: "Mijozlari haqida",
      },
    ],
  },
  {
    text: "Logotip haqida ma’lumotlar",
    select: [
      {
        text: "Tasdiqlash ishorasi bilan belgilang.",
        active: false,
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
            id: 1,
            image: "/svg/Brif/evos.svg",
          },
          {
            title: "To'q sariq rang",
            active: false,
            id: 2,
            image: "/svg/Brif/apelsin.svg",
          },
          {
            title: "Sariq rang",
            active: false,
            id: 3,
            image: "/svg/Brif/goldin.svg",
          },
          {
            title: "Kumush rang",
            active: false,
            id: 4,
            image: "/svg/Brif/elegant.svg",
          },
          {
            title: "Qizil rang",
            active: false,
            id: 5,
            image: "/svg/Brif/energy.svg",
          },
          {
            title: "Siyoh rang",
            active: false,
            id: 6,
            image: "/svg/Brif/creative.svg",
          },
          {
            title: "Pushti rang",
            active: false,
            id: 7,
            image: "/svg/Brif/pink.svg",
          },
          {
            title: "Ko’k rang",
            active: false,
            id: 8,
            image: "/svg/Brif/blue.svg",
          },
          {
            title: "Qora rang",
            active: false,
            id: 9,
            image: "/svg/Brif/black.svg",
          },
          {
            title: "Jigar rang",
            active: false,
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
        text: "Logotipingiz sohangizni bildirib tursinmi?"
      },
      {
        text: "Logotipingiz aniq bo‘lsinmi yoki mavhummi?"
      }
    ],
  },
  {
    text: "Logotip haqida qo’shimcha ma’lumotlar",
    child: [
      {
        text: "Logotipda nima umuman tasvirlanmasligini xohlaysiz?"
      },
      {
        text: "Deskriptor/sloganingiz bormi? Logotipda ishlatilishi kerakmi?"
      },
      {
        text: "Raqobatchilaringiz kimlar?"
      },
      {
        text: "Sizni mijozlaringiz qayerlarda ko’radi?"
      },
      {
        text: "Nechta odam logotip bo’yicha yakuniy qarorni qabul qiladi?"
      }
    ]
  }
];
