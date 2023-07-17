//NOTE: Some fields are repeated as this was initially intended to allow different languages
// Right now, the use of different languages isn't implemented, so it is only needed to fill
// the fields called ......EN (fields ......ES and ......CAT can be left as "")

const members = [
    //id, nameEN,nameES, briefEN,briefES,briefCAT, descriptionEN,descriptionES,descriptionCAT, link
    {
        id: 1,
        nameEN: "Anna Tozzi",
        nameES: "Anna Tozzi",
        briefEN: "Universita Degli Studi Della'Aquila",
        briefES: "Universita Degli Studi Della'Aquila",
        briefCAT: "Universita Degli Studi Della'Aquila",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "anna.tozzi@univaq.it"
    },
    {
        id: 2,
        nameEN: "Federica Tomassoni",
        nameES: "Federica Tomassoni",
        briefEN: "Universita Degli Studi Della'Aquila",
        briefES: "Universita Degli Studi Della'Aquila",
        briefCAT: "Universita Degli Studi Della'Aquila",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "federica.tomassoni@guest.univaq.it"
    },
    {
        id: 3,
        nameEN: "Giuseppe Coduto",
        nameES: "Giuseppe Coduto",
        briefEN: "Emergency and Disaster Management Studies",
        briefES: "Emergency and Disaster Management Studies",
        briefCAT: "Emergency and Disaster Management Studies",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "president@edimas.net"
    },
    {
        id: 4,
        nameEN: "Eusebi Calle",
        nameES: "Eusebi Calle",
        briefEN: "Universitat De Girona",
        briefES: "Universitat De Girona",
        briefCAT: "Universitat De Girona",
        descriptionEN: "Dr. Eusebi Calle Ortega has expertise in the design and analysis of availability, robustness, and routing schemes in different types of networks, including water distribution networks.",
        descriptionES: "Dr. Eusebi Calle Ortega tiene experiencia en el diseño y análisis de disponibilidad, robustez y esquemas de enrutamiento en diferentes tipos de redes, incluidas las redes de distribución de agua.",
        descriptionCAT: "Dr. Eusebi Carrer Ortega té experiència en el disseny i l'anàlisi de disponibilitat, robustesa i esquemes d'encaminament en diferents tipus de xarxes, incloses les xarxes de distribució d'aigua.",
        link: "https://www.scopus.com/authid/detail.uri?authorId=7005657673",
        email: "eusebi.calle@udg.edu"
    },
    {
        id: 5,
        nameEN: "Pere Vilà",
        nameES: "Pere Vilà",
        briefEN: "Universitat De Girona",
        briefES: "Universitat De Girona",
        briefCAT: "Universitat De Girona",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "pere.vila@udg.edu"
    },
    {
        id: 6,
        nameEN: "Isabel Rego",
        nameES: "Isabel Rego",
        briefEN: "Universidade Dos Acores",
        briefES: "Universidade Dos Acores",
        briefCAT: "Universidade Dos Acores",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "isabel.mc.rego@uac.pt"
    },
    {
        id: 7,
        nameEN: "George Dafoulas",
        nameES: "George Dafoulas",
        briefEN: "Middlesex University",
        briefES: "Middlesex University",
        briefCAT: "Middlesex University",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "g.dafoulas@mdx.ac.uk"
    },
    {
        id: 8,
        nameEN: "Ariadne Tsiakara",
        nameES: "Ariadne Tsiakara",
        briefEN: "Middlesex University",
        briefES: "Middlesex University",
        briefCAT: "Middlesex University",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "a.tsiakara@mdx.ac.uk"
    },
    {
        id: 9,
        nameEN: "Cristiano Maia",
        nameES: "Cristiano Maia",
        briefEN: "Middlesex University",
        briefES: "Middlesex University",
        briefCAT: "Middlesex University",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "c.cardosomaia@mdx.ac.uk"
    },
    {
        id: 10,
        nameEN: "Hans-Liudger Dienel",
        nameES: "Hans-Liudger Dienel",
        briefEN: "Technische Universitat Berlin",
        briefES: "Technische Universitat Berlin",
        briefCAT: "Technische Universitat Berlin",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "hans-liudger.dienel@tu-berlin.de"
    },
    {
        id: 11,
        nameEN: "Christoph Henseler",
        nameES: "Christoph Henseler",
        briefEN: "Technische Universitat Berlin",
        briefES: "Technische Universitat Berlin",
        briefCAT: "Technische Universitat Berlin",
        descriptionEN: "",
        descriptionES: "",
        descriptionCAT: "",
        link: "",
        email: "christoph.henseler@tu-berlin.de"
    },
]

const partners = [
    //id, name, country, link
    {
        id: 1,
        name: "Universita Degli Studi Della'Aquila",
        country: "Italy",
        link: "https://www.univaq.it/"
    },
    {
        id: 2,
        name: "Emergency and Disaster Management Studies",
        country: "Italy",
        link: "https://www.edimas.net/"
    },
    {
        id: 3,
        name: "Universitat De Girona",
        country: "Spain",
        link: "https://www.udg.edu/ca/"
    },
    {
        id: 4,
        name: "Universidade Dos Acores",
        country: "Portugal",
        link: "https://uac.pt/"
    },
    {
        id: 5,
        name: "Middlesex University",
        country: "United Kingdom",
        link: "https://www.mdx.ac.uk/"
    },
    {
        id: 6,
        name: "Technische Universitat Berlin",
        country: "Germany",
        link: "https://www.tu.berlin/en/"
    }
]

const intellectualOutputs = [
    //NOTE: All used files here must be inside the "files" folder. There must be NO spaces in the filename.
    //      If a file is a folder, its filename ("files" field) must end with '/'. Other files must end with their extension (ex: file.pdf).
    //      zipName doesn't need to end with .zip
    //id, title, items (text), files (filename), zipName
    //EXAMPLE
    /*
    {
        id: 1,
        title: "Text to be displayed",
        items: ["Text", "pdf", "png image", "excel file", "jpg image", "folder"], // This is what the user sees before downloading
        files: ["example.txt", "sample.pdf", "sample.png", "sample.xlsx", "sample.jpg", "folderName/"], // This is the name of the file once downloaded
        zipName: "zipName_1" //This is the name of the zip file that will be created if the Download All button is clicked. .zip extension will be added at the end.
    }
    */
    {
        id: 1,
        title: "ANALYSIS OF EXISTING CURRICULA FOR EMERGENCY MANAGER PROFILE AND IDENTIFICATION OF KNOWLEDGE GAPS AND SKILLS MISMATCH",
        items: ["Results", "Working Materials"],
        files: ["IO1_Results/", "IO1_WorkingMaterials/"],
        zipName: "IntellectualOutput_1"
    },
    {
        id: 2,
        title: "DESIGN OF ECEM AND EPM PROFILES",
        items: ["B-READI_O2KICKOFF_UDG", "BREADI_Temp_V1", "ECEM-EPMCurriculumMappingtemplate"],
        files: ["B-READI_O2KICKOFF_UDG.pptx", "BREADI_Temp_V1.docx", "ECEM-EPMCurriculumMappingtemplate.xlsx"],
        zipName: "IntellectualOutput_2"
    },
    {
        id: 3,
        title: "DEVELOPMENT OF THE NEW MODULES FOR THE RENOVATION/INTRODUCTION OF THE DEGREES/TRACKS",
        items: ["IO3 Final Report"],
        files: ["IO3FinalReport_2revedimas.docx"],
        zipName: "IntellectualOutput_3"
    },
    {
        id: 4,
        title: "TEACHER-TRAINING MODULE",
        items: ["EDIMAS", "MDX", "TUB", "UDA", "UNIVAQ"],
        files: ["EDIMAS/", "MDX/", "TUB/", "UDA/", "UNIVAQ/"],
        zipName: "IntellectualOutput_4"
    },
    {
        id: 5,
        title: "EUROPEAN CERTIFICATION OF THE COMPETENCES OF ECEM AND EPM",
        items: [],
        files: [],
        zipName: "zipName_1"
    },
    {
        id: 6,
        title: "PILOT EXPLOITATION OF INNOVATIVE LEARNING OUTCOME",
        items: [],
        files: [],
        zipName: "zipName_1"
    }
]

const newsWithImages = [
    //id, description
    //You could also add a title here if needed
    //app.js should be modified accordingly if that's the case
    {
        id: 1,
        title: "Title 1",
        description: "News 1"
    },
    {
        id: 2,
        title: "Title 2",
        description: "News 2"
    },
    {
        id: 3,
        title: "Title 3",
        description: "News 3"
    },
    {
        id: 4,
        title: "Title 4",
        description: "News 4"
    },
    {
        id: 5,
        title: "Title 5",
        description: "News 5"
    },
    {
        id: 6,
        title: "Title 6",
        description: "News 6"
    },
]

const conferences = [
    //name, briefEN,briefES,briefCAT, link
]

const news = [
    //name,briefEN,briefES,briefCAT,link
    {
        name: "ICRA newsletter September 2021",
        briefEN: "",
        briefES: "",
        briefCAT: "",
        link: "https://mailchi.mp/a1811b7d3d04/icra-news-setembre-2021?e=b546b9fa1f"
    },
    {
        name: "RETEMA",
        briefEN: "Nature-based solutions for the transition to circular cities",
        briefES: "Soluciones basadas en la naturaleza para la transición a ciudades circulares",
        briefCAT: "Solucions basades en la natura per a la transició a ciutats circulars",
        link: "https://www.retema.es/noticia/soluciones-basadas-en-la-naturaleza-para-la-transicion-hacia-ciudades-circulares-R2cY"
    }
]

const relatedProjects = [
    //id,name,briefEN,briefES,briefCAT,links,boolImage
    //NOTE: Related Projects won't show unless there's at least one project in this list
    //images should be called projectX.png, where X is the id of the project
    /*{
        id: 1,
        name: "dummyName",
        briefEN: "brief in lang 1",
        briefES: "brief in lang 2",
        briefCAT: "brief in lang 3",
        links: ["link1", "link2"],
        boolImage: true,
    },
    {
        id: 2,
        name: "dummyName",
        briefEN: "brief in lang 1",
        briefES: "brief in lang 2",
        briefCAT: "brief in lang 3",
        links: ["link3", "link4"],
        boolImage: true,
    }*/
]

const reports = [
    //name, briefEN,briefES,briefCAT, link
    /*{
        name: "Report Name",
        briefEN: "Brief in English",
        briefES: "",
        briefCAT: "",
        link: "link1",
    },
    {
        name: "Report Name",
        briefEN: "Brief in English",
        briefES: "",
        briefCAT: "",
        link: "link1",
    }*/
]

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { intellectualOutputs };
}
