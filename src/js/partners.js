const partners = [
  {
    "level": "platinum",
    "lead": "Nick Dressler",
    "email_1": "ndressler@crexi.com",
    "email_2": "",
    "company": "Crexi",
    "logo": "Crexi.png",
    "photo": "blank_profile_picture.jpg",
    "link": "https://www.nsbar.org/Strategic_Partner_Crexi"
  },
  {
    "level": "platinum",
    "lead": "Kristin Marsden",
    "email_1": "kristin@dunsing.com",
    "email_2": "",
    "company": "Dunsing Home Inspex.",
    "logo": "Dunsing.png",
    "photo": "Kristin_Marsden.jpg",
    "link": "https://www.nsbar.org/Strategic_Partner_Dunsing_Home_Inspex"
  },
  {
    "level": "platinum",
    "lead": "Dotty Dose",
    "email_1": "dottydose@yahoo.com",
    "email_2": "",
    "company": "ECHO Home Inspex.",
    "logo": "Echo_Home_Solutions.png",
    "photo": "Dotty_Dose.png",
    "link": "https://www.nsbar.org/Strategic_Partner_ECHO_Home_Inspex"
  },
  {
    "level": "platinum",
    "lead": "Erik Sager",
    "email_1": "info@greenhomesolutions.com",
    "email_2": "",
    "company": "Green Home Solutions",
    "logo": "Green_Home_Solutions.png",
    "photo": "Erik_Sager.png",
    "link": "https://www.nsbar.org/Strategic_Partner_Green_Home_Solutions_Of_Chicago"
  },
  {
    "level": "platinum",
    "lead": "Brian Jessen",
    "email_1": "brian@rate.com",
    "email_2": "",
    "company": "Guaranteed Rate***",
    "logo": "Guaranteed_Rate.jpg",
    "photo": "Brian_Jessen.png",
    "link": "https://www.nsbar.org/Strategic_Partner_Guaranteed_Rate"
  },
  {
    "level": "platinum",
    "lead": "Jeffrey Marks",
    "email_1": "jmarks@bussepc.com",
    "email_2": "",
    "company": "Jeffrey Marks RE Attorney",
    "logo": "Jeffrey_Marks.png",
    "photo": "Jeffrey_Marks_photo.png",
    "link": "https://www.nsbar.org/Strategic_Partner_Jeffrey_Marks_RE_Attorney"
  },
  {
    "level": "diamond",
    "lead": "Scott Weinstein",
    "email_1": "sweinstein@wintrustmortgage.com",
    "email_2": "",
    "company": "Wintrust Mortgage",
    "logo": "Wintrust_Mortgage.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Wintrust_Mortgage"
  },
  {
    "level": "silver",
    "lead": "Catherine Gonzalez<br>&<br>Sean Rigau",
    "email_1": "cathy.gonzalez@ctt.com",
    "email_2": "sean.rigau@ctt.com",
    "company": "Chicago Title & Trust",
    "logo": "Chicago_Title_stacked.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Chicago_Title_Trust"
  },
  {
    "level": "silver",
    "lead": "Bob Floss II",
    "email_1": "bob@flosslaw.com",
    "email_2": "",
    "company": "Floss Law",
    "logo": "Floss_Law.png",
    "photo": "Bob_Floss_II.jpg",
    "link": "https://www.nsbar.org/Strategic_Partner_Floss_Law"
  },
  {
    "level": "silver",
    "lead": "Shari Haefner",
    "email_1": "shaefner@freedomtitle.com",
    "email_2": "",
    "company": "Freedom Title",
    "logo": "Freedom_Title.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Freedom_Title"
  },
  {
    "level": "silver",
    "lead": "Tom Kentner",
    "email_1": "tkentner@hbtbank.com",
    "email_2": "",
    "company": "Heartland Bank",
    "logo": "Heartland_Bank.jpg",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Heartland_Bank"
  },
  {
    "level": "silver",
    "lead": "John Graziani",
    "email_1": "john.graziani@regions.com",
    "email_2": "",
    "company": "Regions Bank",
    "logo": "Regions_Bank.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Regions_Bank"
  },
  {
    "level": "bronze",
    "lead": "Kim Basilion",
    "email_1": "kimb@achosahw.com",
    "email_2": "",
    "company": "ACHOSA",
    "logo": "Achosa_Home_Warranty_LLC.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_ACHOSA"
  },
  {
    "level": "bronze",
    "lead": "Chanelle Johnson",
    "email_1": "chanelle.johnson@astound.com",
    "email_2": "",
    "company": "Astound Broadband",
    "logo": "Astound_Broadband.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Astound_Broadband"
  },
  {
    "level": "bronze",
    "lead": "Craig Capilla",
    "email_1": "ccapilla@fgcclaw.com",
    "email_2": "",
    "company": "Franklin, Greenswag, Channon & Capilla",
    "logo": "Franklin_Greenswag_Channon_Capilla_LLC.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Franklin_Greenswag_Channon_Capilla"
  },
  {
    "level": "bronze",
    "lead": "Larry Steinway",
    "email_1": "larry@rate.com",
    "email_2": "",
    "company": "Guaranteed Rate",
    "logo": "GR_Larry_Steinway.png",
    "photo": "Larry_Steinway.jpg",
    "link": "https://www.nsbar.org/Strategic_Partner_Guaranteed_Rate_"
  },
  {
    "level": "bronze",
    "lead": "Marcy Kozial",
    "email_1": "admin@indigoremodeling.com",
    "email_2": "",
    "company": "Indigo Remodeling",
    "logo": "Indigo_Remodeling.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Indigo_Remodeling"
  },
  {
    "level": "bronze",
    "lead": "Denise Helstrom",
    "email_1": "denise.helstrom@mylandtrust.com",
    "email_2": "",
    "company": "Landtrust Title Services",
    "logo": "Landtrust_Title.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Landtrust_Title_Services"
  },
  {
    "level": "bronze",
    "lead": "Lloyd Mandel",
    "email_1": "ljmandel@comcast.net",
    "email_2": "",
    "company": "Mitzvah Memorial Funerals",
    "logo": "Mitzvah_Memorial_Funerals.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Mitzvah_Memorial_Funerals"
  },
  {
    "level": "bronze",
    "lead": "",
    "email_1": "https://rapattoni.com/",
    "email_2": "",
    "company": "Rapattoni",
    "logo": "Rapattoni.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Rapattoni"
  },
  {
    "level": "bronze",
    "lead": "Peter Cotsirilos",
    "email_1": "pcotsirilos@kwcommercial.com",
    "email_2": "",
    "company": "Self Storage Developers",
    "logo": "Self_Storage_Developers.jpg",
    "photo": "Peter_Cotsirilos.jpg",
    "link": "https://www.nsbar.org/Strategic_Partner_Self_Storage_Developers"
  },
  {
    "level": "bronze",
    "lead": "",
    "email_1": "https://www.sentrilock.com/",
    "email_2": "",
    "company": "Sentrilock",
    "logo": "SentriLock.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Sentrilock"
  },
  {
    "level": "bronze",
    "lead": "",
    "email_1": "https://skyslope.com/",
    "email_2": "",
    "company": "Skyslope",
    "logo": "Skyslope.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Skyslope"
  },
  {
    "level": "teal",
    "lead": "Adiel Cuevas",
    "email_1": "adiel@2thepointhomeinspections.com",
    "email_2": "",
    "company": "2 The Point Home Inspections",
    "logo": "2_the_point_home_inspections.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_2_The_Point_Home_Inspections"
  },
  {
    "level": "teal",
    "lead": "Michael Delrahim",
    "email_1": "mdelrahim@bupdlaw.com",
    "email_2": "",
    "company": "BUPD Law",
    "logo": "BUPD_Law.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_BUPD_Law"
  },
  {
    "level": "teal",
    "lead": "Shane Smith",
    "email_1": "northshorechicago@hometeam.com",
    "email_2": "",
    "company": "HomeTeam Inspex.",
    "logo": "Home_Team_Inspection_Service.jpg",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_HomeTeam_Inspex"
  },
  {
    "level": "teal",
    "lead": "Ira Piltz",
    "email_1": "ira@piltzlaw.com",
    "email_2": "",
    "company": "Law Offices of Ira Piltz",
    "logo": "Piltz_Law.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Law_Offices_of_Ira_Piltz"
  },
  {
    "level": "teal",
    "lead": "Kendra Marderosian",
    "email_1": "kendra@marderosianlaw.com",
    "email_2": "",
    "company": "Marderosian Law",
    "logo": "Marderosian_Law_LLC.jpg",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Marderosian_Law"
  },
  {
    "level": "teal",
    "lead": "Ross Mathee",
    "email_1": "rmathee@wintrust.com",
    "email_2": "",
    "company": "North Shore Community Bank",
    "logo": "North_Shore_Community_Bank.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_North_Shore_Community_Bank"
  },
  {
    "level": "teal",
    "lead": "Chris Thomas",
    "email_1": "christopher.thomas@invitedclubs.com",
    "email_2": "",
    "company": "Ravinia Green",
    "logo": "Ravinia_Green.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Ravinia_Green"
  },
  {
    "level": "teal",
    "lead": "Bob Butters",
    "email_1": "rdbutters@amstein.com",
    "email_2": "",
    "company": "Saul, Ewing, Arnstein & Lehr",
    "logo": "Saul_Ewing_LLP.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Saul_Ewing_Arnstein_Lehr"
  },
  {
    "level": "teal",
    "lead": "Sue Berman",
    "email_1": "sberman@sbermanlaw.com",
    "email_2": "",
    "company": "Sue Berman",
    "logo": "Sue_Berman_Real_Estate_Attorney.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Sue_Berman"
  },
  {
    "level": "teal",
    "lead": "Susan Kim",
    "email_1": "susan@sjkimlaw.com",
    "email_2": "",
    "company": "Susan Kim/Attorney",
    "logo": "susan_j_kim.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Susan_Kim_Attorney"
  },
  {
    "level": "teal",
    "lead": "Adam Kriticos",
    "email_1": "adam@thekriticosgroup.com",
    "email_2": "",
    "company": "The Kriticos Group",
    "logo": "The_Kriticos_Group.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Kriticos_Group"
  },
  {
    "level": "teal",
    "lead": "Darin Daniels",
    "email_1": "darin.daniels@wellsfargo.com",
    "email_2": "",
    "company": "Wells Fargo",
    "logo": "Wells_Fargo.jpg",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Wells_Fargo"
  },
  {
    "level": "teal",
    "lead": "Kenneth Stafford",
    "email_1": "kstafford@wini.com",
    "email_2": "",
    "company": "WIN (inspections)",
    "logo": "win_home_inspection.png",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_WIN_inspections"
  },
  {
    "level": "affiliate",
    "lead": "Chris Wallace",
    "email_1": "chris.wallace@myccmortgage.com",
    "email_2": "",
    "company": "Cross Country Mortgage",
    "logo": "",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Cross_Country_Mortgage"
  },
  {
    "level": "affiliate",
    "lead": "Kevin Boggs",
    "email_1": "kevin.boggs@goosehead.com",
    "email_2": "",
    "company": "Goosehead Insurance",
    "logo": "",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Goosehead_Insurance"
  },
  {
    "level": "affiliate",
    "lead": "Seth Williams",
    "email_1": "seth@idhomestaging.com",
    "email_2": "",
    "company": "Interior Drama",
    "logo": "",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Interior_Drama"
  },
  {
    "level": "affiliate",
    "lead": "Mary Grace Nudo",
    "email_1": "marygrace@margoboutique.com",
    "email_2": "",
    "company": "Margo Boutique",
    "logo": "",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Margo_Boutique"
  },
  {
    "level": "affiliate",
    "lead": "Ethan Nagar",
    "email_1": "enagar@jamesonsir.com",
    "email_2": "",
    "company": "Nagar Construction",
    "logo": "",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Nagar_Construction"
  },
  {
    "level": "affiliate",
    "lead": "Megan Lane",
    "email_1": "mlane@watermanbank.com",
    "email_2": "",
    "company": "Waterman Bank",
    "logo": "",
    "photo": "",
    "link": "https://www.nsbar.org/Strategic_Partner_Waterman_Bank"
  }
];
