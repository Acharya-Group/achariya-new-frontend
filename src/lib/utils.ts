import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin, FiTruck,
  FiPackage,
  FiCpu,

 } from "react-icons/fi";
import { FaCar,FaBus ,FaTags, FaShoppingCart, FaLock, FaTruck, FaUsers, FaStore  } from "react-icons/fa";



// nav dropdowns
export const navdropdowns = [
  {
    title: "About Us",
    links: [
      { name: "About Us", href: "/about", type: "link" },
      { name: "Director's Message", href: "/directors-message", type: "link" },
    ],
  },
  {
    title: "Projects",
    links: [
      { name: "Rajpay", href: "/rajpay", type: "link" },
      { name: "Shopneo", href: "/shopneo", type: "link" },
      { name: "e-Mitra", href: "/e-mitra", type: "link" },
      { name: "Kiosk Banking/BankBc", href: "/kiosk-banking", type: "link" },
      { name: "Achariya Drones", href: "/achariya-drones", type: "link" },
      { name: "RKCL", href: "/rkcl", type: "link" },
      { name: "School Easy", href: "/school-easy", type: "link" },
      { name: "Yoga certification", href: "/yoga-certification", type: "link" },
    ],
  },
  {
    title: "Downloads",
    links: [
      { name: "Cogent Driver", href: "/files/cogent.zip", type: "download" },
      { name: "Mantra Iris Driver", href: "/files/MMantra_Iris.zip", type: "download" },
      { name: "Mantra MFS100 Driver", href: "/files/Mantra_MFS100.zip", type: "download" },
      { name: "Mantra MFS110 Driver", href: "/files/Mantra_MFS110.zip", type: "download" },
      { name: "Morpho Driver", href: "/files/morpho.zip", type: "download" },
      { name: "Starteck Driver", href: "/files/starteck.zip", type: "download" },
      { name: "Kiosks Identity Card", href: "/Kiosk-id-card", type: "link" },
      { name: "E-Mitra Services Forms", href: "/downloads/e-mitra-services", type: "link" },
      { name: "Application Form For New e-Mitra Kiosk", href: "/files/Application Form For New e-Mitra Kiosk.pdf", type: "download" },
      { name: "RMGB Installation Process", href: "/files/rmgb_installation.docs", type: "download" },
      { name: "Windows RD Service V2.0.1", href: "/files/Windows_RDService_V2.0.1.42_HTTPs_127.0.0.1.zip", type: "download" },
      { name: "BOB Morpho MSO 1300 Esetup", href: "/files/BOB_MorphoMSO1300Esetup 2.2.1.8_06July2017.zip", type: "download" },
    ],
  },
];

// gallery items
export interface GalleryItem {
  id: number;
  image: string;
  category: number;
  videoLink?: string;
}


// shopneo feature

export const shopneoFeatures = [
  {
    icon: FaTags,
    title: "Wide Selection",
    description: "Thousands of products across multiple categories to choose from.",
  },
  {
    icon: FaShoppingCart,
    title: "Exclusive Deals",
    description: "Regular discounts, festive sales, and special offers for buyers.",
  },
  {
    icon: FaLock,
    title: "Secure Payments",
    description: "Safe transactions with multiple payment options and encryption.",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description: "Reliable shipping services for quick doorstep delivery.",
  },
  {
    icon: FaUsers,
    title: "User-Friendly Interface",
    description: "Seamless browsing, personalized recommendations, and easy checkout.",
  },
  {
    icon: FaStore,
    title: "Seller Support",
    description: "Tools for managing inventory, tracking sales, and marketing products.",
  },
];





export const projectManagersContact = [
  {
    id: 1,
    mobile: "8901903333",
    name: "Helpline Number",
    project: "ALL",
    designation: "",
    location: "",
  },
  {
    id: 2,
    mobile: "9587887701",
    name: "M L Jhalani",
    project: "ALL",
    designation: "General Manager",
    location: "Jaipur",
  },
  {
    id: 3,
    mobile: "9587887702",
    name: "Rajkumar",
    project: "ALL",
    designation: "Manager",
    location: "Jaipur",
  },
  {
    id: 4,
    mobile: "9587887705",
    name: "Sachin Choudhary",
    project: "ALL",
    designation: "Operational Manager",
    location: "Jaipur",
  },
  {
    id: 5,
    mobile: "9587887834",
    name: "Mayank Gill",
    project: "ALL",
    designation: "Asst. Ops Manager",
    location: "Jaipur",
  },
  {
    id: 6,
    mobile: "7230003306",
    name: "Ateendra Kumar",
    project: "BOB",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 7,
    mobile: "9587887706",
    name: "Neetu Jaluthariya",
    project: "BOB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 8,
    mobile: "9587887773",
    name: "Muskan Sain",
    project: "BOB",
    designation: "Tech support",
    location: "Jaipur",
  },
  // {
  //   id: 9,
  //   mobile: "9587895958",
  //   name: "Madhusudan",
  //   project: "BOB",
  //   designation: "Tech support",
  //   location: "Jaipur",
  // },
  {
    id: 10,
    mobile: "9587887156",
    name: "Neha Jangid",
    project: "BOB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 11,
    mobile: "9257028323",
    name: "Sumer",
    project: "BOI CBI",
    designation: "LEAD GENERATION",
    location: "Jaipur",
  },
  {
    id: 12,
    mobile: "9587887781",
    name: "Vaibhavi Rathod",
    project: "BOI CBI",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 13,
    mobile: "9587887755",
    name: "Ram Lal Yadav",
    project: "BRKGB",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 14,
    mobile: "9587887771",
    name: "Priyanka Kirodiya",
    project: "BRKGB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 15,
    mobile: "9587887860",
    name: "Sanjay Paswan",
    project: "BRKGB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 16,
    mobile: "9587887153",
    name: "Ankita Gupta",
    project: "BRKGB",
    designation: "Tech support",
    location: "Jaipur",
  },
  // {
  //   id: 17,
  //   mobile: "9587887724",
  //   name: "Rahul",
  //   project: "DC",
  //   designation: "District Coordinator",
  //   location: "Jaipur",
  // },
  {
    id: 18,
    mobile: "9587887658",
    name: "Rohit Yadav(Degs)",
    project: "E-Mitra",
    designation: "Project Coordinator",
    location: "Jaipur",
  },
  {
    id: 19,
    mobile: "9587887704",
    name: "Parmila",
    project: "E-Mitra",
    designation: "State Coordinator",
    location: "Jaipur",
  },
  // {
  //   id: 20,
  //   mobile: "9587887876",
  //   name: "Dev Fouzdar",
  //   project: "E-Mitra",
  //   designation: "Tech support",
  //   location: "Jaipur",
  // },
  {
    id: 21,
    mobile: "9587667777",
    name: "Komal",
    project: "RAJPAY",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 22,
    mobile: "9587887748",
    name: "Shreyansha",
    project: "BOB",
    designation: "Tech support",
    location: "Jaipur",
  },
  {
    id: 23,
    mobile: "7230003324",
    name: "Sanjay Kumar",
    project: "RKCL",
    designation: "Project Manager",
    location: "Jaipur",
  },
  {
    id: 24,
    mobile: "9587887775",
    name: "Karan Parihar",
    project: "RGB",
    designation: "Tech support",
    location: "Jaipur",
  },
  // {
  //   id: 25,
  //   mobile: "9587887651",
  //   name: "Meenakshi Ray",
  //   project: "RMGB",
  //   designation: "Project Manager",
  //   location: "Jaipur",
  // },
  {
    id: 26,
    mobile: "9587887652",
    name: "Madhumita",
    project: "RMGB",
    designation: "Project Coordinator",
    location: "Jaipur",
  },
  {
    id: 27,
    mobile: "9587887703",
    name: "Hanuman Jogi",
    project: "STATIONERY",
    designation: "Store Incharge",
    location: "Jaipur",
  },
  {
    id: 28,
    mobile: "7230003311",
    name: "Himanshu",
    project: "E-Mitra",
    designation: "Tech support",
    location: "Hisar",
  },
  {
    id: 29,
    mobile: "9587887707",
    name: "Vikas",
    project: "E-Mitra",
    designation: "Tech support",
    location: "Hisar",
  },
  {
    id: 30,
    mobile: "9587887747",
    name: "Sapna",
    project: "E-Mitra",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 31,
    mobile: "7027100404",
    name: "Aryan",
    project: "E-Mitra",
    designation: "Files Uploading",
    location: "Hisar",
  },
  {
    id: 32,
    mobile: "8930300601",
    name: "Charu Mukhija",
    project: "Shop Neo",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 33,
    mobile: "8930300602",
    name: "Bharti",
    project: "Shop Neo",
    designation: "Project Manager",
    location: "Hisar",
  },
  {
    id: 34,
    mobile: "8930300603",
    name: "Harsh",
    project: "Shop Neo",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 35,
    mobile: "8930300605",
    name: "Poonam",
    project: "E-Mitra",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 36,
    mobile: "8930300612",
    name: "Arzoo",
    project: "Bank BC",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 37,
    mobile: "8930300615",
    name: "Ritika",
    project: "YOGA",
    designation: "Project Manager",
    location: "Hisar",
  },
  {
    id: 38,
    mobile: "9034040242",
    name: "Charu",
    project: "E-Mitra",
    designation: "Tech Support",
    location: "Hisar",
  },
  {
    id: 39,
    mobile: "9034040244",
    name: "Prerna",
    project: "E-Mitra",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 40,
    mobile: "9034040246",
    name: "Bindiya",
    project: "E-Mitra",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 41,
    mobile: "9034040247",
    name: "Virender Bhyan",
    project: "Accounts",
    designation: "Accounts Officer",
    location: "Hisar",
  },
  {
    id: 42,
    mobile: "9034040382",
    name: "Ekta",
    project: "Bank BC",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 43,
    mobile: "9034040243",
    name: "Ritika",
    project: "E-Mitra",
    designation: "Project Manager",
    location: "Hisar",
  },
  {
    id: 44,
    mobile: "9034559944",
    name: "Reena",
    project: "Shop Neo",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 45,
    mobile: "7230003337",
    name: "Muskan Sain",
    project: "Bank BC",
    designation: "Office Executive",
    location: "Hisar",
  },
  {
    id: 46,
    mobile: "8930300623",
    name: "Sumit Chouhan",
    project: "Software",
    designation: "Developer",
    location: "Hisar",
  },
];


export const districtCoordinators = [
  {
    id: 1,
    district: "Ajmer",
    name: "Mr. Vishal Dev Gaur",
    phNo: "9587887708",
    emailId: "Ajmer@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Police Line, Naya Bara, Opp. Basant Vihar Colony, Ajmer- 305001 (Raj.)"
  },
  {
    id: 2,
    district: "Alwar",
    name: "Mr. Manoj Saini",
    phNo: "9587887709",
    emailId: "Alwar@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Ward No  28 ,Near Jai Ambe Marriage Garden, Jyoti Rav Fule Circle , Bus Stand Road, Alwar- 301001 (Raj.)"
  },
  {
    id: 3,
    district: "Banswara",
    name: "Mr. Vikesh Jain",
    phNo: "9587887710",
    emailId: "Banswara@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. ,Near Bharat Gas Office, College Road ,Banswara -327001  (Raj.)"
  },
  {
    id: 4,
    district: "Baran",
    name: "Mr. Rajesh Suman",
    phNo: "9587887711",
    emailId: "Baran@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Shop No.- 7, Namdev Bhawan, Charighat Road Near Amber Circle ,Baran - 325205 (Raj.)"
  },
  {
    id: 5,
    district: "Barmer",
    name: "Mr. Moulabaksh Khan",
    phNo: "9587887712",
    emailId: "Barmer@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Opp. PG Collage , Malinath ShiKshan Sansthan, Shop N. -1 Sindhary Choraya ,Barmer - 344001 (Raj.)"
  },
  {
    id: 6,
    district: "Bharatpur",
    name: "Mr. Vikram Singh",
    phNo: "9587887713",
    emailId: "Bharatpur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. ,C-Block Ward No.-15, Near Kalsi Hospital , Indra Nagar, Bharatpur -321001 (Raj)"
  },
  {
    id: 7,
    district: "Bhilwara",
    name: "Mr. Jagdish Ladha",
    phNo: "9587887714",
    emailId: "Bhilwara@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., 3-M-7, Bapunagar ,Bhilwara -311001 (Raj.)"
  },
  {
    id: 8,
    district: "Bikaner",
    name: "Mr. Sajjan Singh",
    phNo: "9587887715",
    emailId: "Bikaner@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Government  Press Road ,Court Parishar ,Bikaner -334001 (Raj.)"
  },
  {
    id: 9,
    district: "Bundi",
    name: "Mr. Manish Kumar",
    phNo: "9587887716",
    emailId: "Bundi@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Nainwa Road, Matunda Choraha, Bundi - 323001 (Raj.)"
  },
  {
    id: 10,
    district: "Chittorgarh",
    name: "Mr. Nana Goswami",
    phNo: "9587887717",
    emailId: "Chittorgarh@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., C-29 Meera Market , Near HDFC Bank ,Chittoragarh -312001 (Raj. )"
  },
  {
   id: 11,  
    district: "Churu",
    name: "Mr. Sourabh",
    phNo: "9587887718",
    emailId: "Churu@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., 1st Floor, Priya Printing Press, Near Eye Hospital, Sainik Basti, Churu -331001 (Raj.)"
  },
  {
     id: 12,
    district: "Dausa",
    name: "Mr. Dinesh Gurjar",
    phNo: "9587887719",
    emailId: "Dausa@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Baswa Road , Near Rajesh Pilot College, Bandikui. Dausa - 303313 ( Raj.)"
  },
  {
     id: 13,
    district: "Dholpur",
    name: "Mr. Gourav",
    phNo: "9587887720",
    emailId: "Dholpur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Avanti Bai Colony ,Ward No.- 46, Below RajaKhera By Pass Road , Distt.- Dholpur  - 328001 (Raj.)"
  },
  {
     id: 14,
    district: "Dungarpur",
    name: "Mr. Vinod Parmar",
    phNo: "9587887721",
    emailId: "Dungarpur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Shop No.-7,New Sabji Mandi , Dungarpur - 314001 (Raj.)"
  },
  {
     id: 15,
    district: "Hanumangarh",
    name: "Mr. Vikas Kumar",
    phNo: "9587887723",
    emailId: "Hanumangarh@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Ward No. 50, Near Chuna Fatak, Behind Kamra Tent House, Hanumangarh Jn.- 335512 (Raj.)"
  },
  {
     id: 16,
    district: "Jaipur",
    name: "Mr. Rahul Kumar",
    phNo: "9587887724",
    emailId: "Jaipur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. , #107, Shiv Vihar AB, Near Maharani Bagh Palace, Lalarpura, Gandhi Path (West), Vaishali Nagar, Jaipur - 302021 (Raj.)"
  },
  {
     id: 17,
    district: "Jaisalmer",
    name: "Mr. Nepal Singh",
    phNo: "9587887725",
    emailId: "Jaisalmer@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Dr. Kanhaiya Lal Achalvanshi Colony, Dedansar Road, Jaisalmer-345001 (Raj.)"
  },
  {
     id: 18,
    district: "Jalore",
    name: "Mr. Sudarshan Singh",
    phNo: "9587887726",
    emailId: "Jalore@achariyagroupcom",
    address: "Achariya Technologies Pvt. Ltd. , Kalka Colony , Bhinmal Bypass Road , Jalore - 343001 (Raj.)"
  },
  {
     id: 19,
    district: "Jhalawar",
    name: "Mr. Durgesh Kumar",
    phNo: "9587887727",
    emailId: "Jhalawar@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., B-36, Shop No.-3 Near Khel Sankul Javahar Colony - Jhalawar - 326001 (Raj.)"
  },
  {
     id: 20,
    district: "Jhunjhunu",
    name: "Mr. Praveen Kumar",
    phNo: "9587887728",
    emailId: "Jhunjhunu@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,House No.-1/250 Near By Housing Board Office ,Churu Road ,Jhunjhunu - 333001 (Raj.)"
  },
  {
     id: 21,
    district: "Jodhpur",
    name: "Mr. Kamlesh",
    phNo: "9587887729",
    emailId: "Jodhpur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. , Ujawal Niwas, Paota B Road Opp. Labour Office , Poata, Jodhpur – 342001 (Raj.)"
  },
  {
     id: 22,
    district: "Karauli",
    name: "Mr. Rajesh Saini",
    phNo: "9587887730",
    emailId: "Karauli@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. , Radha Rani Market , In Front Of ParshuRam Vatika Hindaun City ,Karauli - 322230 ( Raj.)"
  },
  {
     id: 23,
    district: "Kota",
    name: "Mr. Jitendra Kumar Nagar",
    phNo: "9587887731",
    emailId: "Kota@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., HN-743 , A.R.K Puram ,Near Ahinsa Circle ,Kota - 324010 (Raj.)"
  },
  {
     id: 24,
    district: "Nagaur",
    name: "Mr. Ram Prakash",
    phNo: "9587887732  9587887792",
    emailId: "Nagaur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Shop-9 ,Hari Om Market , Didwana Road , Nagaur - 341001 (Raj.)"
  },
  {
     id: 25,
    district: "Pali",
    name: "Mr. Rakesh Kumar",
    phNo: "9587887733",
    emailId: "Pali@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. ,Vinayak Complax, Opp RMGB Bank, Pratap Bazar Rani, Pali - 306115 (Raj.)"
  },
  {
     id: 26,
    district: "Pratapgarh",
    name: "Mr. Hitesh Rathor",
    phNo: "9587887734",
    emailId: "Pratapgarh@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. ,Lohar Gali ,In Front Of Govt. School ,Pratapgarh - 313605 (Raj.)"
  },
  {
     id: 27,
    district: "Rajasamand",
    name: "Mr.Naresh Kumar",
    phNo: "9587887735",
    emailId: "Rajasamand@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Opposite Primary School ,Bus Stand ,Pasoond ,Rajasamand -313324 (Raj.)"
  },
  {
     id: 28,
    district: "Sawai Madhopur",
    name: "Mr. Ramsahay Saini",
    phNo: "9587887736",
    emailId: "Swaimadhopur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd. , Shop No.- 4 ,1st Floor _Shiv Mandir Main Gate Building , Bazriya ,Sawai Madhopur - 322001 (Raj.)"
  },
  {
     id: 29,
    district: "Sikar",
    name: "Mr. Ashok Kumar Dhaka",
    phNo: "9587887737",
    emailId: "Sikar@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Shop No.-111,First Floor Ganga Gaurav Tower,Rani Sati Road,Near New Nagar Parishad,Sikar -332001 (Raj.)"
  },
  {
     id: 30,
    district: "Sirohi",
    name: "Mr. Ujjawal Tiwari",
    phNo: "9587887738",
    emailId: "Sirohi@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., Rupava Bus Stand,Main Road, Kailashnagar, Sirohi - 307801 (Raj.)"
  },
  {
     id: 31,
    district: "Sri Ganganagar",
    name: "Mr. Man Singh",
    phNo: "9587887722",
    emailId: "sriganganagar@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., City Hospital C Block  near Meera Chowk ,Sri Ganganagar -335001 (Raj.)"
  },
  {
     id: 32,
    district: "Tonk",
    name: "Mr. Ram Avtar Saini",
    phNo: "9587887739",
    emailId: "Tonk@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd.,Malipura House ,Near Rajiv Gandhi Law College , Modi Ki Chowki ,Tonk -304001 (Raj.)"
  },
  {
     id: 33,
    district: "Udaipur",
    name: "Mr. Hemant Acharya",
    phNo: "9587887740",
    emailId: "Udaipur@achariyagroup.com",
    address: "Achariya Technologies Pvt. Ltd., 98- B, Dore Nagar ,Sector-3 ,Hiran Magri ,Sevaasharam Chouraha,Udaipur -313001 (Raj.)"
  }
];

//   our collaborations logos
export const ourCollaborations = [
  "/images/collbration-slide-1.jpg",
  "/images/collbration-slide-2.jpg",
  "/images/collbration-slide-3.jpg",
  "/images/collbration-slide-4.jpg",
  "/images/collbration-slide-5.jpg",
  "/images/collbration-slide-6.jpg",
  "/images/collbration-slide-7.jpg",
  "/images/collbration-slide-1.jpg",
  "/images/collbration-slide-2.jpg",
  "/images/collbration-slide-3.jpg",
  "/images/collbration-slide-4.jpg",
 
];
// projects
export const projects = [
  {
    id: 1,
    title: "Shopneo",
    desc: "A modern e-commerce platform designed to provide seamless shopping experiences for customers with intuitive design and robust functionality.",
    img: "/images/shopneo.png",
    link: "/shopneo",
  },
  {
    id: 2,
    title: "e-Mitra",
    desc: "An advanced digital service portal enabling easy access to government services and information for citizens.",
    img: "/images/e-Mitra.jpg",
    link: "/e-mitra",
  },
  {
    id: 3,
    title: "Kiosk Banking/BankBc",
    desc: "A futuristic banking solution with kiosk services for convenient access to financial services in remote areas.",
    img: "/images/kisok-bank.jpg",
    link: "/kiosk-banking",
  },
  {
    id: 4,
    title: "ATPL Drones",
    desc: "Achariya Technologies is a Hisar-based drone startup and training hub led by ex-military experts.",
    img: "/images/achariya-drones.jpg",
    link: "/achariya-drones",
  },
  {
    id: 5,
    title: "RKCL",
    desc: "Smart learning and training solutions with interactive features for students and professionals.",
    img: "/images/RKCL.jpg",
    link: "/rkcl",
  },
  {
    id: 6,
    title: "School Easy",
    desc: "School management system that streamlines administration, student tracking, and communication.",
    img: "/images/School-Easy.jpg",
    link: "/school-easy",
  },
  {
    id: 7,
    title: "Mspl Yoga Certification",
    desc: "MSPL is a certified body dedicated to promoting authentic yoga education and global certification standards under the Ministry of AYUSH’s guidelines",
    img: "/images/mspl-project.webp",
    link: "/yoga-certification",
  },
{
  id: 8,
  title: "Rajpay",
  desc: "Rajpay is a secure and reliable digital payment platform by MSPL, designed to simplify financial transactions with speed, transparency, and trust. Empowering users with seamless payment solutions that align with modern financial standards.",
  img: "/images/rajpay.jpg",
  link: "/rajpay",
},

];


export const faqs = [
  {
    question: "What services does Achariya Technologies Private Limited provide?",
    answer:
      "We provide a wide range of services including Shopneo e-commerce, e-Mitra services, kiosk banking/Bank BC, RKCL training, School Easy software, Atpl Drone ,Yoga Drone Certification, and technical support for biometric devices and banking kiosks.",
  },
  {
    question: "How can I register for Shopneo through Achariya?",
    answer:
      "You can register for Shopneo easily by visiting our official website at https://shopneo.org and completing the online process. Alternatively, you can also visit our office or contact our support team, and we will guide you step-by-step with the documentation and onboarding process. Once registered, you can not only sell your products as a seller but also buy products from other businesses. Shopneo is powered by the ONDC government portal, making digital commerce more accessible and trustworthy.",
  },
  {
    question: "What is e-Mitra and how can I get started?",
    answer:
      "e-Mitra is a government initiative that allows citizens to access various services digitally. Through Achariya, you can apply for a new e-Mitra kiosk, get identity cards, access forms, and complete the installation process with proper guidance.",
  },
{
  question: "How do I apply for e-Mitra?",
  answer: "To apply for e-Mitra, visit achariyagroup.in, fill out the e-Mitra kiosk form, and email it with the required documents to info@achariyagroup.com. They will process your application and guide you. For further information, contact us at +91 89019 03333."
},
  {
    question: "Do you provide support for Kiosk Banking and Bank BC?",
    answer:
      "Yes, we help with the setup and management of kiosk banking and Bank BC services, including installation, RD service setup, and biometric device drivers.",
  },
  {
  question: "How do I apply for a BC Point?",
  answer: "To apply for a BC Point through Achariya Technologies, get approval from your local bank, then send your documents (Aadhaar, PAN, 10th marksheet, Police verification, etc.) to bankbc.org@gmail.com. Our team will handle registration and guide you through the setup process. For further information, contact us at +91 93404 02433."
},
  {
    question: "Can you help with biometric device installation and drivers?",
    answer:
      "Yes, we provide drivers and setup assistance for devices like Cogent, Mantra (MFS100, MFS110, Iris), Morpho, and Startek, along with complete installation support.",
  },
  {
    question: "Do you offer training under RKCL?",
    answer:
      "Yes, we are associated with RKCL to provide certified training programs that help students and professionals enhance their digital skills.",
  },
  {
    question: "What is School Easy and how does it help schools?",
    answer:
      "School Easy is our school management solution that helps schools manage student data, fees, communication, and administration digitally, making operations more efficient.",
  },
 {
  question: "How do I apply for Yoga Certification?",
  answer:
    "You can apply for Yoga Certification through Achariya by registering online on our official website(www.msplyoga.com). Fill out the application form, submit the required documents, and our team will guide you through the assessment and certification process.",
},

  {
    question: "How long does it take to activate services like e-Mitra or Shopneo?",
    answer:
      "Activation timelines vary depending on the service. Typically, Shopneo registration takes 2-3 working days, while e-Mitra setup may take longer depending on documentation and verification.",
  },
  {
    question: "Where can I get help if I face issues with installation or registration?",
    answer:
      "You can contact our dedicated support team. We provide complete technical assistance for driver installation, RD service setup, and registration issues.",
  },
];


// footer array
export const socialLinks = [
  { href: "https://www.facebook.com/myAchariya", icon: FiFacebook },
  { href: "https://x.com/Achariyagroup", icon: FiTwitter },
  { href: "https://www.linkedin.com/in/Achariyagroup", icon: FiLinkedin },
  { href: "https://www.youtube.com/channel/UCS-2gyn-Fon-QUyO61HPtCA", icon: FiYoutube },
  { href: "https://www.instagram.com/Achariyagroup", icon: FiInstagram },
];


export const pages = [
  { title: "Home", url: "/" }, 
  { url: "/about", title: "About Us" }, 
  { url: "/directors-message", title: "Directors message" },
   { url: "/contact", title: "Contact Us" }, 
   { url: "/gallery", title: "Gallery" },
   { url: "/fastag", title: "Fastag" }, 
   { url: "/blog", title: "Blogs" }, 
   { url: "/aadhar", title: "Aadhaar" }, 
   { url: "/validate-reference-letters", title: "Validate Reference Letters" },
    { title: "Complaint & Feedback", url: "complaint-feedback" },
    { title: "Order e-mitra Stationery", url: "order-e-mittra-stationery" }];


export const projectsLink = [
  { title: "Rajpay", url: "/rajpay" },
  { title: "Shopneo", url: "/shopneo" },
  { title: "e-Mitra", url: "/emitra" },
  { title: "Kiosk Banking", url: "/kiosk-banking" },
  { title: "Achariya Drones", url: "/achariya-drones" },
  { title: "RKCL", url: "/rkcl" },
  { title: "School Easy", url: "/school-easy" },
  { title: "Yoga certification", url: "/yoga-certification" },

];

// Footer support links
export const support = [
  { title: "Contact Us", type: "heading" },

  // Separate phone numbers
  { title: "+91 890-190-3333", url: "tel:+918901903333", type: "tel" },
  { title: "+91 903-404-0243", url: "tel:+919034040243", type: "tel" },
  { title: "+91 958-788-7702", url: "tel:+919587887702", type: "tel" },

  // Separate emails
  { title: "info@Achariyagroup.com", url: "mailto:info@Achariyagroup.com", type: "email" },
  { title: "manager@Achariyagroup.com", url: "mailto:manager@Achariyagroup.com", type: "email" }, 
];


// kisok downloads

export const kisokConst  = [
    {
      label: "Bank BC Application Form",
      href: "/files/BC Application FORM (5).docx",
      download: "Application-form.docx",
    },
    {
      label: "Bank BC",
      href: "/pdf/combined.pdf",
      download: "BankBC.pdf",
    },
    {
      label: "BC Selection Format",
      href: "/pdf/combined.pdf",
      download: "BC-Selection-Format.pdf",
    },
    {
      label: "RMGB Installation Process",
      href: "/files/rmgb_installation.docs",
      download: "RMGB-Installation-Process.pdf",
    },
    {
      label: "Windows RD Service V2.0.1",
      href: "/files/Windows_RDService_V2.0.1.42_HTTPs_127.0.0.1.zip",
      download: "Windows-RD-Service.pdf",
    },
    {
      label: "BOB Morpho MSO 1300 Esetup",
      href: "/files/BOB_MorphoMSO1300Esetup 2.2.1.8_06July2017.zip",
      download: "BOB_MorphoMSO1300Esetup 2.2.1.8_06July2017.zip",
    },
    {
      label: "BOB Banner",
      href: "/pdf/BOB-BANNER.pdf",
      download: "BOB-BANNER.pdf",
    },
    {
      label: "BOB Register",
      href: "/pdf/BOB-REGISTER.pdf",
      download: "BOB-REGISTER.pdf",
    },
    {
      label: "RGB Banner",
      href: "/pdf/BRKGB-BANNER.pdf",
      download: "RGB-BANNER.pdf",
    },
    {
      label: "RGB Register",
      href: "/pdf/BRKGB-REGISTER.pdf",
      download: "RGB-REGISTER.pdf",
    },
  ];


  // bank bc commision
 export  const bankCommissions = [
  {
  product: "INSTANT SB A/C OPENING, EKYC",
  commission: "Rs. 4 per account (Funded), Rs. 8 per account (Initial funding of Rs. 10–100), Rs. 12 per account (Initial funding of Rs. 101–500), Rs. 16 per account (Initial funding of Rs. 501–750,Rs. 20 (Initial funding of above Rs. 750))"
},
    { product: "INSTANT SB A/C OPENING, NON-EKYC", commission: "Rs. 4/- per account (non-Funded), Rs. 8/- per account (Funded)" },
    {
  product: "Non-BSBD Account Open",
  commission: {
    description: "Account Open In SB 160 Scheme - Charges for A/C Open as follows:",
    rules: [
      "If Account open during 1st to 10th of the month - the average balance from 11th to last day of the month",
      "If account opened during 11th to last day of month - the average balance of next month"
    ],
    tiers: [
      { range: "0 to 499", commission: 0.00 },
      { range: "500 to 999", commission: 16.00 },
      { range: "1,000 to 1,999", commission: 20.00 },
      { range: "2,000 to 4,999", commission: 40.00 },
      { range: "5,000 to 9,999", commission: 60.00 },
      { range: "10,000 to 14,999", commission: 100.00 },
      { range: "15,000 to 19,000", commission: 140.00 },
      { range: "20,000 to Above", commission: 160.00 }
    ]
  }
},
    { product: "INSTANT RD A/C OPENING", commission: "Rs. 8/- per account" },
    { product: "INSTANT FD A/C OPENING", commission: "Rs. 32/- of deposit amount Min. Rs. 1 & Max. of Rs. 20/- per A/c" },
    { product: "MICRO INSURANCE - PMSBY", commission: "Rs. 0.80/- per policy" },
    { product: "MICRO INSURANCE - PMJJBY", commission: "Rs. 24 (June, July, August),Rs. 18 (Sept, Oct., Nov),Rs. 12 (Dec, Jan, Feb),Rs. 6 (March, April, May) No commission for renewal of policies from 01-06-2022" },
    { product: "ATAL PENSION YOJANA", commission: "Rs. 30/- per application and annually" },
    { product: "IMPS (AADHAAR AUTHENTICATED IMPS)", commission: "Rs. 0.32 of the amounts (Min. Rs. .80 & Max of Rs. 8/- per a/c)" },
    { product: "AADHAAR SEEDING", commission: "Rs. 2.40/- per Account duly verified by branch in CBS" },
    { product: "AADHAAR AUTHENTICATION", commission: "Rs. 2.40/-" },
    { product: "MOBILE SEEDING", commission: "Rs. 4/- per successful seeding" },
    { product: "AEPS ON US CASH DEPOSIT", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 20" },
    { product: "AEPS ON US CASH WITHDRAWAL", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 20" },
    { product: "AEPS ON US FUND TRANSFER", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 8" },
    { product: "AEPS OFF-US CASH DEPOSIT", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 16" },
    { product: "AEPS OFF-US CASH WITHDRAWAL", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 16" },
    { product: "AEPS OFF-US FUND TRANSFER", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 8" },
    { product: "BALANCE INQUIRY ON US", commission: "NIL" },
    { product: "BALANCE INQUIRY OFF US", commission: "NIL" },
    { product: "MINI STATEMENT ON US", commission: "NIL" },
    { product: "MINI STATEMENT OFF US", commission: "NIL" },
    { product: "SHG DUAL AUTHENTICATION TRANSACTION", commission: "Rs. 0.32% of deposit amount Min. Rs. 1 & Max. of Rs. 20" },
    { product: "CARD WITHDRAWAL ON-US TXN", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 20" },
    { product: "CARD WITHDRAWAL ON US TIN/NPI (RUPAY OFFUS)", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 16" },
    { product: "DEBIT CARD BALANCE INQUIRY", commission: "NIL" },
    { product: "THIRD PARTY DEPOSIT", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 20" },
    { product: "PASS BOOK PRINTING", commission: "Rs. 4/CYF up to 300 in a month and above 300 in a a month Rs.4.80/ CYF" },
    { product: "JEEVAN PRAMAAN", commission: "NIL" },
    { product: "BHARAT BILL PAYMENT SYSTEM (BBPS)", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 8.00" },
    { product: "REQUEST FOR NEW CHEQUE BOOK", commission: "Rs. 4/-" },
    { product: "STOP PAYMENT OF CHEQUE", commission: "Rs. 4/-" },
    { product: "CHEQUE STATUS ENQUIRY", commission: "NIL" },
    { product: "APPLY FOR DEBIT CARDS", commission: "Rs. 8.00/-" },
    { product: "AADHAAR LOOKUP FACILITY", commission: "NIL" },
    { product: "DEBIT CARD HOT LISTING", commission: "Rs. 2.40 per Request" },
    { product: "REQUEST FOR SMS ALERT", commission: "Rs. 1.60 per Request" },
    { product: "REQUEST FOR E-MAIL STATEMENT", commission: "NIL" },
    { product: "LODGE/TRACK COMPLAINTS", commission: "NIL" },
    { product: "Remittance through NEFT", commission: "0.32% of amount, Min. Rs. 0.80 & Max Rs. 8.00" },
    { product: "PMJDY OVERDRAFT", commission: "Rs. 20.00 per successful loan Disbursement" },
    { product: "IMPS (LOCAL AUTHENTICATION IMPS)", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 8.00" },
    { product: "CASH DEPOSIT-NON AEPS ONUS", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 20.00" },
    { product: "CASH WITHDRAWAL-NON AEPS ONUS", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 16.00" },
    { product: "FUND TRANSFER-NON AEPS ONUS", commission: "Rs. 0.32% of deposit amount Min. Rs. 0.80 & Max. of Rs. 8.00" },
    { product: "Deposit Mobilization in SB Accounts opened by BCs", commission: "Minimum 0.24% to Maximum 1.36% PA paid on monthly basis. Subject to fulfilment of terms and conditions." },
    { product: "NPA Recovery", commission: "0.80% of recovery in Standard Account, 1.60% in NPA Accounts, 8% in PWO/TWO" },
    { product: "Debit Card Issuance", commission: "Rs. 4.00" },
    { product: "BALANCE INQUIRY-NON AEPS ONUS", commission: "NIL" },
    { product: "MINI STATEMENT-NON AEPS ONUS", commission: "NIL" },
    { product: "Additional Incentive to BCs deployed in uncovered villages of North East States", commission: "0 to 50 Transaction- Rs. 4000, Achieving 75 Txns per month Rs. 6000, Achieving 100 Txns per month – Rs. 8000" },
  ];
  

// fastag vehicle types
export const vehicleData = [
  {
    class: "4 Class",
    description: "Car / Jeep / Van",
    icon: FaCar,
    tagCost: "99.99",
    deposit: "100",
    recharge: "200",
    total: "399.99",
  },
  {
    class: "4 Class",
    description: "TATA Ace / Mini Light Commercial",
    icon: FiPackage ,
    tagCost: "99.99",
    deposit: "100",
    recharge: "200",
    total: "399.99",
  },
  {
    class: "5 Class",
    description: "Mini Truck",
    icon: FiTruck ,
    tagCost: "99.99",
    deposit: "100",
    recharge: "140",
    total: "339.99",
  },
  {
    class: "5 Class",
    description: "Mini Bus",
    icon: FaBus ,
    tagCost: "99.99",
    deposit: "100",
    recharge: "140",
    total: "339.99",
  },
  {
    class: "6 Class",
    description: "3-axle Bus",
    icon: FaBus,
    tagCost: "99.99",
    deposit: "100",
    recharge: "300",
    total: "499.99",
  },
  {
    class: "6 Class",
    description: "3-axle Truck",
    icon: FiTruck,
    tagCost: "99.99",
    deposit: "100",
    recharge: "300",
    total: "499.99",
  },
  {
    class: "7 Class",
    description: "2-axle Commercial Bus/Truck",
    icon: FiTruck ,
    tagCost: "99.99",
    deposit: "100",
    recharge: "300",
    total: "499.99",
  },
  {
    class: "12 Class",
    description: "4 to 6-axle",
    icon: FiCpu,
    tagCost: "99.99",
    deposit: "100",
    recharge: "300",
    total: "499.99",
  },
  {
    class: "15 Class",
    description: "7 or more axle",
    icon: FiCpu, 
    tagCost: "99.99",
    deposit: "100",
    recharge: "300",
    total: "499.99",
  },
]; 



// e mitra forms data
export const emitradocuments = [
  {
    id: 1,
    sn: '1',
    name: 'मूल निवास प्रमाण – पत्र आवेदन पत्र (Bonafied Certificate)',
    category: 'miscellaneous',
    link: '/pdf/mul-niwas-rajasthan-form.pdf'
  },
  {
    id: 2,
    sn: '2.(a)',
    name: 'जाति प्रमाण-पत्र (General Cast Certificate (Emitra Rajasthan))',
    category: 'caste-certificate',
    link: '/pdf/generalCategory.pdf'
  },
  {
    id: 3,
    sn: '2.(b)',
    name: 'जाति प्रमाण-पत्र (OBC CASTE APPLICATION FORM RAJASTHAN STATE (Emitra Rajasthan))',
    category: 'caste-certificate',
    link: '/pdf/OBC-CASTE-APPLICATION-FORM-RAJASTHAN-STATE.pdf'
  },
  {
    id: 4,
    sn: '2.(c)',
    name: 'जाति प्रमाण-पत्र (OBC CENTRAL NEW FORMAT 2024(Scholarship)(Emitra Rajasthan))',
    category: 'caste-certificate',
    link: '/pdf/OBC-CENTRAL-NEW-FORMAT-2024.pdf'
  },
  {
    id: 5,
    sn: '2.(d)',
    name: 'जाति प्रमाण-पत्र (SC_ST CASTE APPLICATION FORM Rajasthan)',
    category: 'caste-certificate',
    link: '/pdf/SC_ST-CASTE-APPLICATION-FORM-2019.pdf'
  },
  {
    id: 6,
    sn: '2.(e)',
    name: 'जाति प्रमाण-पत्र (Caste Certificate for SC ST for Central (Emitra Rajasthan))',
    category: 'caste-certificate',
    link: '/pdf/Caste-Certificate-for-SC-ST-for-Central.pdf'
  },
  {
    id: 7,
    sn: '3',
    name: 'आर्थिक रूप से कमजोर वर्ग (EWS) प्रमाण पत्र के लिए आवेदन पत्र',
    category: 'miscellaneous',
    link: '/pdf/EWS-New-Form-3.pdf'
  },
  {
    id: 8,
    sn: '4',
    name: 'अल्पसंख्यक जाति प्रमाण-पत्र (Minority Caste Certificate)',
    category: 'caste-certificate',
    link: '/pdf/Alapsankhayak_Jati_Parman_Patr.pdf'
  },
  {
    id: 9,
    sn: '5.(a)',
    name: 'न्यू राशन कार्ड आवेदन फॉर्म (Ration Card)',
    category: 'ration-card',
    link: '/pdf/new-Ration-card-application-form.pdf'
  },
  {
    id: 10,
    sn: '5.(b)',
    name: 'राशन कार्ड में सुधार हेतु आवेदन फॉर्म (Ration Card)',
    category: 'ration-card',
    link: '/pdf/GAndE_1493702947052.pdf'
  },
  {
    id: 11,
    sn: '5.(c)',
    name: 'नाम जुडवाने हेतु शपथ-पत्र (Ration Card)',
    category: 'ration-card',
    link: '/pdf/Add-Name-sapath-patra.pdf'
  },
  {
    id: 12,
    sn: '5.(d)',
    name: 'नाम हटाने हेतु शपथ-पत्र (Ration Card)',
    category: 'ration-card',
    link: '/pdf/Remove-name-rasan-card-sapath-patra.pdf'
  },
  {
    id: 13,
    sn: '5.(e)',
    name: 'राशन कार्ड निरस्त करने हेतु शपथ-पत्र (Ration Card)',
    category: 'ration-card',
    link: '/pdf/Cancel-RAtion-card-sapath-patra.pdf'
  },
  {
    id: 14,
    sn: '6',
    name: 'खाद्य सुरक्षा योजना में नाम जुडवाने हेतु आवेदन फॉर्म (NFSA Form)',
    category: 'ration-card',
    link: ''
  },
  {
    id: 15,
    sn: '6.(a)',
    name: 'शहरी क्षेत्र हेतु आवेदन पत्र',
    category: 'ration-card',
    link: '/pdf/city_People.pdf'
  },
  {
    id: 16,
    sn: '6.(b)',
    name: 'ग्रामीण क्षेत्र हेतु आवेदन पत्र',
    category: 'ration-card',
    link: '/pdf/NFSA-Rural-Form-1.pdf'
  },
  {
    id: 17,
    sn: '7.(a)',
    name: 'सामाजिक सुरक्षा पेंशन योजना आवेदन फॉर्म',
    category: 'pension',
    link: '/pdf/Pension-Application-Form.pdf'
  },
  {
    id: 18,
    sn: '7.(b)',
    name: 'सामाजिक सुरक्षा पेंशन योजना (आय प्रमाण पत्र)',
    category: 'pension',
    link: '/pdf/Pension-Income-certificate1.pdf'
  },
  {
    id: 19,
    sn: '8',
    name: 'पालनहार योजना हेतु आवेदन फॉर्म',
    category: 'pension',
    link: '/pdf/palanhar-application-form.pdf'
  },
  {
    id: 20,
    sn: '9',
    name: 'जन्म प्रमाण-पत्र ( Birth Certificate)',
    category: 'birth-death-marriage',
    link: '/pdf/birthcertificate.pdf'
  },
  {
    id: 21,
    sn: '9.(a)',
    name: 'जन्म प्रमाण-पत्र 21 दिन ( Birth Certificate 21 Days)',
    category: 'birth-death-marriage',
    link: '/pdf/BirthCertificate21Days.pdf'
  },
  {
    id: 22,
    sn: '9.(b)',
    name: 'जन्म प्रमाण-पत्र 1 महिना ( Birth Certificate 1 Month)',
    category: 'birth-death-marriage',
    link: '/pdf/BirthCertificate1Month.pdf'
  },
  {
    id: 23,
    sn: '9.(c)',
    name: 'जन्म प्रमाण-पत्र 1 साल ( Birth Certificate 1 Year )',
    category: 'birth-death-marriage',
    link: '/pdf/BirthCertificate1Year.pdf'
  },
  {
    id: 24,
    sn: '10',
    name: 'मृत्यू प्रमाण-पत्र ( Death Certificate)',
    category: 'birth-death-marriage',
    link: '/pdf/deathcertificate.pdf'
  },
  {
    id: 25,
    sn: '11',
    name: 'विवाह प्रमाण-पत्र (Marriage Certificate)',
    category: 'birth-death-marriage',
    link: '/pdf/vivahpanjiyan.pdf'
  },
  {
    id: 26,
    sn: '12',
    name: 'श्रम विभाग : निर्माण श्रमिक सुलभ्य आवास योजना (Emitra Rajasthan)',
    category: 'miscellaneous',
    link: '/pdf/aavas-yojna-application-form.pdf'
  },
  {
    id: 27,
    sn: '13',
    name: 'आय प्रमाण-पत्र',
    category: 'income-certificate',
    link: '/pdf/INCOME-CERTIFICATE-4-PAGE-2_compressed.pdf'
  },
  {
    id: 28,
    sn: '13.(a)',
    name: 'आय प्रमाण-पत्र नया',
    category: 'income-certificate',
    link: '/pdf/आय-प्रमाण-धोषणा.pdf'
  },
  {
    id: 29,
    sn: '13.(b)',
    name: 'आय प्रमाण-पत्र हेतु आवेदन फॉर्म नया (राजस्थान सरकार की विभिन्न छात्रवृति हेतु)',
    category: 'income-certificate',
    link: '/pdf/Scholarship-new-Income-Certificate-Form.pdf'
  },
  {
    id: 30,
    sn: '13.(c)',
    name: 'आय प्रमाण-पत्र हेतु आवेदन फॉर्म (राजस्थान सरकार की विभिन्न छात्रवृति हेतु)',
    category: 'income-certificate',
    link: '/pdf/Income-Certificate-for-Scholarship.pdf'
  },
  {
    id: 31,
    sn: '14',
    name: 'बेरोगाजगारी भत्ते हेतु शपथ-पत्र',
    category: 'miscellaneous',
    link: '/pdf/berojgari-bhatta-sapath-patra.pdf'
  },
  {
    id: 32,
    sn: '15.(a)',
    name: 'निजी चरित्र सत्यापन का फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/police-carecter-verification-certificate.pdf'
  },
  {
    id: 33,
    sn: '15.(b)',
    name: 'घरेलु नोकर का पुलिस चरित्र सत्यापन का फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/Police-Certificate-for-Servant-Varification.pdf'
  },
  {
    id: 33,
    sn: '15.(c)',
    name: 'किरायेदार के पुलिस चरित्र सत्यापन का फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/Police-Certificate-for-tenent-verification.pdf'
  },
  {
    id: 34,
    sn: '16',
    name: 'नामांतरण के लिए प्रार्थना पत्र (Application for Mutation)',
    category: 'miscellaneous',
    link: '/pdf/Application-form-Mutation.pdf'
  },
  {
    id: 35,
    sn: '17',
    name: 'गोदनामा हेतु आवेदन फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/godnama-application-form.pdf'
  },
  {
    id: 36,
    sn: '18',
    name: 'जन आधार आय प्रमाण पत्र ( JAN AADHAR INCOME FORM )',
    category: 'income-certificate',
    link: '/pdf/JanAadhar-Income-Forms.pdf'
  },
  {
    id: 37,
    sn: '19',
    name: 'तारबंदी योजना हेतु आवेदन फॉर्म',
    category: 'miscellaneous',
    link: '/pdf/taar-bandhi-application-form.pdf'
  },
  {
    id: 38,
    sn: '20',
    name: 'कृषि यंत्रों के लिए सब्सिडी हेतु आवेदन फॉर्म ( Application for subsidy on farm implements )',
    category: 'miscellaneous',
    link: '/pdf/KRASHI-yantro-anudan-application-form.pdf'
  },
  {
    id: 39,
    sn: '21',
    name: 'फव्वारा पाईप लाईन के लिए सब्सिडी हेतु आवेदन फॉर्म ( Application for subsidy on farm implements )',
    category: 'miscellaneous',
    link: '/pdf/FwaraPipelineSubsidyFom.pdf'
  },
  {
    id: 40,
    sn: '22',
    name: 'हैसियत प्रमाण पत्र के लिए आवेदन फॉर्म ( Application for subsidy on farm implements )',
    category: 'income-certificate',
    link: '/pdf/हैसियत_प्रमाण_पत्र_के_लिए_आवेदन_पत्र.pdf'
  },
  {
    id: 41,
    sn: '23',
    name: 'यदि आपका ब्राउज़र नोट सिक्योर दिखा रहा है तो इसे डाउनलोड करके इनस्टॉल करें',
    category: 'miscellaneous',
    link: '/pdf/Global_Signin.zip'
  },
  {
    id: 42,
    sn: '24',
    name: 'Application form for NFSA Rural area',
    category: 'ration-card',
    link: '/pdf/Application%20form%20for%20NFSA%20Rural%20area.pdf'
  },
  {
    id: 43,
    sn: '25',
    name: 'Application form for NFSA Urban area',
    category: 'ration-card',
    link: '/pdf/Application%20form%20for%20NFSA%20Urban%20area.pdf'
  },
  {
    id: 44,
    sn: '26',
    name: 'Solvency Form',
    category: 'income-certificate',
    link: '/pdf/Solvency_Form.pdf'
  },
  {
    id: 45,
    sn: '27',
    name: 'Seed licnese Form',
    category: 'miscellaneous',
    link: '/pdf/Seed-licnese-Form.pdf'
  },
  {
    id: 46,
    sn: '28',
    name: 'PM Awas Yojana Urban Housing for All by 2022',
    category: 'miscellaneous',
    link: '/pdf/PM-Awas-Yojana-Urban-Housing-for-All-by-2022.pdf'
  },
  {
    id: 47,
    sn: '29',
    name: 'Physical Verification Document',
    category: 'miscellaneous',
    link: '/pdf/Physical_Verification_Document.pdf'
  },
  {
    id: 48,
    sn: '30',
    name: 'Lease Deed patta form',
    category: 'miscellaneous',
    link: '/pdf/Lease-Deed-patta-form.pdf'
  },
  {
    id: 49,
    sn: '31',
    name: 'IGSCCY Shapath Patra Format',
    category: 'miscellaneous',
    link: '/pdf/IGSCCY-Shapath-Patra-Format.pdf'
  },
  {
    id: 50,
    sn: '32',
    name: 'EWS For State form',
    category: 'miscellaneous',
    link: '/pdf/EWS-For-State-form.pdf'
  },
  {
    id: 51,
    sn: '33',
    name: 'Digi Subsidy form',
    category: 'miscellaneous',
    link: '/pdf/Digi-subsidy-form.pdf'
  },
  {
    id: 52,
    sn: '34',
    name: 'BONAFIED TSP',
    category: 'miscellaneous',
    link: '/pdf/BONAFIED-TSP.pdf'
  },
  {
    id: 53,
    sn: '35',
    name: 'Application form Low Cost Onion Cold Storage',
    category: 'miscellaneous',
    link: '/pdf/Application-form-Low-cost-onion-cold-storage.docx'
  },
  {
    id: 54,
    sn: '36',
    name: 'Bonafide Form',
    category: 'miscellaneous',
    link: '/pdf/bonafide-form.pdf'
  },
  {
    id: 55,
    sn: '37',
    name: 'Bhumi heen praman pratra',
    category: 'miscellaneous',
    link: '/pdf/Bhumi-heen-praman-pratra.pdf'
  },
  {
    id: 56,
    sn: '38',
    name: 'Laghu krashak praman patra',
    category: 'miscellaneous',
    link: '/pdf/Laghu-krashak-praman-patra.jpeg'
  },
  {
    id: 57,
    sn: '39',
    name: 'डिग्गी अधिकारी रिपोर्ट फॉर्म Diggi Reports Forms',
    category: 'miscellaneous',
    link: '/pdf/Diggi-Reports-Forms.pdf'
  },
  {
    id: 58,
    sn: '40',
    name: 'कृषि यंत्रो के लिए सब्सिडी हेतु आवदेन फॉर्म (farm implements )',
    category: 'miscellaneous',
    link: '/pdf/farm-implements.pdf'
  },
  {
    id: 59,
    sn: '41',
    name: 'कुसुम योजना सौर ऊर्जा फॉर्म Kusum Scheme Solar panel Application Form',
    category: 'miscellaneous',
    link: '/pdf/Kusum-Scheme-Solar-panel-Application-Form.pdf'
  },
  {
    id: 60,
    sn: '42',
    name: 'जल हौज़ पर अनदुान हेतु Application for subsidy on Water Storage Tank',
    category: 'miscellaneous',
    link: '/pdf/Application-for-subsidy-on-Water-Storage-Tank.pdf'
  },
  {
    id: 61,
    sn: '43',
    name: 'तारबन्दी योजना हेतु आवेदन फॉर्म Wire Fencing',
    category: 'miscellaneous',
    link: '/pdf/Wire-Fencing.pdf'
  },
  {
    id: 62,
    sn: '44',
    name: 'नामांतरण के लिए प्रार्थना पत्र (Application for Mutation)',
    category: 'miscellaneous',
    link: '/pdf/Application-for-Mutation.pdf'
  },
  {
    id: 63,
    sn: '45',
    name: 'शौचालय हेतु फॉर्म Shouchalay Form',
    category: 'miscellaneous',
    link: '/pdf/Shouchalay-Form.pdf'
  },
  {
    id: 64,
    sn: '46',
    name: 'मुख्यमंत्री कन्या शादी सहयोग योजना Application For Sahyog Scheme',
    category: 'miscellaneous',
    link: '/pdf/Application-For-Sahyog-Scheme.pdf'
  },
  {
    id: 65,
    sn: '47',
    name: 'विवाह प्रमाण-पत्र (Marriage Certificate)',
    category: 'birth-death-marriage',
    link: '/pdf/Marriage-Certificate.pdf'
  },
  {
    id: 66,
    sn: '48',
    name: 'ठेकेदार का प्रमाण पत्र Labour Contractor Certificate',
    category: 'miscellaneous',
    link: '/pdf/Labour-Contractor-Certificate.pdf'
  },
  {
    id: 67,
    sn: '49',
    name: 'नियोजक का प्रमाण पत्र Labour Niyojak Certificate',
    category: 'miscellaneous',
    link: '/pdf/Labour-Niyojak-Certificate.pdf'
  },
  {
    id: 68,
    sn: '50',
    name: 'राज श्री आवेदन फॉर्म Application For Rajshree',
    category: 'miscellaneous',
    link: '/pdf/Application-For-Rajshree.pdf'
  },
  {
    id: 69,
    sn: '51',
    name: 'दिव्यांग आवेदन फॉर्म Application For Disabililty',
    category: 'miscellaneous',
    link: '/pdf/Application-For-Disabililty.pdf'
  },
  {
    id: 70,
    sn: '52',
    name: 'प्रधानमंत्री आवास योजना ग्रामीण PM Aawas Rural',
    category: 'miscellaneous',
    link: '/pdf/PM-Aawas-Rural.pdf'
  },
  {
    id: 71,
    sn: '53',
    name: 'पशु छपरा टिन शेड Animal Chhapra Teen Shed',
    category: 'miscellaneous',
    link: '/pdf/Animal-Chhapra-Teen-Shed.pdf'
  },
  {
    id: 72,
    sn: '54',
    name: 'परित्यक्ता पेंशन फॉर्म Abandonment Pension Form',
    category: 'pension',
    link: '/pdf/Abandonment-Pension-Form.pdf'
  },
  {
    id: 73,
    sn: '55',
    name: 'दिव्यांग चिकित्सा प्रमाण पत्र Disability Medical Certificate',
    category: 'miscellaneous',
    link: '/pdf/Disability-Medical-Certificate.pdf'
  },
  {
    id: 74,
    sn: '56',
    name: 'आंगनवाड़ी फॉर्म Anganwadi Form',
    category: 'miscellaneous',
    link: '/pdf/Anganwadi-Form.pdf'
  },
  {
    id: 75,
    sn: '57',
    name: 'बेरोजगारी इंटर्नशिप प्रमाण पत्र Unemployment Internship Certificate',
    category: 'miscellaneous',
    link: '/pdf/Unemployment-Internship-Certificate.pdf'
  },
  {
    id: 76,
    sn: '58',
    name: 'मुख्यमंत्री कोरोना मृत्यु सहायता योजना फॉर्म Covid Death Claim Form',
    category: 'miscellaneous',
    link: '/pdf/Covid-Death-Claim-Form.pdf'
  }
];
