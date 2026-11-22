import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type Language = "en" | "ka";
type ExperienceIconName = "harvest" | "stay" | "process" | "tasting" | "cuisine" | "evening" | "wellness" | "biscuit";

const content = {
  en: {
    metaDescription: "A little escape. A lot of stories. Discover Marta’s Tea Resort in Narazeni, Samegrelo, Georgia.",
    nav: ["Our Story", "Tea Experience", "Journeys", "Stay", "Plan Your Stay"],
    menu: "Menu",
    close: "Close",
    language: "Choose language",
    navigation: "Main navigation",
    homeLabel: "Marta’s Tea Resort — home",
    heroStories: [
      "Some stories begin\nlong before us.",
      "Rooted in the soil\nof Samegrelo.",
      "Picked by hand.",
      "Made slowly.\nShared with love.",
      "More than tea.",
    ],
    heroTitle: "MARTA’S TEA RESORT",
    heroTagline: "A little escape. A lot of stories.",
    slogansLabel: "Marta’s Tea Resort",
    slogans: ["Harvest a memory.", "Stay. Taste. Discover.", "Where tea becomes a journey."],
    location: "Narazeni, Samegrelo, Georgia.",
    scroll: "SCROLL TO UNFOLD",
    discover: "Discover Marta’s",
    planStay: "Plan Your Stay",
    bookNow: "Book Now",
    storyTitle: "A Garden. A Family. A Story.",
    storyDescription: "It started with our grandmother’s tea garden. Today, we’d love to share it with you.",
    storyImage: "Fresh tea leaves growing in the plantation",
    experienceDirectoryTitle: "Explore the estate",
    experienceDirectory: [
      { label: "Tea harvest", href: "#experience", icon: "harvest" },
      { label: "Guesthouses", href: "#stay", icon: "stay" },
      { label: "Tea making", href: "#tea-journey", icon: "process" },
      { label: "Tea tasting", href: "#tea-journey", icon: "tasting" },
      { label: "Megrelian table", href: "#morning-tea", icon: "cuisine" },
      { label: "Evening music", href: "#evenings", icon: "evening" },
      { label: "Tea wellness", href: "#wellness", icon: "wellness" },
      { label: "Biscuit making", href: "#kitchen", icon: "biscuit" },
    ],
    timelineTitle: "Our Timeline.",
    timelineSelectYear: "Choose a year",
    timeline: [
      ["2021", "A small family idea: bringing our grandmother’s tea garden story back to life."],
      ["2022", "Our first guests and sales; introducing tea to customers."],
      ["2023", "More guests and growing awareness."],
      ["2024", "Product development, new packaging and expanded sales."],
      ["2025", "A wider tea experience and new customers."],
      ["2026", "Growing tea tourism and shaping the resort concept."],
      ["2027+", "Marta’s Tea Resort — a place to stay, tourism, culture and our own tea brand."],
    ],
    experienceTitle: "From Leaf to Cup.",
    experienceLine: "Pick it. Make it. Taste it.",
    experienceDescription: "Discover the journey of Georgian tea, one leaf at a time.",
    exploreExperience: "Explore the Experience",
    experienceImage: "Visitors harvesting tea by hand",
    teaJourneyIndex: "04 / THE TEA JOURNEY",
    teaJourneyTitle: "Tea Journey — The Full Tea Experience",
    teaJourneySteps: [
      ["Tea Harvesting", "Pick tea leaves by hand. Take a small basket, learn how to pick them carefully and join the harvest."],
      ["Tea Making", "Learn how tea is made: selecting, withering, rolling, oxidation and drying the leaves."],
      ["The Drying Room", "See the drying process and discover how tea varieties and aromas differ."],
      ["Tea Tasting", "Taste different teas, learn to brew them well, explore their aromas and enjoy sweet pairings."],
      ["My Own Tea", "Choose a tea, design your own packaging and add a name or date. Take it home or have it sent to you."],
    ],
    journeysIndex: "05 / TEA JOURNEYS",
    journeys: [
      {
        title: "The Tea Discovery",
        duration: "Half-day experience",
        activities: ["Tea plantation tour", "Pick tea leaves", "Learn about tea processing", "Tea tasting", "Megrelian tea and a traditional sweet"],
      },
      {
        title: "The Tea Escape",
        duration: "1 night / 2 days",
        activities: ["Cottage stay", "Tea experience", "Megrelian dinner", "Evening fire and music", "Breakfast overlooking the tea plantation", "Personalized tea packaging"],
      },
      {
        title: "The Samegrelo Journey",
        duration: "2 nights / 3 days",
        activities: ["Accommodation", "Full Tea Journey", "Megrelian cooking masterclass", "Riverside picnic", "Zugdidi and Dadiani Palace tour", "Enguri or another excursion of your choice", "Personalized tea"],
      },
      {
        title: "The Tea Maker",
        duration: "For tea lovers / special experience",
        activities: ["Pick tea leaves", "Tea processing and drying", "Create your own tea blend", "Design a name and label", "Packaging", "Option to have your tea sent home"],
      },
    ],
    stayTitle: "Wake Up Somewhere Green.",
    stayDescription: "Slow mornings. Fresh tea. Views worth waking up for.",
    guesthouses: "Explore Our Guesthouses",
    stayImage: "A peaceful guesthouse surrounded by green",
    morningTitle: "Marta’s Morning Tea Table",
    morningTable: [
      "Freshly brewed tea from our garden.",
      "Megrelian pies and local baked goods.",
      "Cheese, mchadi and seasonal produce.",
      "Honey, fruit and jam.",
      "A little dessert paired with tea.",
      "An English-style tea service: scones, preserves and delicate sandwiches.",
      "Breakfast on the terrace overlooking the tea plantation.",
    ],
    morningImage: "Breakfast served on the terrace",
    cookieImage: "Green tea cookies for the morning table",
    eveningsTitle: "The Megrelian Evening",
    eveningsDescription: "Good food. Open fire. Local music.",
    eveningsImage: "An older woman kneading dough in a traditional Megrelian kitchen",
    eveningActivities: [
      "A place to gather around an open fire.",
      "A Megrelian dinner.",
      "Local wine and tea.",
      "Live Megrelian chonguri or a carefully curated music evening.",
      "Stories of the region and its tea.",
      "Candlelight and the natural setting.",
      "Stargazing and a quiet evening.",
    ],
    wellnessTitle: "A Little Time for You.",
    wellnessDescription: "Relax, recharge and enjoy the natural side of tea.",
    wellnessImage: "A guest enjoying a green tea face mask",
    wellnessActivities: [
      "Tea-extract face masks.",
      "Herbal baths or foot-care rituals.",
      "Short facial treatments.",
      "A soothing cup of tea.",
      "Yoga or morning stretches in nature.",
      "Tea meditation — taking time to sip mindfully.",
    ],
    kitchenTitle: "Made by Hand. Enjoyed Together.",
    kitchenDescription: "Discover Megrelian flavours and learn to make our favourite tea biscuits.",
    kitchenImage: "Fresh tea biscuits being prepared",
    kitchenActivities: [
      "Megrelian cooking masterclass.",
      "Making tea biscuits.",
      "A course in desserts paired with tea.",
      "Creating tea-flavoured biscuits.",
      "Packaging your biscuits to take home.",
    ],
    takeHomeTitle: "Your Tea. Your Story.",
    takeHomeDescription: "Pick your tea, personalize the packaging and take a little piece of Samegrelo home.",
    createTea: "Create Your Tea",
    packageImage: "Tea set out for tasting in the plantation",
    regionOverline: "ADDITIONAL TOURS",
    regionTitle: "Discover Samegrelo.",
    regionDescription: "The resort can be your home base for discovering Samegrelo.",
    excursionsTitle: "Suggested excursions",
    excursions: [
      "Dadiani Palace",
      "Enguri hydroelectric station and dam",
      "Martvili Canyon",
      "Riverside picnics",
      "Village and local culture tour",
      "Visit other historic tea-growing sites",
      "Meet local producers and artisans",
    ],
    exploreRegion: "Explore the Region",
    regionImage: "A guest walking through the tea garden",
    finalTitle: "Come for the Tea. Stay for the Story.",
    finalDescription: "We saved you a seat.",
    planVisit: "Get directions on Google Maps",
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    visitRequest: "Ask about a visit",
    visitStatus: "Your email app will open with a visit request.",
    visitSubject: "A visit to Marta’s Tea Resort",
    visitBody: "I’m interested in planning a visit. My email address is:",
    footerBrand: "Marta’s Tea Resort",
    footerLocation: "Narazeni, Samegrelo, Georgia.",
    footerLine: "Tea. Nature. Hospitality.",
    follow: "Follow us on social media.",
    socials: ["Instagram", "Facebook"],
    backToTop: "Back to the beginning ↑",
  },
  ka: {
    metaDescription: "პატარა გაქცევა. ბევრი მოგონება. აღმოაჩინე მარტას ჩაის მამული ნარაზენში, სამეგრელოში.",
    nav: ["ჩვენი ამბავი", "ჩაის გამოცდილება", "ჩაის მოგზაურობები", "დარჩენა", "დაგეგმე სტუმრობა"],
    menu: "მენიუ",
    close: "დახურვა",
    language: "ენის არჩევა",
    navigation: "მთავარი ნავიგაცია",
    homeLabel: "მარტას ჩაის მამული — მთავარი გვერდი",
    heroStories: [
      "ზოგი ამბავი ჩვენზე\nბევრად ადრე იწყება.",
      "სამეგრელოს მიწაში\nფესვგადგმული.",
      "ხელით მოკრეფილი.",
      "ნელა შექმნილი.\nსიყვარულით გაზიარებული.",
      "ჩაიზე მეტია.",
    ],
    heroTitle: "MARTA’S TEA RESORT",
    heroTagline: "პატარა გაქცევა. ბევრი მოგონება.",
    slogansLabel: "მარტას ჩაის მამული",
    slogans: ["მოიმკე მოგონება.", "დარჩი. დააგემოვნე. აღმოაჩინე.", "სადაც ჩაი მოგზაურობად იქცევა."],
    location: "ნარაზენი, სამეგრელო, საქართველო.",
    scroll: "ამბავი განაგრძე",
    discover: "აღმოაჩინე მარტა",
    planStay: "დაგეგმე სტუმრობა",
    bookNow: "დაჯავშნე ახლა",
    storyTitle: "ბაღი. ოჯახი. ისტორია.",
    storyDescription: "ყველაფერი ბებიის ჩაის პლანტაციით დაიწყო. დღეს გვინდა ეს ისტორია თქვენც გაგიზიაროთ.",
    storyImage: "ჩაის ნორჩი ფოთლები პლანტაციაში",
    experienceDirectoryTitle: "აღმოაჩინე მამული",
    experienceDirectory: [
      { label: "ჩაის კრეფა", href: "#experience", icon: "harvest" },
      { label: "კოტეჯები", href: "#stay", icon: "stay" },
      { label: "ჩაის დამზადება", href: "#tea-journey", icon: "process" },
      { label: "ჩაის დეგუსტაცია", href: "#tea-journey", icon: "tasting" },
      { label: "მეგრული სუფრა", href: "#morning-tea", icon: "cuisine" },
      { label: "საღამოს მუსიკა", href: "#evenings", icon: "evening" },
      { label: "ჩაის რიტუალები", href: "#wellness", icon: "wellness" },
      { label: "ორცხობილების ცხობა", href: "#kitchen", icon: "biscuit" },
    ],
    timelineTitle: "ჩვენი ქრონოლოგია.",
    timelineSelectYear: "აირჩიეთ წელი",
    timeline: [
      ["2021", "პატარა საოჯახო იდეა, ბებიის ჩაის პლანტაციის ისტორიის გაცოცხლება."],
      ["2022", "პირველი სტუმრები, პირველი გაყიდვები, ჩაის გაცნობა მომხმარებლებისთვის."],
      ["2023", "სტუმრების რაოდენობის ზრდა, ცნობადობის მოპოვება."],
      ["2024", "პროდუქტის განვითარება, შეფუთვა, გაყიდვების გაფართოება."],
      ["2025", "ჩაის გამოცდილების უფრო ფართო შეთავაზება, ახალი მომხმარებლები."],
      ["2026", "Tea Tourism-ის მიმართულების განვითარება, რეზორტის კონცეფციის ჩამოყალიბება."],
      ["2027+", "Marta’s Tea Resort — საცხოვრებელი, ტურიზმი, კულტურა და საკუთარი პროდუქტის ბრენდი."],
    ],
    experienceTitle: "ფოთლიდან ფინჯნამდე.",
    experienceLine: "დაკრიფე. დაამზადე. დააგემოვნე.",
    experienceDescription: "აღმოაჩინე ქართული ჩაის გზა — ერთი ფოთლიდან დაწყებული.",
    exploreExperience: "აღმოაჩინე გამოცდილება",
    experienceImage: "სტუმრები ჩაის ხელით კრეფენ",
    teaJourneyIndex: "04 / ჩაის სრული გამოცდილება",
    teaJourneyTitle: "Tea Journey — ჩაის სრული გამოცდილება",
    teaJourneySteps: [
      ["ჩაის დაკრეფა", "სტუმარი თავად კრეფს ჩაის ფოთლებს. იღებს პატარა კალათას, სწავლობს სწორად დაკრეფას და მონაწილეობს მოსავლის შეგროვებაში."],
      ["ჩაის დამზადება", "ჩაის დამუშავების პროცესის გაცნობა: ფოთლის შერჩევა, დაჭკნობა, დახვევა, დაჟანგვის ეტაპები და გაშრობა."],
      ["საშრობი ოთახი", "სტუმრები ესწრებიან გაშრობის პროცესს, ეცნობიან განსხვავებებს ჩაის სახეობებსა და არომატებს შორის."],
      ["ჩაის დეგუსტაცია", "სხვადასხვა ჩაის დეგუსტაცია, ჩაის სწორად დაყენება, არომატების გამოცნობა, ჩაისთან შეხამებული ტკბილეული."],
      ["ჩემი ჩაი", "სტუმარი არჩევს ჩაის, ქმნის საკუთარ შეფუთვას, აწერს სახელს ან თარიღს და მიაქვს სახლში ან იძენს ფოსტით გაგზავნის სერვისს."],
    ],
    journeysIndex: "05 / ჩაის მოგზაურობები",
    journeys: [
      {
        title: "ჩაის აღმოჩენა",
        duration: "ნახევარდღიანი გამოცდილება",
        activities: ["ჩაის პლანტაციის ტური", "ჩაის დაკრეფა", "ჩაის დამუშავების პროცესის გაცნობა", "დეგუსტაცია", "მეგრული ჩაი და მცირე ტრადიციული ტკბილეული"],
      },
      {
        title: "ჩაისთან ერთად დასვენება",
        duration: "1 ღამე / 2 დღე",
        activities: ["კოტეჯში განთავსება", "ჩაის გამოცდილება", "მეგრული ვახშამი", "საღამოს ცეცხლი და მუსიკა", "საუზმე ჩაის პლანტაციის ხედით", "ინდივიდუალური ჩაის შეფუთვა"],
      },
      {
        title: "მოგზაურობა სამეგრელოში",
        duration: "2 ღამე / 3 დღე",
        activities: ["განთავსება", "სრული Tea Journey", "მეგრული კულინარიული მასტერკლასი", "მდინარეზე პიკნიკი", "ზუგდიდის და დადიანების სასახლის ტური", "ენგურის ან სხვა არჩეული ექსკურსია", "პერსონალიზებული ჩაი"],
      },
      {
        title: "ჩაის ოსტატი",
        duration: "ჩაის მოყვარულებისთვის / სპეციალური გამოცდილება",
        activities: ["ჩაის დაკრეფა", "ჩაის დამუშავება და გაშრობა", "საკუთარი ჩაის ნაზავის შექმნა", "სახელის და ეტიკეტის დიზაინი", "შეფუთვა", "სტუმრისთვის ჩაის სახლში გაგზავნის შესაძლებლობა"],
      },
    ],
    stayTitle: "გაიღვიძე სიმწვანეში.",
    stayDescription: "მშვიდი დილა. ახალი ჩაი. ხედები, რომელთა გამოც გაღვიძება ღირს.",
    guesthouses: "დაათვალიერე კოტეჯები",
    stayImage: "მყუდრო კოტეჯი სიმწვანეში",
    morningTitle: "მარტას დილის ჩაის სუფრა",
    morningTable: [
      "ახლად დაყენებული საკუთარი ჩაი.",
      "მეგრული ღვეზელები და ადგილობრივი ცომეული.",
      "ყველი, მჭადი და სეზონური პროდუქტები.",
      "თაფლი, ხილი, მურაბა.",
      "ჩაისთან შეხამებული პატარა დესერტი.",
      "ინგლისური სტილის ჩაის სუფრა: სკონები, მურაბა და პატარა სენდვიჩები.",
      "საუზმე ტერასაზე, ჩაის პლანტაციის ხედით.",
    ],
    morningImage: "საუზმის სუფრა ტერასაზე",
    cookieImage: "მწვანე ჩაის ორცხობილები დილის სუფრისთვის",
    eveningsTitle: "მეგრული საღამო",
    eveningsDescription: "კარგი კერძები. ცეცხლი. მეგრული მუსიკა.",
    eveningsImage: "ხანდაზმული ქალი ტრადიციულ მეგრულ სამზარეულოში ცომს ზელს",
    eveningActivities: [
      "ღია ცეცხლის დასანთები სივრცე.",
      "მეგრული კერძების საღამო.",
      "ადგილობრივი ღვინო და ჩაი.",
      "მეგრული ჩონგურის მუსიკა — ცოცხლად ან საგანგებოდ შერჩეული მუსიკალური საღამო.",
      "ამბების მოყოლა რეგიონისა და ჩაის ისტორიაზე.",
      "სანთლები, განათება, ბუნებრივი გარემო.",
      "ვარსკვლავების ყურება და მშვიდი საღამო.",
    ],
    wellnessTitle: "ცოტა დრო საკუთარი თავისთვის.",
    wellnessDescription: "დაისვენე, განიტვირთე და აღმოაჩინე ჩაის ბუნებრივი მხარე.",
    wellnessImage: "სახის მოვლის რიტუალი მწვანე ჩაის ნიღბით",
    wellnessActivities: [
      "ჩაის ექსტრაქტზე დაფუძნებული სახის ნიღბები.",
      "მცენარეული აბაზანის ან ფეხის მოვლის რიტუალები.",
      "სახის მოვლის პატარა სესიები.",
      "დამამშვიდებელი ჩაი.",
      "ბუნებაში იოგა ან დილის გაჭიმვები.",
      "ჩაის მედიტაცია — ჩაის ნელა, შეგნებულად დაგემოვნება.",
    ],
    kitchenTitle: "ხელით მომზადებული. ერთად დასაგემოვნებელი.",
    kitchenDescription: "აღმოაჩინე მეგრული გემოები და ისწავლე ჩვენი საყვარელი ჩაის ორცხობილების მომზადება.",
    kitchenImage: "ჩაის ორცხობილების მომზადება",
    kitchenActivities: [
      "მეგრული კერძების მასტერკლასი.",
      "ჩაის ორცხობილების მომზადება.",
      "ჩაისთან შეხამებული დესერტების კურსი.",
      "ჩაის არომატით ორცხობილების შექმნა.",
      "სტუმრის მიერ დამზადებული ორცხობილების შეფუთვა და წაღება.",
    ],
    takeHomeTitle: "შენი ჩაი. შენი ისტორია.",
    takeHomeDescription: "შეარჩიე ჩაი, შექმენი საკუთარი შეფუთვა და სამეგრელოს პატარა ნაწილი სახლში წაიღე.",
    createTea: "შექმენი შენი ჩაი",
    packageImage: "ჩაის დეგუსტაციის სუფრა პლანტაციაში",
    regionOverline: "დამატებითი ტურები",
    regionTitle: "აღმოაჩინე სამეგრელო.",
    regionDescription: "რეზორტი შეიძლება გახდეს სტუმრის მთავარი ბაზა, საიდანაც ის სამეგრელოს აღმოაჩენს.",
    excursionsTitle: "შემოთავაზებული ექსკურსიები",
    excursions: [
      "დადიანების სასახლე",
      "ენგურის ჰიდროელექტროსადგური და კაშხალი",
      "მარტვილის კანიონი",
      "მდინარეებზე პიკნიკი",
      "სოფლის და ადგილობრივი კულტურის ტური.",
      "ჩაის პლანტაციების სხვა ისტორიული ადგილების მონახულება.",
      "ადგილობრივ მეწარმეებთან და ხელოსნებთან შეხვედრა.",
    ],
    exploreRegion: "აღმოაჩინე სამეგრელო",
    regionImage: "სტუმარი ჩაის პლანტაციაში სეირნობს",
    finalTitle: "მოდი ჩაისთვის. დარჩი მოგონებებისთვის.",
    finalDescription: "ჩვენ შენთვის ადგილი შევინახეთ.",
    planVisit: "Google Maps-ში მარშრუტის ნახვა",
    emailLabel: "ელფოსტა",
    emailPlaceholder: "თქვენი ელფოსტის მისამართი",
    visitRequest: "იკითხე ვიზიტის შესახებ",
    visitStatus: "ვიზიტის შესახებ წერილის გასაგზავნად თქვენი ელფოსტის პროგრამა გაიხსნება.",
    visitSubject: "ვიზიტი მარტას ჩაის მამულში",
    visitBody: "მინდა ვიზიტის დაგეგმვა. ჩემი ელფოსტის მისამართია:",
    footerBrand: "მარტას ჩაის მამული",
    footerLocation: "ნარაზენი, სამეგრელო, საქართველო.",
    footerLine: "ჩაი. ბუნება. სტუმართმოყვარეობა.",
    follow: "გამოგვყევი სოციალურ ქსელებში.",
    socials: ["Instagram", "Facebook"],
    backToTop: "თავში დაბრუნება ↑",
  },
} as const;

const photos = {
  hero: "/images/tea-highlands.jpg",
  story: "/images/tea-leaves.jpg",
  experience: "/images/tea-harvest.jpg",
  stay: "/images/tea-cottage.jpg",
  morning: "/images/morning-table.jpg",
  cookies: "/images/green-tea-cookies.jpg",
  evenings: "/images/grandmother-dough.jpg",
  wellness: "/images/tea-wellness.jpg",
  kitchen: "/images/tea-kitchen.jpg",
  package: "/images/tea-table.jpg",
  region: "/images/tea-garden-walk.jpg",
};

function MapPinIcon() {
  return (
    <svg
      className="location-pin-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MartaLogoMark() {
  return (
    <svg className="marta-logo-mark" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="21.5" fill="var(--plum)" stroke="var(--gold)" strokeWidth="1" />
      <path d="M12 31V18l12 10 12-10v13" fill="none" stroke="var(--cream)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 19v-8m0 5c-4-5-7-5-10-3 1 4 5 6 10 5m0-4c3-4 6-5 9-4-1 4-4 6-9 7" fill="none" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExperienceIcon({ name }: { name: ExperienceIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "harvest" && (
        <>
          <path d="M12 20V5" />
          <path d="M12 12c-4 0-6-2-7-6 4 0 7 2 7 6Z" />
          <path d="M12 16c4 0 6-2 7-6-4 0-7 2-7 6Z" />
        </>
      )}
      {name === "stay" && (
        <>
          <path d="m3 10 9-6 9 6" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </>
      )}
      {name === "process" && (
        <>
          <path d="M5 18c5 0 10-5 12-12-7 1-12 5-12 12Z" />
          <path d="m5 18 10-10" />
          <path d="M8 6c-1-1 1-2 0-3m5 3c-1-1 1-2 0-3" />
        </>
      )}
      {name === "tasting" && (
        <>
          <path d="M4 10h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z" />
          <path d="M17 11h2a2 2 0 0 1 0 4h-2M8 6c-1-1 1-2 0-3m4 3c-1-1 1-2 0-3" />
        </>
      )}
      {name === "cuisine" && (
        <>
          <circle cx="12" cy="13" r="6" />
          <path d="M4 4v5m-2-5v3a2 2 0 0 0 4 0V4m-2 5v11m14-16v16m0-16c2 2 2 5 0 7" />
        </>
      )}
      {name === "evening" && (
        <>
          <path d="M12 21a6 6 0 0 0 6-6c0-3-2-5-4-8 0 3-2 4-2 4-1-3-2-5-4-7 0 4-3 7-3 11a7 7 0 0 0 7 6Z" />
          <path d="M12 21a3 3 0 0 0 3-3c0-1-.5-2-1.5-3-1 2-2 2-2 3a3 3 0 0 0 .5 3Z" />
        </>
      )}
      {name === "wellness" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M9 10h.01M15 10h.01m-6 5c2 2 4 2 6 0" />
        </>
      )}
      {name === "biscuit" && (
        <>
          <path d="M20 13a8 8 0 1 1-9-9 5 5 0 0 0 9 9Z" />
          <circle cx="8" cy="12" r=".7" />
          <circle cx="12" cy="16" r=".7" />
          <circle cx="15" cy="10" r=".7" />
        </>
      )}
    </svg>
  );
}

function App() {
  const heroTrack = useRef<HTMLElement>(null);
  const [language, setLanguage] = useState<Language>("en");
  const [activeStory, setActiveStory] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visitSubmitted, setVisitSubmitted] = useState(false);
  const text = content[language];
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Narazeni%2C+Samegrelo%2C+Georgia";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Narazeni%2C%20Samegrelo%2C%20Georgia";
  const activeMilestone = text.timeline[activeTimelineIndex];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "en"
      ? "Marta’s Tea Resort — Narazeni, Georgia"
      : "MARTA’S TEA RESORT — ნარაზენი, საქართველო";
    document.querySelector('meta[name="description"]')?.setAttribute("content", text.metaDescription);
  }, [language, text.metaDescription]);

  useEffect(() => {
    const track = heroTrack.current;
    if (!track) return;

    let frame = 0;
    const updateHero = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = track.getBoundingClientRect();
        const scrollable = track.offsetHeight - window.innerHeight;
        const progress = Math.max(0, Math.min(1, -bounds.top / scrollable));
        const storyIndex = Math.min(text.heroStories.length - 1, Math.floor(progress * text.heroStories.length));
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const movement = reduceMotion ? 0 : progress;
        const storyOpacity = 1 - Math.max(0, Math.min(1, (progress - 0.8) / 0.04));

        track.style.setProperty("--progress", `${progress}`);
        track.style.setProperty("--scene-scale", `${1 + movement * 0.075}`);
        track.style.setProperty("--story-opacity", `${storyOpacity}`);
        track.style.setProperty("--final-opacity", `${Math.max(0, Math.min(1, (progress - 0.84) / 0.16))}`);
        setActiveStory(storyIndex);
      });
    };

    updateHero();
    window.addEventListener("scroll", updateHero, { passive: true });
    window.addEventListener("resize", updateHero);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHero);
      window.removeEventListener("resize", updateHero);
    };
  }, [text.heroStories.length]);

  const closeMenu = () => setMenuOpen(false);
  const submitVisitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const subject = encodeURIComponent(text.visitSubject);
    const body = encodeURIComponent(`${text.visitBody} ${email}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setVisitSubmitted(true);
  };

  return (
    <div className={`site-shell lang-${language}`}>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={text.homeLabel} onClick={closeMenu}>
          <MartaLogoMark />
          <span className="wordmark-name">{text.footerBrand}</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? text.close : text.menu}</span>
          <span className={`menu-lines${menuOpen ? " is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label={text.navigation}>
          <a href="#story" onClick={closeMenu}>{text.nav[0]}</a>
          <a href="#experience" onClick={closeMenu}>{text.nav[1]}</a>
          <a href="#journeys" onClick={closeMenu}>{text.nav[2]}</a>
          <a href="#stay" onClick={closeMenu}>{text.nav[3]}</a>
          <a className="nav-visit" href="#visit" onClick={closeMenu}>{text.nav[4]} <span aria-hidden="true">↗</span></a>
          <div className="language-switch" role="group" aria-label={text.language}>
            <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
            <span aria-hidden="true">|</span>
            <button type="button" aria-pressed={language === "ka"} onClick={() => setLanguage("ka")}>GE</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-track" id="home" ref={heroTrack} aria-label={text.heroTitle}>
          <div className="hero-stage">
            <div className="hero-landscape" style={{ backgroundImage: `url("${photos.hero}")` }} aria-hidden="true" />
            <div className="hero-shade" aria-hidden="true" />
            <a className="hero-coordinate location-link" href={directionsUrl} target="_blank" rel="noreferrer">
              <MapPinIcon />
              {text.location}
            </a>
            <div className="hero-copy" aria-live="polite">
              {text.heroStories.map((line, index) => {
                const isActive = activeStory === index;
                const isFinalStory = index === text.heroStories.length - 1;
                const classes = `story-line${isFinalStory ? " is-final-story" : ""}${isActive ? " is-active is-typing" : ""}`;
                return (
                  <p className={classes} key={line}>
                    {line.split("\n").map((part) => <span key={part}>{part}</span>)}
                  </p>
                );
              })}
            </div>
            <div className="hero-progress" aria-hidden="true">
              <span className="progress-rule"><i /></span>
              <span>{text.scroll}</span>
            </div>
            <div className="hero-ending">
              <p className="eyebrow">{text.location}</p>
              <h1>{text.heroTitle}</h1>
              <p>{text.heroTagline}</p>
              <div className="hero-actions">
                <a className="text-link light-link" href="#story">{text.discover} <span aria-hidden="true">↘</span></a>
                <a className="text-link light-link" href="#visit">{text.planStay} <span aria-hidden="true">↘</span></a>
              </div>
            </div>
            <p className="hero-index">01 <span>—</span> 05</p>
          </div>
        </section>

        <div className="slogan-strip" role="group" aria-label={text.slogansLabel}>
          {text.slogans.map((slogan) => <p key={slogan}><em>{slogan}</em></p>)}
        </div>

        <section className="story-section section-pad" id="story">
          <p className="section-index">01 /</p>
          <div className="story-composition">
            <div className="story-photo">
              <img src={photos.story} alt={text.storyImage} loading="lazy" />
            </div>
            <div className="story-copy">
              <p className="eyebrow">MARTA’S TEA RESORT</p>
              <h2>{text.storyTitle}</h2>
              <p>{text.storyDescription}</p>
            </div>
          </div>
          <nav className="experience-directory" aria-label={text.experienceDirectoryTitle}>
            <p className="experience-directory-title">{text.experienceDirectoryTitle}</p>
            <div className="experience-directory-links">
              {text.experienceDirectory.map((item) => (
                <a className="experience-directory-link" href={item.href} key={item.label}>
                  <span className="experience-directory-icon"><ExperienceIcon name={item.icon} /></span>
                  <span className="experience-directory-label">{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </section>

        <section className="timeline-section section-pad" id="timeline">
          <div className="timeline-heading">
            <p className="section-index">02 /</p>
            <h2>{text.timelineTitle}</h2>
          </div>
          <div className="timeline-years" role="group" aria-label={text.timelineSelectYear}>
            {text.timeline.map(([year], index) => (
              <button
                className="timeline-year-button"
                type="button"
                aria-pressed={activeTimelineIndex === index}
                aria-controls="timeline-detail"
                key={year}
                onClick={() => setActiveTimelineIndex(index)}
              >
                {year}
              </button>
            ))}
          </div>
          {activeMilestone && (
            <div className="timeline-detail" id="timeline-detail" aria-live="polite" aria-atomic="true">
              <span className="timeline-detail-year">{activeMilestone[0]}</span>
              <p key={activeMilestone[0]}>{activeMilestone[1]}</p>
            </div>
          )}
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="experience-copy">
            <p className="section-index">03 /</p>
            <h2>{text.experienceTitle}</h2>
            <p className="experience-line">{text.experienceLine}</p>
            <p>{text.experienceDescription}</p>
            <a className="text-link" href="#visit">{text.exploreExperience} <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="experience-photo">
            <img src={photos.experience} alt={text.experienceImage} loading="lazy" />
          </figure>
        </section>

        <section className="tea-journey-section section-pad" id="tea-journey">
          <div className="tea-journey-heading">
            <p className="section-index">{text.teaJourneyIndex}</p>
            <h2>{text.teaJourneyTitle}</h2>
          </div>
          <ol className="tea-journey-steps">
            {text.teaJourneySteps.map(([title, description], index) => (
              <li key={title}>
                <span className="tea-step-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="journeys-section section-pad" id="journeys">
          <p className="section-index">{text.journeysIndex}</p>
          <div className="journey-list">
            {text.journeys.map((journey, index) => (
              <article className={`journey-row journey-${index + 1}`} key={journey.title}>
                <div className="journey-heading">
                  <h2>{journey.title}</h2>
                  <p>{journey.duration}</p>
                </div>
                <ul>
                  {journey.activities.map((activity) => <li key={activity}>{activity}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="stay-section" id="stay">
          <div className="stay-photo"><img src={photos.stay} alt={text.stayImage} loading="lazy" /></div>
          <div className="stay-copy">
            <p className="section-index">06 /</p>
            <h2>{text.stayTitle}</h2>
            <p>{text.stayDescription}</p>
            <a className="text-link" href="#visit">{text.guesthouses} <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="morning-section section-pad" id="morning-tea">
          <div className="morning-image">
            <img className="morning-table-photo" src={photos.morning} alt={text.morningImage} loading="lazy" />
            <img className="morning-cookie-photo" src={photos.cookies} alt={text.cookieImage} loading="lazy" />
          </div>
          <div className="morning-copy">
            <p className="section-index">07 /</p>
            <h2>{text.morningTitle}</h2>
            <ul className="activity-list">
              {text.morningTable.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="evenings-section" id="evenings">
          <div className="evenings-image"><img src={photos.evenings} alt={text.eveningsImage} loading="lazy" /></div>
          <div className="evenings-copy">
            <p className="section-index">08 /</p>
            <h2>{text.eveningsTitle}</h2>
            <p>{text.eveningsDescription}</p>
            <ul className="activity-list">
              {text.eveningActivities.map((activity) => <li key={activity}>{activity}</li>)}
            </ul>
          </div>
        </section>

        <section className="wellness-section" id="wellness">
          <div className="wellness-copy">
            <p className="section-index">09 /</p>
            <h2>{text.wellnessTitle}</h2>
            <p>{text.wellnessDescription}</p>
            <ul className="activity-list">
              {text.wellnessActivities.map((activity) => <li key={activity}>{activity}</li>)}
            </ul>
          </div>
          <div className="wellness-image"><img src={photos.wellness} alt={text.wellnessImage} loading="lazy" /></div>
        </section>

        <section className="kitchen-section" id="kitchen">
          <div className="kitchen-image"><img src={photos.kitchen} alt={text.kitchenImage} loading="lazy" /></div>
          <div className="kitchen-copy">
            <p className="section-index">10 /</p>
            <h2>{text.kitchenTitle}</h2>
            <p>{text.kitchenDescription}</p>
            <ul className="activity-list">
              {text.kitchenActivities.map((activity) => <li key={activity}>{activity}</li>)}
            </ul>
          </div>
        </section>

        <section className="take-home-section">
          <div className="take-home-copy">
            <p className="section-index">11 /</p>
            <h2>{text.takeHomeTitle}</h2>
            <p>{text.takeHomeDescription}</p>
            <a className="text-link" href="#visit">{text.createTea} <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="take-home-image">
            <img src={photos.package} alt={text.packageImage} loading="lazy" />
          </figure>
        </section>

        <section className="region-section">
          <div className="region-image"><img src={photos.region} alt={text.regionImage} loading="lazy" /></div>
          <div className="region-copy">
            <p className="section-index">12 /</p>
            <p className="eyebrow">{text.regionOverline}</p>
            <h2>{text.regionTitle}</h2>
            <p>{text.regionDescription}</p>
            <h3>{text.excursionsTitle}</h3>
            <ul className="activity-list">
              {text.excursions.map((excursion) => <li key={excursion}>{excursion}</li>)}
            </ul>
            <a className="text-link" href={mapUrl} target="_blank" rel="noreferrer">{text.exploreRegion} <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <p className="section-index">13 /</p>
          <h2>{text.finalTitle}</h2>
          <p>{text.finalDescription}</p>
          <a className="visit-link" href={directionsUrl} target="_blank" rel="noreferrer">
            <MapPinIcon />
            {text.planVisit}
            <span aria-hidden="true">↗</span>
          </a>
          <form className="visit-form" onSubmit={submitVisitRequest}>
            <label htmlFor="visit-email">{text.emailLabel}</label>
            <div className="visit-form-line">
              <input id="visit-email" name="email" type="email" autoComplete="email" placeholder={text.emailPlaceholder} required />
              <button type="submit">{text.visitRequest} <span aria-hidden="true">↗</span></button>
            </div>
            <p className="visit-form-status" aria-live="polite">{visitSubmitted ? text.visitStatus : ""}</p>
          </form>
          <a className="visit-coordinate location-link" href={directionsUrl} target="_blank" rel="noreferrer">
            <MapPinIcon />
            {text.location}
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-mark" href="#home" aria-label={text.homeLabel}><MartaLogoMark /></a>
        <div className="footer-copy">
          <strong>{text.footerBrand}</strong>
          <a className="footer-location location-link" href={directionsUrl} target="_blank" rel="noreferrer">
            <MapPinIcon />
            {text.footerLocation}
          </a>
          <span>{text.footerLine}</span>
        </div>
        <div className="footer-socials">
          <span>{text.follow}</span>
          <div className="social-button-row">
            <a className="social-button" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              {text.socials[0]} <span aria-hidden="true">↗</span>
            </a>
            <a className="social-button" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              {text.socials[1]} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <a className="footer-back" href="#home">{text.backToTop}</a>
      </footer>
      <a className="sticky-booking" href="#visit">
        {text.bookNow}
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

export default App;
