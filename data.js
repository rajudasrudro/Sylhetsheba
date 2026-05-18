/* ═══════════════════════════════════════════════════════════════════
   data.js — সিলেট বিভাগ: সকল জেলা, উপজেলা, সেবা ও রক্তদাতার তথ্য
   (localStorage দিয়ে persist হবে — admin panel থেকে পরিবর্তনযোগ্য)
═══════════════════════════════════════════════════════════════════ */

const DIVISION = "সিলেট";

/* ── জেলা ও উপজেলা ── */
const DISTRICTS_DATA = {
  "সিলেট": [
    "সিলেট সদর","বিয়ানীবাজার","বালাগঞ্জ","বিশ্বনাথ",
    "কোম্পানীগঞ্জ","ফেঞ্চুগঞ্জ","গোলাপগঞ্জ","গোয়াইনঘাট",
    "জৈন্তাপুর","কানাইঘাট","ওসমানীনগর","দক্ষিণ সুরমা","জকিগঞ্জ"
  ],
  "মৌলভীবাজার": [
    "মৌলভীবাজার সদর","বড়লেখা","জুড়ী","কমলগঞ্জ",
    "কুলাউড়া","রাজনগর","শ্রীমঙ্গল"
  ],
  "হবিগঞ্জ": [
    "হবিগঞ্জ সদর","আজমিরীগঞ্জ","বাহুবল","বানিয়াচং",
    "চুনারুঘাট","লাখাই","মাধবপুর","নবীগঞ্জ","শায়েস্তাগঞ্জ"
  ],
  "সুনামগঞ্জ": [
    "সুনামগঞ্জ সদর","ছাতক","দিরাই","দোয়ারাবাজার",
    "জগন্নাথপুর","জামালগঞ্জ","ধর্মপাশা","শাল্লা",
    "তাহিরপুর","মধ্যনগর","বিশ্বম্ভরপুর"
  ]
};

const SERVICE_TYPES = ["হাসপাতাল","থানা","ফায়ার সার্ভিস","অ্যাম্বুলেন্স"];
const BLOOD_GROUPS  = ["A+","A-","B+","B-","O+","O-","AB+","AB-"];

const TYPE_META = {
  "হাসপাতাল":    { icon:"🏥", bg:"#fef2f2", border:"#fca5a5", pin:"#e74c3c" },
  "থানা":        { icon:"👮", bg:"#eff6ff", border:"#93c5fd", pin:"#3b82f6" },
  "ফায়ার সার্ভিস":{ icon:"🚒", bg:"#fff7ed", border:"#fdba74", pin:"#f97316" },
  "অ্যাম্বুলেন্স": { icon:"🚑", bg:"#f0fdf4", border:"#86efac", pin:"#22c55e" },
};

/* ── জেলা কেন্দ্র (মানচিত্রের জন্য) ── */
const DISTRICT_CENTER = {
  "সিলেট":       [24.9045, 91.8611],
  "মৌলভীবাজার": [24.4826, 91.7773],
  "হবিগঞ্জ":    [24.3745, 91.4156],
  "সুনামগঞ্জ":  [25.0658, 91.3950],
};

/* ── Default সার্ভিস ডেটা ── */
const DEFAULT_SERVICES = [
  /* ══ সিলেট জেলা ══ */
  { id:1, district:"সিলেট", upazila:"সিলেট সদর", type:"হাসপাতাল",
    name:"এমএজি ওসমানী মেডিকেল কলেজ হাসপাতাল",
    address:"পীর মহল্লা, সিলেট সদর", phone:"০৮২১-৭১৩৮৭৭",
    dutyOfficer:"ডা. মো. কামাল হোসেন", status:"open",
    lat:24.8978, lng:91.8688, beds:"৫০০+", emergency:true },
  { id:2, district:"সিলেট", upazila:"সিলেট সদর", type:"হাসপাতাল",
    name:"সিলেট মহিলা মেডিকেল কলেজ হাসপাতাল",
    address:"দর্শন দেউড়ি, সিলেট", phone:"০৮২১-৭২৪৩৭১",
    dutyOfficer:"ডা. সুমাইয়া বেগম", status:"open",
    lat:24.9005, lng:91.8620, beds:"২০০", emergency:true },
  { id:3, district:"সিলেট", upazila:"সিলেট সদর", type:"থানা",
    name:"কোতোয়ালী থানা",
    address:"কোতোয়ালী, সিলেট সদর", phone:"০৮২১-৭২৩৫০০",
    dutyOfficer:"ওসি মো. জুবায়ের আহমদ", status:"open",
    lat:24.8950, lng:91.8700, beds:null, emergency:true },
  { id:4, district:"সিলেট", upazila:"সিলেট সদর", type:"ফায়ার সার্ভিস",
    name:"সিলেট ফায়ার সার্ভিস ও সিভিল ডিফেন্স",
    address:"জিন্দাবাজার, সিলেট সদর", phone:"০৮২১-৭২৪৪৪৮",
    dutyOfficer:"ইন্সপেক্টর আলী আকবর", status:"open",
    lat:24.8960, lng:91.8640, beds:null, emergency:true },
  { id:5, district:"সিলেট", upazila:"সিলেট সদর", type:"অ্যাম্বুলেন্স",
    name:"OGSMC অ্যাম্বুলেন্স সার্ভিস",
    address:"ওসমানী হাসপাতাল, সিলেট", phone:"০১৭১১-১৯৯৭৮৮",
    dutyOfficer:"চালক মো. রাশেদ", status:"open",
    lat:24.8985, lng:91.8680, beds:null, emergency:true },
  { id:6, district:"সিলেট", upazila:"বিয়ানীবাজার", type:"হাসপাতাল",
    name:"বিয়ানীবাজার উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"বিয়ানীবাজার, সিলেট", phone:"০৮২৩৩-৫৬০৮৮",
    dutyOfficer:"ডা. রফিকুল ইসলাম", status:"open",
    lat:24.8920, lng:92.1490, beds:"৫০", emergency:false },
  { id:7, district:"সিলেট", upazila:"বিয়ানীবাজার", type:"থানা",
    name:"বিয়ানীবাজার থানা",
    address:"বিয়ানীবাজার, সিলেট", phone:"০৮২৩৩-৫৬০১০",
    dutyOfficer:"ওসি আব্দুল মতিন", status:"open",
    lat:24.8860, lng:92.1300, beds:null, emergency:true },
  { id:8, district:"সিলেট", upazila:"গোয়াইনঘাট", type:"থানা",
    name:"গোয়াইনঘাট থানা",
    address:"গোয়াইনঘাট, সিলেট", phone:"০৮২১-৮৭৫৪৫",
    dutyOfficer:"ওসি সাইফুল ইসলাম", status:"open",
    lat:25.1200, lng:91.9800, beds:null, emergency:true },
  { id:9, district:"সিলেট", upazila:"জৈন্তাপুর", type:"হাসপাতাল",
    name:"জৈন্তাপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"জৈন্তাপুর, সিলেট", phone:"০৮২১-৮৮০৩৬",
    dutyOfficer:"ডা. শাহনাজ পারভীন", status:"open",
    lat:25.0723, lng:92.1086, beds:"৩১", emergency:false },
  { id:10, district:"সিলেট", upazila:"বিশ্বনাথ", type:"ফায়ার সার্ভিস",
    name:"বিশ্বনাথ ফায়ার সার্ভিস",
    address:"বিশ্বনাথ বাজার, সিলেট", phone:"০৮২৩১-৫৬০১২",
    dutyOfficer:"স্টেশন অফিসার করিম", status:"open",
    lat:24.9200, lng:91.7890, beds:null, emergency:false },
  { id:11, district:"সিলেট", upazila:"কানাইঘাট", type:"হাসপাতাল",
    name:"কানাইঘাট উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"কানাইঘাট, সিলেট", phone:"০৮২১-৮৮৭৬৫",
    dutyOfficer:"ডা. মো. নাজমুল হাসান", status:"open",
    lat:24.9890, lng:92.2700, beds:"৩১", emergency:false },
  { id:12, district:"সিলেট", upazila:"বালাগঞ্জ", type:"অ্যাম্বুলেন্স",
    name:"বালাগঞ্জ উপজেলা অ্যাম্বুলেন্স",
    address:"বালাগঞ্জ স্বাস্থ্য কমপ্লেক্স", phone:"০১৯৩০-৪৪৫৬৭৮",
    dutyOfficer:"চালক হাসান মিয়া", status:"closed",
    lat:24.8501, lng:91.8180, beds:null, emergency:false },

  /* ══ মৌলভীবাজার জেলা ══ */
  { id:13, district:"মৌলভীবাজার", upazila:"মৌলভীবাজার সদর", type:"হাসপাতাল",
    name:"মৌলভীবাজার সদর হাসপাতাল",
    address:"হাসপাতাল রোড, মৌলভীবাজার", phone:"০৮৬১-৫২০৩৩",
    dutyOfficer:"ডা. আমিনুল হক", status:"open",
    lat:24.4826, lng:91.7773, beds:"১০০", emergency:true },
  { id:14, district:"মৌলভীবাজার", upazila:"মৌলভীবাজার সদর", type:"থানা",
    name:"মৌলভীবাজার সদর থানা",
    address:"থানা রোড, মৌলভীবাজার", phone:"০৮৬১-৫৩০১১",
    dutyOfficer:"ওসি মাহবুবুর রহমান", status:"open",
    lat:24.4833, lng:91.7740, beds:null, emergency:true },
  { id:15, district:"মৌলভীবাজার", upazila:"শ্রীমঙ্গল", type:"হাসপাতাল",
    name:"শ্রীমঙ্গল উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"শ্রীমঙ্গল, মৌলভীবাজার", phone:"০৮৬২৬-৭১৩৩৩",
    dutyOfficer:"ডা. সুমন দেবনাথ", status:"open",
    lat:24.3079, lng:91.7315, beds:"৫০", emergency:false },
  { id:16, district:"মৌলভীবাজার", upazila:"শ্রীমঙ্গল", type:"থানা",
    name:"শ্রীমঙ্গল থানা",
    address:"শ্রীমঙ্গল, মৌলভীবাজার", phone:"০৮৬২৬-৭১৩০০",
    dutyOfficer:"ওসি তরিকুল ইসলাম", status:"open",
    lat:24.3090, lng:91.7300, beds:null, emergency:true },
  { id:17, district:"মৌলভীবাজার", upazila:"কুলাউড়া", type:"হাসপাতাল",
    name:"কুলাউড়া উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"কুলাউড়া, মৌলভীবাজার", phone:"০৮৬২৩-৫৬০৩৩",
    dutyOfficer:"ডা. নীলুফার ইয়াসমিন", status:"open",
    lat:24.5441, lng:92.0306, beds:"৫০", emergency:false },
  { id:18, district:"মৌলভীবাজার", upazila:"মৌলভীবাজার সদর", type:"ফায়ার সার্ভিস",
    name:"মৌলভীবাজার ফায়ার সার্ভিস",
    address:"ফায়ার স্টেশন রোড, মৌলভীবাজার", phone:"০৮৬১-৫৩০০২",
    dutyOfficer:"স্টেশন অফিসার জামাল", status:"open",
    lat:24.4820, lng:91.7760, beds:null, emergency:true },
  { id:19, district:"মৌলভীবাজার", upazila:"বড়লেখা", type:"থানা",
    name:"বড়লেখা থানা",
    address:"বড়লেখা, মৌলভীবাজার", phone:"০৮৬২৪-৫৬০১০",
    dutyOfficer:"ওসি আবুল কালাম", status:"open",
    lat:24.5876, lng:92.1605, beds:null, emergency:true },
  { id:20, district:"মৌলভীবাজার", upazila:"কমলগঞ্জ", type:"হাসপাতাল",
    name:"কমলগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"কমলগঞ্জ, মৌলভীবাজার", phone:"০৮৬২৫-৫৬০৩৩",
    dutyOfficer:"ডা. প্রদীপ সিংহ", status:"closed",
    lat:24.3696, lng:91.8523, beds:"৩১", emergency:false },

  /* ══ হবিগঞ্জ জেলা ══ */
  { id:21, district:"হবিগঞ্জ", upazila:"হবিগঞ্জ সদর", type:"হাসপাতাল",
    name:"হবিগঞ্জ সদর হাসপাতাল",
    address:"হাসপাতাল রোড, হবিগঞ্জ", phone:"০৮৩১-৬২০৩৩",
    dutyOfficer:"ডা. জাহিদুল ইসলাম", status:"open",
    lat:24.3745, lng:91.4156, beds:"১০০", emergency:true },
  { id:22, district:"হবিগঞ্জ", upazila:"হবিগঞ্জ সদর", type:"থানা",
    name:"হবিগঞ্জ সদর থানা",
    address:"থানা রোড, হবিগঞ্জ", phone:"০৮৩১-৬২৩০০",
    dutyOfficer:"ওসি নাজিম উদ্দিন", status:"open",
    lat:24.3750, lng:91.4140, beds:null, emergency:true },
  { id:23, district:"হবিগঞ্জ", upazila:"হবিগঞ্জ সদর", type:"ফায়ার সার্ভিস",
    name:"হবিগঞ্জ ফায়ার সার্ভিস",
    address:"ফায়ার স্টেশন, হবিগঞ্জ", phone:"০৮৩১-৬২৪৪৮",
    dutyOfficer:"স্টেশন অফিসার রাজু", status:"open",
    lat:24.3740, lng:91.4170, beds:null, emergency:true },
  { id:24, district:"হবিগঞ্জ", upazila:"চুনারুঘাট", type:"হাসপাতাল",
    name:"চুনারুঘাট উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"চুনারুঘাট, হবিগঞ্জ", phone:"০৮৩৩৭-৫৬০৩৩",
    dutyOfficer:"ডা. শিউলি বেগম", status:"open",
    lat:24.2460, lng:91.6280, beds:"৫০", emergency:false },
  { id:25, district:"হবিগঞ্জ", upazila:"নবীগঞ্জ", type:"থানা",
    name:"নবীগঞ্জ থানা",
    address:"নবীগঞ্জ, হবিগঞ্জ", phone:"০৮৩৩৩-৫৬০১০",
    dutyOfficer:"ওসি কামরুল হাসান", status:"open",
    lat:24.4040, lng:91.6043, beds:null, emergency:true },
  { id:26, district:"হবিগঞ্জ", upazila:"মাধবপুর", type:"হাসপাতাল",
    name:"মাধবপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"মাধবপুর, হবিগঞ্জ", phone:"০৮৩৩৬-৫৬০৩৩",
    dutyOfficer:"ডা. রাখাল বাবু", status:"closed",
    lat:24.1536, lng:91.5303, beds:"৩১", emergency:false },
  { id:27, district:"হবিগঞ্জ", upazila:"বানিয়াচং", type:"থানা",
    name:"বানিয়াচং থানা",
    address:"বানিয়াচং, হবিগঞ্জ", phone:"০৮৩৩২-৫৬০১০",
    dutyOfficer:"ওসি আব্দুস সালাম", status:"open",
    lat:24.5060, lng:91.3620, beds:null, emergency:true },
  { id:28, district:"হবিগঞ্জ", upazila:"হবিগঞ্জ সদর", type:"অ্যাম্বুলেন্স",
    name:"হবিগঞ্জ সদর হাসপাতাল অ্যাম্বুলেন্স",
    address:"হাসপাতাল রোড, হবিগঞ্জ", phone:"০১৭২২-৩৩৪৪৫৫",
    dutyOfficer:"চালক রফিক মিয়া", status:"open",
    lat:24.3748, lng:91.4160, beds:null, emergency:true },

  /* ══ সুনামগঞ্জ জেলা ══ */
  { id:29, district:"সুনামগঞ্জ", upazila:"সুনামগঞ্জ সদর", type:"হাসপাতাল",
    name:"সুনামগঞ্জ সদর হাসপাতাল",
    address:"হাসপাতাল রোড, সুনামগঞ্জ", phone:"০৮৭১-৬২০৩৩",
    dutyOfficer:"ডা. মতিউর রহমান", status:"open",
    lat:25.0658, lng:91.3950, beds:"১০০", emergency:true },
  { id:30, district:"সুনামগঞ্জ", upazila:"সুনামগঞ্জ সদর", type:"থানা",
    name:"সুনামগঞ্জ সদর থানা",
    address:"থানা রোড, সুনামগঞ্জ", phone:"০৮৭১-৬২৩০০",
    dutyOfficer:"ওসি ফারুক আহমেদ", status:"open",
    lat:25.0665, lng:91.3930, beds:null, emergency:true },
  { id:31, district:"সুনামগঞ্জ", upazila:"সুনামগঞ্জ সদর", type:"ফায়ার সার্ভিস",
    name:"সুনামগঞ্জ ফায়ার সার্ভিস",
    address:"ফায়ার স্টেশন রোড, সুনামগঞ্জ", phone:"০৮৭১-৬২৪৪৮",
    dutyOfficer:"স্টেশন অফিসার বাদশা", status:"open",
    lat:25.0655, lng:91.3960, beds:null, emergency:true },
  { id:32, district:"সুনামগঞ্জ", upazila:"ছাতক", type:"হাসপাতাল",
    name:"ছাতক উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"ছাতক, সুনামগঞ্জ", phone:"০৮৭২৩-৫৬০৩৩",
    dutyOfficer:"ডা. আসমা খাতুন", status:"open",
    lat:25.0419, lng:91.6519, beds:"৫০", emergency:false },
  { id:33, district:"সুনামগঞ্জ", upazila:"জগন্নাথপুর", type:"থানা",
    name:"জগন্নাথপুর থানা",
    address:"জগন্নাথপুর, সুনামগঞ্জ", phone:"০৮৭২৫-৫৬০১০",
    dutyOfficer:"ওসি মুজিবুর রহমান", status:"open",
    lat:24.8460, lng:91.5050, beds:null, emergency:true },
  { id:34, district:"সুনামগঞ্জ", upazila:"তাহিরপুর", type:"হাসপাতাল",
    name:"তাহিরপুর উপজেলা স্বাস্থ্য কমপ্লেক্স",
    address:"তাহিরপুর, সুনামগঞ্জ", phone:"০৮৭২৬-৫৬০৩৩",
    dutyOfficer:"ডা. সেলিম রেজা", status:"closed",
    lat:25.1219, lng:91.1930, beds:"৩১", emergency:false },
  { id:35, district:"সুনামগঞ্জ", upazila:"দিরাই", type:"থানা",
    name:"দিরাই থানা",
    address:"দিরাই, সুনামগঞ্জ", phone:"০৮৭২২-৫৬০১০",
    dutyOfficer:"ওসি জসিম উদ্দিন", status:"open",
    lat:24.7168, lng:91.3967, beds:null, emergency:true },
  { id:36, district:"সুনামগঞ্জ", upazila:"সুনামগঞ্জ সদর", type:"অ্যাম্বুলেন্স",
    name:"সুনামগঞ্জ সদর হাসপাতাল অ্যাম্বুলেন্স",
    address:"হাসপাতাল রোড, সুনামগঞ্জ", phone:"০১৭৩৩-৫৫৬৬৭৭",
    dutyOfficer:"চালক সোহেল রানা", status:"open",
    lat:25.0660, lng:91.3955, beds:null, emergency:true },
];

/* ── Default রক্তদাতা ডেটা ── */
const DEFAULT_DONORS = [
  { id:1,  name:"মো. রাহেলা বেগম",    phone:"০১৭১১-৪৪৫৫৬৬", bloodGroup:"A+",  district:"সিলেট",       upazila:"সিলেট সদর",       lastDonation:"১৫ ফেব্রুয়ারি ২০২৫", available:true },
  { id:2,  name:"সুমন চন্দ্র দাস",     phone:"০১৮১৮-৩৩২২৫৫", bloodGroup:"O+",  district:"সিলেট",       upazila:"বিয়ানীবাজার",     lastDonation:"২২ মার্চ ২০২৫",      available:true },
  { id:3,  name:"ফারহান মাহমুদ",       phone:"০১৯৩২-৬৬৭৭৮৮", bloodGroup:"B+",  district:"সিলেট",       upazila:"সিলেট সদর",       lastDonation:"৫ এপ্রিল ২০২৫",      available:false },
  { id:4,  name:"নাজনীন আক্তার",       phone:"০১৬২২-৯৯০০১১", bloodGroup:"AB+", district:"সিলেট",       upazila:"গোলাপগঞ্জ",       lastDonation:"১২ জানুয়ারি ২০২৫",  available:true },
  { id:5,  name:"তানভীর আহমেদ",        phone:"০১৫৫৫-১১২২৩৩", bloodGroup:"O-",  district:"সিলেট",       upazila:"সিলেট সদর",       lastDonation:"৩ মে ২০২৫",          available:true },
  { id:6,  name:"করিম মিয়া",           phone:"০১৭৩৩-৫৫৪৪৩৩", bloodGroup:"A-",  district:"মৌলভীবাজার", upazila:"শ্রীমঙ্গল",       lastDonation:"৮ মার্চ ২০২৫",       available:true },
  { id:7,  name:"আব্দুর রব চৌধুরী",    phone:"০১৮৫০-৭৭৮৮৯৯", bloodGroup:"B-",  district:"মৌলভীবাজার", upazila:"মৌলভীবাজার সদর", lastDonation:"১ জানুয়ারি ২০২৫",   available:false },
  { id:8,  name:"মারিয়াম সিদ্দিকী",   phone:"০১৯১১-৩৩৪৪৫৫", bloodGroup:"AB-", district:"হবিগঞ্জ",     upazila:"হবিগঞ্জ সদর",    lastDonation:"২০ ফেব্রুয়ারি ২০২৫", available:true },
  { id:9,  name:"রিফাত হাসান",         phone:"০১৭০৫-৮৮৯৯০০", bloodGroup:"O+",  district:"হবিগঞ্জ",     upazila:"চুনারুঘাট",       lastDonation:"৭ এপ্রিল ২০২৫",     available:true },
  { id:10, name:"করিমন নেছা",          phone:"০১৬৫৫-২২৩৩৪৪", bloodGroup:"B+",  district:"সুনামগঞ্জ",   upazila:"সুনামগঞ্জ সদর",  lastDonation:"২৫ মার্চ ২০২৫",      available:true },
  { id:11, name:"শাহরিয়ার আলম",        phone:"০১৭৯৯-৪৪৫৫৬৭", bloodGroup:"A+",  district:"সুনামগঞ্জ",   upazila:"ছাতক",            lastDonation:"৯ মে ২০২৫",          available:true },
  { id:12, name:"পূজা দেব নাথ",        phone:"০১৮৪৪-৬৬৭৭৮৮", bloodGroup:"O-",  district:"মৌলভীবাজার", upazila:"কমলগঞ্জ",         lastDonation:"১৮ জানুয়ারি ২০২৫",  available:false },
  { id:13, name:"ইমরান হোসেন",         phone:"০১৬৭৮-৯৯০০১১", bloodGroup:"B+",  district:"হবিগঞ্জ",     upazila:"মাধবপুর",         lastDonation:"২ এপ্রিল ২০২৫",     available:true },
  { id:14, name:"সাবিনা ইয়াসমিন",      phone:"০১৯২২-৩৩৪৪৫৫", bloodGroup:"AB+", district:"সুনামগঞ্জ",   upazila:"জগন্নাথপুর",     lastDonation:"১১ মার্চ ২০২৫",      available:true },
  { id:15, name:"রাসেল আহমেদ",         phone:"০১৭৪৫-৬৬৭৭৮৮", bloodGroup:"A+",  district:"সিলেট",       upazila:"কানাইঘাট",       lastDonation:"১৭ ফেব্রুয়ারি ২০২৫", available:true },
];

/* ── Default সতর্কতা ── */
const DEFAULT_ALERTS = [
  { id:1, text:"⚠️ বন্যা সতর্কতা: সুরমা নদীর পানি বিপদসীমার উপরে — সিলেট সদর ও গোয়াইনঘাট এলাকায় সতর্ক থাকুন।", active:true },
  { id:2, text:"🌧️ আবহাওয়া বার্তা: আগামী ৪৮ ঘণ্টা ভারী বৃষ্টিপাতের সম্ভাবনা রয়েছে।", active:true },
  { id:3, text:"📢 দুর্যোগ ব্যবস্থাপনা: জরুরি আশ্রয়কেন্দ্র খোলা হয়েছে — সিলেট সরকারি মহিলা কলেজ।", active:true },
];

/* ── localStorage helpers ── */
function loadData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

function saveData(key, data) {
  try { localStorage.setItem(key, JSON.stringify(data)); } catch(e){}
}

/* ── Report / Volunteer queues ── */
const DEFAULT_REPORTS = [];
const DEFAULT_VOLUNTEERS = [];
