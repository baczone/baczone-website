
let course_card_contact = document.querySelectorAll(".course-card-contact");
let input_course_search = document.querySelector(".input-course-search");

if(course_card_contact.length > 0 && input_course_search){
input_course_search.addEventListener("input", function () {
    for (let search = 0; search < course_card_contact.length; search++) {
        let name = course_card_contact[search].querySelector("h4");
        let teacher_name = name.innerHTML.trim().toLowerCase();

        if (teacher_name.includes(input_course_search.value.trim().toLowerCase())) {
            course_card_contact[search].style.display = "block";
        } else {
            course_card_contact[search].style.display = "none";
        }
    }
});
}
let English = [
    {
        image: "image/english-1.jpg",
        name: "Ahmed Saad",
        Textbook: '<i class="material-symbols-outlined">spellcheck</i> English Grammar',
        Description: '<i class="material-symbols-outlined">history_edu</i> Senior English Teacher • 15 Years Exp. Specialized in Grammar and Sentence Structure.',
    },
    {
        image: "image/english-2.jpg",
        name: "Sarah Ahmed",
        Textbook: '<i class="material-symbols-outlined">edit_note</i> Grammar Practice',
        Description: '<i class="material-symbols-outlined">menu_book</i> English Language Expert • 12 Years Exp. Specialized in Grammar Rules and Practice.',
    },
    {
        image: "image/english-3.jpg",
        name: "Omar Khaled",
        Textbook: '<i class="material-symbols-outlined">menu_book</i> Reading Skills',
        Description: '<i class="material-symbols-outlined">school</i> Senior English Instructor • 10 Years Exp. Specialized in Reading and Text Analysis.',
    },
    {
        image: "image/english-4.jpg",
        name: "Mariam Hassan",
        Textbook: '<i class="material-symbols-outlined">auto_stories</i> English Literature',
        Description: '<i class="material-symbols-outlined">history_edu</i> English Literature Teacher • 14 Years Exp. Specialized in Literary Texts and Analysis.',
    },
    {
        image: "image/english-5.jpg",
        name: "Youssef Ali",
        Textbook: '<i class="material-symbols-outlined">translate</i> Vocabulary Building',
        Description: '<i class="material-symbols-outlined">translate</i> English Language Specialist • 11 Years Exp. Specialized in Vocabulary and Word Usage.',
    },
    {
        image: "image/english-6.jpg",
        name: "Nour Mohamed",
        Textbook: '<i class="material-symbols-outlined">draw</i> Writing Skills',
        Description: '<i class="material-symbols-outlined">draw</i> English Writing Coach • 9 Years Exp. Specialized in Essays and Paragraph Writing.',
    },
    {
        image: "image/english-7.jpg",
        name: "Mahmoud Ibrahim",
        Textbook: '<i class="material-symbols-outlined">refresh</i> English Revision',
        Description: '<i class="material-symbols-outlined">refresh</i> Senior English Teacher • 16 Years Exp. Specialized in Revision and Exam Strategies.',
    },
    {
        image: "image/english-8.jpg",
        name: "Farida Mahmoud",
        Textbook: '<i class="material-symbols-outlined">chrome_reader_mode</i> Reading Comprehension',
        Description: '<i class="material-symbols-outlined">chrome_reader_mode</i> English Instructor • 8 Years Exp. Specialized in Reading Comprehension and Texts.',
    },
    {
        image: "image/english-9.jpg",
        name: "Jana Mostafa",
        Textbook: '<i class="material-symbols-outlined">menu_book</i> Grammar Lessons',
        Description: '<i class="material-symbols-outlined">spellcheck</i> English Grammar Expert • 7 Years Exp. Specialized in Grammar Lessons and Exercises.',
    },
    {
        image: "image/english-10.jpg",
        name: "Amr Tarek",
        Textbook: '<i class="material-symbols-outlined">record_voice_over</i> Speaking Skills',
        Description: '<i class="material-symbols-outlined">record_voice_over</i> English Speaking Coach • 10 Years Exp. Specialized in Conversation and Pronunciation.',
    },
    {
        image: "image/english-11.jpg",
        name: "Malak Ibrahim",
        Textbook: '<i class="material-symbols-outlined">assignment_turned_in</i> Exam Preparation',
        Description: '<i class="material-symbols-outlined">assignment_turned_in</i> English Exam Specialist • 13 Years Exp. Specialized in Test Preparation and Review.',
    },
    {
        image: "image/english-12.jpg",
        name: "Abdelrahman Adel",
        Textbook: '<i class="material-symbols-outlined">psychology</i> Advanced Grammar',
        Description: '<i class="material-symbols-outlined">psychology</i> Advanced English Teacher • 12 Years Exp. Specialized in Complex Grammar and Syntax.',
    },
    {
        image: "image/english-13.jpg",
        name: "Habiba Ali",
        Textbook: '<i class="material-symbols-outlined">forum</i> English Conversation',
        Description: '<i class="material-symbols-outlined">forum</i> English Conversation Tutor • 8 Years Exp. Specialized in Dialogue and Communication.',
    },
    {
        image: "image/english-14.jpg",
        name: "Aya Khaled",
        Textbook: '<i class="material-symbols-outlined">rate_review</i> Creative Writing',
        Description: '<i class="material-symbols-outlined">rate_review</i> English Writing Specialist • 9 Years Exp. Specialized in Creative Writing and Essays.',
    },
    {
        image: "image/english-15.jpg",
        name: "Mostafa Hany",
        Textbook: '<i class="material-symbols-outlined">quiz</i> English Exercises',
        Description: '<i class="material-symbols-outlined">quiz</i> English Practice Teacher • 11 Years Exp. Specialized in Exercises and Language Skills.',
    },
    {
        image: "image/english-16.jpg",
        name: "Karim Ashraf",
        Textbook: '<i class="material-symbols-outlined">history_edu</i> Literature Review',
        Description: '<i class="material-symbols-outlined">history_edu</i> English Literature Expert • 10 Years Exp. Specialized in Literary Review and Analysis.',
    },
    {
        image: "image/english-17.jpg",
        name: "Salma Adel",
        Textbook: '<i class="material-symbols-outlined">language</i> Language Skills',
        Description: '<i class="material-symbols-outlined">language</i> English Language Teacher • 7 Years Exp. Specialized in Integrated Language Skills.',
    },
    {
        image: "image/english-18.jpg",
        name: "Hassan Mahmoud",
        Textbook: '<i class="material-symbols-outlined">import_contacts</i> English Workbook',
        Description: '<i class="material-symbols-outlined">import_contacts</i> English Study Coach • 14 Years Exp. Specialized in Workbooks and Guided Practice.',
    },
    {
        image: "image/english-19.jpg",
        name: "Hana Tarek",
        Textbook: '<i class="material-symbols-outlined">fact_check</i> Final Exam Review',
        Description: '<i class="material-symbols-outlined">fact_check</i> English Revision Expert • 9 Years Exp. Specialized in Final Exams and Key Questions.',
    },
    {
        image: "image/english-3.jpg",
        name: "Mohamed Samir",
        Textbook: '<i class="material-symbols-outlined">task</i> English Test Practice',
        Description: '<i class="material-symbols-outlined">task</i> English Assessment Teacher • 12 Years Exp. Specialized in Tests and Exam Techniques.',
    },
];
let Maths = [
    {
        image: "image/math-1.jpg",
        name: "Ahmed Mostafa",
        Textbook: '<i class="material-symbols-outlined">calculate</i> Algebra Basics',
        Description: '<i class="material-symbols-outlined">functions</i> Senior Math Teacher • 15 Years Exp. Specialized in Algebra and Equations.',
    },
    {
        image: "image/math-2.jpg",
        name: "saad Adel",
        Textbook: '<i class="material-symbols-outlined">functions</i> Algebra Practice',
        Description: '<i class="material-symbols-outlined">calculate</i> Mathematics Instructor • 12 Years Exp. Specialized in Algebraic Expression,Functions.',
    },
    {
        image: "image/math-3.jpg",
        name: "Omar Hassan",
        Textbook: '<i class="material-symbols-outlined">show_chart</i> Functions and Graphs',
        Description: '<i class="material-symbols-outlined">show_chart</i> Senior Math Instructor • 10 Years Exp. Specialized in Functions and Graph Analysis.',
    },
    {
        image: "image/math-4.jpg",
        name: "Nour Ibrahim",
        Textbook: '<i class="material-symbols-outlined">architecture</i> Geometry Lessons',
        Description: '<i class="material-symbols-outlined">architecture</i> Geometry Teacher • 14 Years Exp. Specialized in Geometric Shapes and Theorems.',
    },
    {
        image: "image/math-5.jpg",
        name: "Youssef Khaled",
        Textbook: '<i class="material-symbols-outlined">calculate</i> Number Systems',
        Description: '<i class="material-symbols-outlined">numbers</i> Mathematics Specialist • 11 Years Exp. Specialized in Number Systems and Operations.',
    },
    {
        image: "image/math-6.jpg",
        name: "sayed Mohamed",
        Textbook: '<i class="material-symbols-outlined">trending_up</i> Calculus Basics',
        Description: '<i class="material-symbols-outlined">trending_up</i> Calculus Instructor • 9 Years Exp. Specialized in Limits and Basic Differentiation.',
    },
    {
        image: "image/math-7.jpg",
        name: "Mahmoud Samir",
        Textbook: '<i class="material-symbols-outlined">functions</i> Equation Solving',
        Description: '<i class="material-symbols-outlined">functions</i> Senior Math Teacher • 16 Years Exp. Specialized in Equations and Problem Solving.',
    },
    {
        image: "image/math-8.jpg",
        name: "Salama Ahmed",
        Textbook: '<i class="material-symbols-outlined">query_stats</i> Statistics Basics',
        Description: '<i class="material-symbols-outlined">query_stats</i> Statistics Teacher • 8 Years Exp. Specialized in Data Analysis and Probability.',
    },
    {
        image: "image/math-9.jpg",
        name: "Karim Adel",
        Textbook: '<i class="material-symbols-outlined">square_foot</i> Trigonometry Lessons',
        Description: '<i class="material-symbols-outlined">square_foot</i> Mathematics Expert • 7 Years Exp. Specialized in Trigonometric  Applications.',
    },
    {
        image: "image/math-10.jpg",
        name: "aboda Hassan",
        Textbook: '<i class="material-symbols-outlined">grid_on</i> Coordinate Geometry',
        Description: '<i class="material-symbols-outlined">grid_on</i> Geometry Instructor • 10 Years Exp. Specialized in Coordinates, Lines and Curves.',
    },
    {
        image: "image/math-11.jpg",
        name: "Amr Mahmoud",
        Textbook: '<i class="material-symbols-outlined">functions</i> Advanced Algebra',
        Description: '<i class="material-symbols-outlined">functions</i> Algebra Specialist • 13 Years Exp. Specialized in Advanced Equations and Inequalities.',
    },
    {
        image: "image/math-12.jpg",
        name: "smair Tarek",
        Textbook: '<i class="material-symbols-outlined">monitoring</i> Mathematical Analysis',
        Description: '<i class="material-symbols-outlined">monitoring</i> Advanced Math Teacher • 12 Years Exp. Specialized in Mathematical Analysis and Functions.',
    },
    {
        image: "image/math-13.jpg",
        name: "Mostafa Ibrahim",
        Textbook: '<i class="material-symbols-outlined">calculate</i> Arithmetic Practice',
        Description: '<i class="material-symbols-outlined">calculate</i> Mathematics Tutor • 8 Years Exp. Specialized in Arithmetic Skills and Numerical Problems.',
    },
    {
        image: "image/math-14.jpg",
        name: "omar Mostafa",
        Textbook: '<i class="material-symbols-outlined">change_history</i> Geometric Proofs',
        Description: '<i class="material-symbols-outlined">change_history</i> Geometry Specialist • 9 Years Exp. Specialized in Geometric Proofs and Theorems.',
    },
    {
        image: "image/math-15.jpg",
        name: "Hassan Ali",
        Textbook: '<i class="material-symbols-outlined">percent</i> Ratios and Proportions',
        Description: '<i class="material-symbols-outlined">percent</i> Mathematics Teacher • 11 Years Exp. Specialized in Ratios, Proportions and Percentages.',
    },
    {
        image: "image/math-16.jpg",
        name: "Malek Samir",
        Textbook: '<i class="material-symbols-outlined">show_chart</i> Graph Interpretation',
        Description: '<i class="material-symbols-outlined">show_chart</i> Math Instructor • 10 Years Exp. Specialized in Graphs, Relations and Functions.',
    },
    {
        image: "image/math-17.jpg",
        name: "Abdelrahman Hany",
        Textbook: '<i class="material-symbols-outlined">functions</i> Differential Calculus',
        Description: '<i class="material-symbols-outlined">functions</i> Calculus Teacher • 7 Years Exp. Specialized in Derivatives and Their Applications.',
    },
    {
        image: "image/math-18.jpg",
        name: " tariq Khaled",
        Textbook: '<i class="material-symbols-outlined">query_stats</i> Probability Practice',
        Description: '<i class="material-symbols-outlined">query_stats</i> Statistics Instructor • 14 Years Exp. Specialized in Probability and Statistical .',
    },
];
let Physics = [
    {
        image: "image/phscail-1.jpg",
        name: "Ahmed Mostafa",
        Textbook: '<i class="material-symbols-outlined">science</i> Mechanics Basics',
        Description: '<i class="material-symbols-outlined">speed</i> Senior Physics Teacher • 15 Years Exp. Specialized in Motion and Newton Laws.',
    },
    {
        image: "image/phscail-2.jpg",
        name: "omer Adel",
        Textbook: '<i class="material-symbols-outlined">electric_bolt</i> Electricity Practice',
        Description: '<i class="material-symbols-outlined">electrical_services</i> Physics Instructor • 12 Years Exp. Specialized in Electric Circuits and Current.',
    },
    {
        image: "image/phscail-3.jpg",
        name: "Omar Hassan",
        Textbook: '<i class="material-symbols-outlined">waves</i> Waves and Sound',
        Description: '<i class="material-symbols-outlined">graphic_eq</i> Senior Physics Instructor • 10 Years Exp. Specialized in Wave Motion and Sound Analysis.',
    },
    {
        image: "image/phscail-4.jpg",
        name: "Nour Ibrahim",
        Textbook: '<i class="material-symbols-outlined">light_mode</i> Optics Lessons',
        Description: '<i class="material-symbols-outlined">visibility</i> Optics Teacher • 14 Years Exp. Specialized in Light Reflection and Refraction.',
    },
    {
        image: "image/phscail-5.jpg",
        name: "Youssef Khaled",
        Textbook: '<i class="material-symbols-outlined">thermostat</i> Thermal Physics',
        Description: '<i class="material-symbols-outlined">device_thermostat</i> Physics Specialist • 11 Years Exp. Specialized in Heat Transfer and Temperature.',
    },
    {
        image: "image/phscail-6.jpg",
        name: "Farida Mohamed",
        Textbook: '<i class="material-symbols-outlined">speed</i> Motion and Velocity',
        Description: '<i class="material-symbols-outlined">timeline</i> Mechanics Instructor • 9 Years Exp. Specialized in Speed, Velocity and Acceleration.',
    },
    {
        image: "image/phscail-7.jpg",
        name: "Mahmoud Samir",
        Textbook: '<i class="material-symbols-outlined">science</i> Force and Energy',
        Description: '<i class="material-symbols-outlined">bolt</i> Senior Physics Teacher • 16 Years Exp. Specialized in Forces, Work and Energy.',
    },
    {
        image: "image/phscail-8.jpg",
        name: "Salama Ahmed",
        Textbook: '<i class="material-symbols-outlined">battery_charging_full</i> Electrical Circuits',
        Description: '<i class="material-symbols-outlined">cable</i> Electricity Teacher • 8 Years Exp. Specialized in Circuit Analysis and Resistance.',
    },
    {
        image: "image/phscail-9.jpg",
        name: "Karim Adel",
        Textbook: '<i class="material-symbols-outlined">battery_charging_full</i> Magnetism Lessons',
        Description: '<i class="material-symbols-outlined">cyclone</i> Physics Expert • 7 Years Exp. Specialized in Magnetic Fields and Applications.',
    },
    {
        image: "image/phscail-10.jpg",
        name: "Jaick Hassan",
        Textbook: '<i class="material-symbols-outlined">visibility</i> Light and Optics',
        Description: '<i class="material-symbols-outlined">flare</i> Optics Instructor • 10 Years Exp. Specialized in Lenses, Mirrors and Images.',
    },
    {
        image: "image/phscail-11.jpg",
        name: "Amr Mahmoud",
        Textbook: '<i class="material-symbols-outlined">science</i> Advanced Mechanics',
        Description: '<i class="material-symbols-outlined">precision_manufacturing</i> Mechanics Specialist • 13 Years Exp. Specialized in Advanced Motion and Dynamics.',
    },
    {
        image: "image/phscail-12.jpg",
        name: "saad Tarek",
        Textbook: '<i class="material-symbols-outlined">waves</i> Physical Wave Analysis',
        Description: '<i class="material-symbols-outlined">graphic_eq</i> Advanced Physics Teacher • 12 Years Exp. Specialized in Wave Properties and Vibrations.',
    },
    {
        image: "image/phscail-13.jpg",
        name: "Mostafa Ibrahim",
        Textbook: '<i class="material-symbols-outlined">speed</i> Measurement and Units',
        Description: '<i class="material-symbols-outlined">straighten</i> Physics Tutor • 8 Years Exp. Specialized in Physical Quantities and Measurements.',
    },
    {
        image: "image/phscail-14.jpg",
        name: "ahmed Mostafa",
        Textbook: '<i class="material-symbols-outlined">light_mode</i> Reflection and Refraction',
        Description: '<i class="material-symbols-outlined">lens</i> Optics Specialist • 9 Years Exp. Specialized in Light Refraction and Optical Instruments.',
    },
    {
        image: "image/phscail-15.jpg",
        name: "Hassan Ali",
        Textbook: '<i class="material-symbols-outlined">electric_bolt</i> Current and Resistance',
        Description: '<i class="material-symbols-outlined">electrical_services</i> Physics Teacher • 11 Years Exp. Specialized in Electric Current, Voltage and Resistance.',
    },
    {
        image: "image/phscail-16.jpg",
        name: "Malek Samir",
        Textbook: '<i class="material-symbols-outlined">monitoring</i> Experimental Physics',
        Description: '<i class="material-symbols-outlined">biotech</i> Physics Instructor • 10 Years Exp. Specialized in Experiments, Measurements and Results.',
    },
    {
        image: "image/phscail-17.jpg",
        name: "Abdelrahman Hany",
        Textbook: '<i class="material-symbols-outlined">rocket_launch</i> Energy and Power',
        Description: '<i class="material-symbols-outlined">bolt</i> Mechanics Teacher • 7 Years Exp. Specialized in Energy, Power and Their Applications.',
    },
    {
        image: "image/phscail-18.jpg",
        name: "Mostafa Khaled",
        Textbook: '<i class="material-symbols-outlined">quiz</i> Physics Exam Practice',
        Description: '<i class="material-symbols-outlined">fact_check</i> Physics Instructor • 14 Years Exp. Specialized in Exam Questions and Problem Solving.',
    },
     {
        image: "image/phscail-19.jpg",
        name: "Agwa Khaled",
        Textbook: '<i class="material-symbols-outlined">quiz</i> Physics Exam Practice',
        Description: '<i class="material-symbols-outlined">fact_check</i> Physics Instructor • 14 Years Exp. Specialized in Exam Questions and Problem Solving.',
    },
];
let Chemistry = [
    {
        image: "image/Chemistry-1.jpg",
        name: "Mohamed Abdelsalam",
        Textbook: '<i class="material-symbols-outlined">science</i> Atomic Structure',
        Description: '<i class="material-symbols-outlined">biotech</i> Senior Chemistry Teacher • 15 Years Exp. Specialized in Atomic Structure and Electron Configurations.',
    },
    {
        image: "image/Chemistry-2.jpg",
        name: "Ahmed Elshazly",
        Textbook: '<i class="material-symbols-outlined">experiment</i> Chemical Reactions',
        Description: '<i class="material-symbols-outlined">science</i> Chemistry Instructor • 12 Years Exp. Specialized in Chemical Equations and Reaction Types.',
    },
    {
        image: "image/Chemistry-3.jpg",
        name: "Mahmoud Elbadry",
        Textbook: '<i class="material-symbols-outlined">science</i> Organic Chemistry',
        Description: '<i class="material-symbols-outlined">biotech</i> Senior Chemistry Instructor • 10 Years Exp. Specialized in Organic Compounds and Hydrocarbons.',
    },
    {
        image: "image/Chemistry-4.jpg",
        name: "Youssef Abdelrahman",
        Textbook: '<i class="material-symbols-outlined">functions</i> Chemical Calculations',
        Description: '<i class="material-symbols-outlined">calculate</i> Chemistry Teacher • 14 Years Exp. Specialized in Mole Calculations and Chemical Stoichiometry.',
    },
    {
        image: "image/Chemistry-5.jpg",
        name: "Omar Fathy",
        Textbook: '<i class="material-symbols-outlined">science</i> Acids and Bases',
        Description: '<i class="material-symbols-outlined">water_drop</i> Chemistry Specialist • 11 Years Exp. Specialized in Acids, Bases and pH Calculations.',
    },
    {
        image: "image/Chemistry-6.jpg",
        name: "Karim Mahmoud",
        Textbook: '<i class="material-symbols-outlined">biotech</i> Chemical Equilibrium',
        Description: '<i class="material-symbols-outlined">balance</i> Chemistry Instructor • 9 Years Exp. Specialized in Equilibrium Constants and Reversible Reactions.',
    },
    {
        image: "image/Chemistry-7.jpg",
        name: "Mostafa Ashraf",
        Textbook: '<i class="material-symbols-outlined">science</i> Electrochemistry',
        Description: '<i class="material-symbols-outlined">electric_bolt</i> Senior Chemistry Teacher • 16 Years Exp. Specialized in Electrolysis and Redox Reactions.',
    },
    {
        image: "image/Chemistry-8.jpg",
        name: "Hassan Gamal",
        Textbook: '<i class="material-symbols-outlined">experiment</i> Chemical Kinetics',
        Description: '<i class="material-symbols-outlined">speed</i> Chemistry Teacher • 8 Years Exp. Specialized in Reaction Rates and Collision Theory.',
    },
    {
        image: "image/Chemistry-9.jpg",
        name: "Amr Hossam",
        Textbook: '<i class="material-symbols-outlined">science</i> Periodic Table',
        Description: '<i class="material-symbols-outlined">grid_on</i> Chemistry Expert • 7 Years Exp. Specialized in Periodic Trends and Element Properties.',
    },
    {
        image: "image/Chemistry-10.jpg",
        name: "Tarek Samir",
        Textbook: '<i class="material-symbols-outlined">biotech</i> Chemical Bonding',
        Description: '<i class="material-symbols-outlined">hub</i> Chemistry Instructor • 10 Years Exp. Specialized in Ionic, Covalent and Metallic Bonds.',
    },
    {
        image: "image/Chemistry-11.jpg",
        name: "Eslam Mohamed",
        Textbook: '<i class="material-symbols-outlined">science</i> Thermochemistry',
        Description: '<i class="material-symbols-outlined">device_thermostat</i> Chemistry Specialist • 13 Years Exp. Specialized in Enthalpy and Heat Changes.',
    },
    {
        image: "image/Chemistry-12.jpg",
        name: "khailed saker",
        Textbook: '<i class="material-symbols-outlined">experiment</i> Qualitative Analysis',
        Description: '<i class="material-symbols-outlined">search</i> Advanced Chemistry Teacher • 12 Years Exp. Specialized in Chemical Tests and Ion Identification.',
    },
    {
        image: "image/Chemistry-13.jpg",
        name: "Ziad Khaled",
        Textbook: '<i class="material-symbols-outlined">science</i> Solutions and Concentration',
        Description: '<i class="material-symbols-outlined">opacity</i> Chemistry Tutor • 8 Years Exp. Specialized in Molarity, Dilution and Solution Preparation.',
    },
    {
        image: "image/Chemistry-14.jpg",
        name: "Bassem Adel",
        Textbook: '<i class="material-symbols-outlined">biotech</i> Hydrocarbons',
        Description: '<i class="material-symbols-outlined">account_tree</i> Organic Chemistry Specialist • 9 Years Exp. Specialized in Alkanes, Alkenes and Alkynes.',
    },
    {
        image: "image/Chemistry-15.jpg",
        name: "Khaled Nabil",
        Textbook: '<i class="material-symbols-outlined">electric_bolt</i> Oxidation and Reduction',
        Description: '<i class="material-symbols-outlined">battery_charging_full</i> Chemistry Teacher • 11 Years Exp. Specialized in Oxidation Numbers and Redox Equations.',
    },

];
if(course_card_contact.length > 0){
function showcart(carts) {
    for (let cart = 0; cart < carts.length; cart++) {

        course_card_contact[cart].style.display = "block";

        let boximage = document.querySelectorAll(".card-image")[cart];
        boximage.src = carts[cart].image;

        let name_teacher = document.querySelectorAll(".ms-name-arabic")[cart];
        name_teacher.innerHTML = carts[cart].name;

        let textbooks = document.querySelectorAll(".Textbook")[cart];
        textbooks.innerHTML = carts[cart].Textbook;

        let descriptions = document.querySelectorAll(".ms-Description-arabic")[cart];
        descriptions.innerHTML = carts[cart].Description;
    }

    for (let e = carts.length; e < course_card_contact.length; e++) {
        course_card_contact[e].style.display = "none";
    }
}
    let category = new URLSearchParams(window.location.search).get("category");
if(category==="English"){
    showcart(English)
    let course_Subject=document.querySelector(".course-Subject")
    course_Subject.innerHTML="English"
    let course_title=document.querySelector(".course-title")
    course_title.innerHTML="First Secondary — English Language Faculty & Comprehensive Units "
let arabic_item=document.querySelector(".Arabic-item")
arabic_item.style.background="rgb(243 242 255 / var(--tw-bg-opacity, 1))";
let English_item=document.querySelector(".English-item")
English_item.style.background="rgb(237 222 234 / var(--tw-bg-opacity, 1)) ";

}
else if(category==="Maths"){
  showcart(Maths)
    let course_Subject=document.querySelector(".course-Subject")
    course_Subject.innerHTML="Mathematics"
    let course_title=document.querySelector(".course-title")
    course_title.innerHTML="First Secondary — Mathematics Faculty & Comprehensive Units "
let arabic_item=document.querySelector(".Arabic-item")
arabic_item.style.background="rgb(243 242 255 / var(--tw-bg-opacity, 1))";
let Mathematics=document.querySelector(".Mathematics-item")
Mathematics.style.background="rgb(237 222 234 / var(--tw-bg-opacity, 1)) ";

}
else if(category==="Physics"){
  showcart(Physics)
     let course_Subject=document.querySelector(".course-Subject")
    course_Subject.innerHTML="physics"
    let course_title=document.querySelector(".course-title")
    course_title.innerHTML="First Secondary —  Physic Faculty & Comprehensive Units "
let arabic_item=document.querySelector(".Arabic-item")
arabic_item.style.background="rgb(243 242 255 / var(--tw-bg-opacity, 1))";
let Physic=document.querySelector(".Physics-item")
Physic.style.background="rgb(237 222 234 / var(--tw-bg-opacity, 1)) ";

}else if(category==="Chemistry"){
  showcart(Chemistry)
     let course_Subject=document.querySelector(".course-Subject")
    course_Subject.innerHTML="Chemistry"
    let course_title=document.querySelector(".course-title")
    course_title.innerHTML="First Secondary —  Chemistry Faculty & Comprehensive Units "
let arabic_item=document.querySelector(".Arabic-item")
arabic_item.style.background="rgb(243 242 255 / var(--tw-bg-opacity, 1))";
let Chemistrys=document.querySelector(".Chemistry-item")
Chemistrys.style.background="rgb(237 222 234 / var(--tw-bg-opacity, 1)) ";

}
else{

}
let params = new URLSearchParams(window.location.search);
let grade = params.get("grade");
let book_fixed = document.querySelector(".book-fixed");

if (book_fixed) {
    if (category === "Arabic") {
        book_fixed.href = `book.html?grade=${grade}&category=Arabic`;
    } 
    else if (category === "English") {
        book_fixed.href = `book.html?grade=${grade}&category=English`;
    }
}


let course_Grade = document.querySelector(".course-Grade");

if (grade === "first") {
    course_Grade.innerHTML = "First Secondary >";
} else if (grade === "second") {
    course_Grade.innerHTML = "Second Secondary >";
} else if (grade === "third") {
    course_Grade.innerHTML = "Third Secondary >";
}

let course_links = document.querySelectorAll(".course-link");

for (let i = 0; i < course_links.length; i++) {
    let url = new URL(course_links[i].href);

    url.searchParams.set("grade", grade);

    course_links[i].href = url.href;
}
}


let book_cards = document.querySelectorAll(".card-book");
let search_book_input = document.querySelector(".input-book-search");

if(book_cards.length > 0 && search_book_input){
    search_book_input.addEventListener("input", function () {
        for (let book = 0; book < book_cards.length; book++) {
            let teacher = book_cards[book].querySelector("h4");
            let teacher_name_book = teacher.innerHTML.trim().toLowerCase();

            if (teacher_name_book.includes(search_book_input.value.trim().toLowerCase())) {
                book_cards[book].style.display = "block";
            } else {
                book_cards[book].style.display = "none";
            }
        }
    });
}
let arabic_sec2 = [
    {
        imageBook: "image/arabic-book-sec-2-1.jpg",
        book_pargraph: "Al-Manar in Arabic Grammar & Morphology (2025 Edition)",
        price_book: "230 EGP",
        des_book: "260 EGP",
    },
    {
        imageBook: "image/arabic-book-sec-2-2.jpg",
        book_pargraph: "A Complete Guide to Arabic Grammar & Morphology (2025 Edition)",
        price_book: "220 EGP",
        des_book: "245 EGP",
    },
    {
        imageBook: "image/arabic-book-sec-2-3.jpg",
        book_pargraph: "Mastering Arabic Grammar & Morphology (2025 Edition)",
        price_book: "225 EGP",
        des_book: "280 EGP",
    },
    {
        imageBook: "image/arabic-book-sec-2-4.jpg",
        book_pargraph: "The Essential Arabic Grammar & Morphology Guide (2025 Edition)",
        price_book: "180 EGP",
        des_book: "230 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-5.jpg",
        book_pargraph: "Advanced Lessons in Arabic Grammar & Morphology (2025 Edition)",
        price_book: "200 EGP",
        des_book: "250 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-6.jpg",
        book_pargraph: "A Complete Study of Arabic Grammar & Morphology (2025 Edition)",
        price_book: "215 EGP",
        des_book: "270 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-7.jpg",
        book_pargraph: "The Ultimate Guide to Arabic Grammar & Morphology (2025 Edition)",
        price_book: "190 EGP",
        des_book: "240 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-8.jpg",
        book_pargraph: "Comprehensive Arabic Grammar & Morphology Lessons (2025 Edition)",
        price_book: "235 EGP",
        des_book: "290 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-9.jpg",
        book_pargraph: "A Practical Guide to Arabic Grammar & Morphology (2025 Edition)",
        price_book: "205 EGP",
        des_book: "255 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-10.jpg",
        book_pargraph: "Detailed Lessons in Arabic Grammar & Morphology (2025 Edition)",
        price_book: "220 EGP",
        des_book: "275 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-11.jpg",
        book_pargraph: "The Complete Arabic Grammar & Morphology Course (2025 Edition)",
        price_book: "185 EGP",
        des_book: "235 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-12.jpg",
        book_pargraph: "A Comprehensive Guide to Arabic Grammar & Morphology (2025 Edition)",
        price_book: "230 EGP",
        des_book: "285 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-13.jpg",
        book_pargraph: "Essential Lessons in Arabic Grammar & Morphology (2025 Edition)",
        price_book: "195 EGP",
        des_book: "250 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-14.jpg",
        book_pargraph: "A Detailed Guide to Arabic Grammar & Morphology (2025 Edition)",
        price_book: "215 EGP",
        des_book: "265 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-15.jpg",
        book_pargraph: "Complete Training in Arabic Grammar & Morphology (2025 Edition)",
        price_book: "240 EGP",
        des_book: "300 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-16.jpg",
        book_pargraph: "A Structured Guide to Arabic Grammar & Morphology (2025 Edition)",
        price_book: "175 EGP",
        des_book: "225 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-17.jpg",
        book_pargraph: "Expert Lessons in Arabic Grammar & Morphology (2025 Edition)",
        price_book: "250 EGP",
        des_book: "310 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-18.jpg",
        book_pargraph: "A Full Review of Arabic Grammar & Morphology (2025 Edition)",
        price_book: "205 EGP",
        des_book: "260 EGP",
    },
    {
        imageBook: "image/arabic-sec-2-19.jpg",
        book_pargraph: "The Complete Reference for Arabic Grammar & Morphology (2025 Edition)",
        price_book: "245 EGP",
        des_book: "305 EGP",
    },
];

let arabic_sec3 = [
    {
        imageBook: "image/arabic-book-sec-3-1.jpg",
        book_pargraph: "Al-Tafawoq in Advanced Arabic Grammar & Literature (2025 Edition)",
        price_book: "280 EGP",
        des_book: "350 EGP",
    },
    {
        imageBook: "image/arabic-book-sec-3-2.jpg",
        book_pargraph: "A Complete Guide to Advanced Arabic Grammar & Rhetoric (2025 Edition)",
        price_book: "260 EGP",
        des_book: "325 EGP",
    },
    {
        imageBook: "image/arabic-book-sec-3-3.jpg",
        book_pargraph: "Mastering Advanced Arabic Grammar & Literary Analysis (2025 Edition)",
        price_book: "295 EGP",
        des_book: "370 EGP",
    },
    {
        imageBook: "image/arabic-book-sec-3-4.jpg",
        book_pargraph: "The Essential Advanced Arabic Grammar & Literature Guide (2025 Edition)",
        price_book: "275 EGP",
        des_book: "340 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-5.jpg",
        book_pargraph: "Advanced Preparation in Arabic Grammar & Literature (2025 Edition)",
        price_book: "310 EGP",
        des_book: "390 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-6.jpg",
        book_pargraph: "A Complete Study of Advanced Arabic Grammar & Rhetoric (2025 Edition)",
        price_book: "285 EGP",
        des_book: "355 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-7.jpg",
        book_pargraph: "The Ultimate Guide to Arabic Grammar & Literary Analysis (2025 Edition)",
        price_book: "250 EGP",
        des_book: "315 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-8.jpg",
        book_pargraph: "Comprehensive Arabic Grammar & Literature Revision Lessons (2025 Edition)",
        price_book: "300 EGP",
        des_book: "375 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-9.jpg",
        book_pargraph: "A Practical Guide to Advanced Arabic Grammar & Literature (2025 Edition)",
        price_book: "270 EGP",
        des_book: "335 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-10.jpg",
        book_pargraph: "Detailed Preparation in Arabic Grammar & Literary Analysis (2025 Edition)",
        price_book: "290 EGP",
        des_book: "360 EGP",
    },
    {
        imageBook: "image/arabic-sec-3.11.jpg",
        book_pargraph: "The Complete Arabic Grammar & Literature Revision Course (2025 Edition)",
        price_book: "320 EGP",
        des_book: "400 EGP",
    },
    {
        imageBook: "image/arabic-sec-3.12.jpg",
        book_pargraph: "A Comprehensive Guide to Arabic Literature & Rhetoric (2025 Edition)",
        price_book: "265 EGP",
        des_book: "330 EGP",
    },
    {
        imageBook: "image/arabic-sec-3.13.jpg",
        book_pargraph: "Essential Lessons in Advanced Arabic Grammar & Literature (2025 Edition)",
        price_book: "305 EGP",
        des_book: "380 EGP",
    },
    {
        imageBook: "image/arabic-sec-3.14.jpg",
        book_pargraph: "A Detailed Guide to Arabic Grammar & Final Exam Preparation (2025 Edition)",
        price_book: "285 EGP",
        des_book: "350 EGP",
    },
    {
        imageBook: "image/arabic-sec-3.15.jpg",
        book_pargraph: "Complete Training in Arabic Grammar & Literary Analysis (2025 Edition)",
        price_book: "315 EGP",
        des_book: "395 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-16.jpg",
        book_pargraph: "A Structured Guide to Advanced Arabic Grammar & Rhetoric (2025 Edition)",
        price_book: "255 EGP",
        des_book: "320 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-17.jpg",
        book_pargraph: "Expert Lessons in Arabic Literature & Grammar Revision (2025 Edition)",
        price_book: "295 EGP",
        des_book: "365 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-18.jpg",
        book_pargraph: "A Full Review of Advanced Arabic Grammar & Literature (2025 Edition)",
        price_book: "275 EGP",
        des_book: "345 EGP",
    },
    {
        imageBook: "image/arabic-sec-3-19.jpg",
        book_pargraph: "The Complete Reference for Arabic Grammar & Exam Preparation (2025 Edition)",
        price_book: "325 EGP",
        des_book: "410 EGP",
    },
];
let card_book = document.querySelectorAll(".card-book");

function showbook(books) {
    for (let book = 0; book < books.length && book < card_book.length; book++) {
        let imageBook = document.querySelectorAll(".image-book")[book];
        imageBook.src = books[book].imageBook;

        let name_teacher_book = document.querySelectorAll(".name-teacher-book")[book];

        if (books[book].name_book !== undefined) {
            name_teacher_book.innerHTML = books[book].name_book;
        }

        let card_book_pargraph = document.querySelectorAll(".card-book-pargraph")[book];
        card_book_pargraph.innerHTML = books[book].book_pargraph;

        let price_book_cart = document.querySelectorAll(".price-book")[book];
        price_book_cart.innerHTML = books[book].price_book;

        let des_book_cart = document.querySelectorAll(".des-book")[book];
        des_book_cart.innerHTML = books[book].des_book;
    }
}

let books_book = new URLSearchParams(window.location.search);

let book_grade = books_book.get("grade");
let book_category = books_book.get("category") || "Arabic";

if (book_grade === "second" && book_category === "Arabic") {
    showbook(arabic_sec2);
}else if(book_grade === "third" && book_category === "Arabic"){
    showbook(arabic_sec3);
}else{

}
