module.exports = [
"[project]/app/data/faculties.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"AQ_IT","faculty_name":"Information Technology and Systems","majors":[{"id":"IT_001","name":"Computer Information Systems","courses":[{"id":"CIS_101","name":"Object Oriented Programming","code":"1901111","description":"Mastering classes, inheritance, and polymorphism using modern C++ or Java."},{"id":"CIS_102","name":"Data Structures","code":"1901231","description":"Analyzing algorithms and organizing data with linked lists, stacks, and trees."},{"id":"CIS_103","name":"Database Management Systems","code":"1902221","description":"Designing relational databases, SQL queries, and normalization techniques."},{"id":"CIS_104","name":"Operating Systems","code":"1901341","description":"Understanding CPU scheduling, memory management, and deadlock prevention."},{"id":"CIS_105","name":"Systems Analysis and Design","code":"1902311","description":"Studying the software development life cycle (SDLC) and modeling system requirements."}]},{"id":"IT_002","name":"Business Information Technology","courses":[{"id":"BIT_001","name":"E-Business Strategy","code":"1903331","description":"Frameworks for digital transformation and online business models."},{"id":"BIT_002","name":"Business Process Management","code":"1903412","description":"Optimizing organizational workflows through automation and analysis."},{"id":"BIT_003","name":"Enterprise Systems (ERP)","code":"1903321","description":"Integrating core business processes using systems like SAP and Oracle."},{"id":"BIT_004","name":"IT Project Management","code":"1902461","description":"Planning and executing IT projects using Agile and Waterfall methodologies."}]}]},{"id":"AQ_LANG","faculty_name":"Languages","majors":[{"id":"LANG_001","name":"English Language and Literature","courses":[{"id":"ENG_101","name":"Introduction to Literature","code":"2201111","description":"Analysis of key literary genres including poetry, drama, and fiction."},{"id":"ENG_102","name":"English Grammar","code":"2201121","description":"Comprehensive study of syntax, sentence structure, and linguistic rules."},{"id":"ENG_103","name":"American Literature","code":"2201361","description":"Exploring major American authors from the colonial period to modern times."},{"id":"ENG_104","name":"Linguistics","code":"2201231","description":"Scientific study of language, including phonetics, morphology, and semantics."}]},{"id":"LANG_002","name":"French Language and Literature","courses":[{"id":"FRN_101","name":"French Grammar I","code":"2202121","description":"Fundamental principles of French grammar and basic sentence construction."},{"id":"FRN_102","name":"French Phonetics","code":"2202231","description":"Focus on the sound system and pronunciation patterns of the French language."},{"id":"FRN_103","name":"Modern French Literature","code":"2202351","description":"Critical reading of modern French literary masterpieces and movements."}]}]},{"id":"AQ_BUS","faculty_name":"Management and Finance","majors":[{"id":"BUS_001","name":"Business Administration","courses":[{"id":"MGT_101","name":"Principles of Management","code":"1601102","description":"Introduction to planning, organizing, leading, and controlling in organizations."},{"id":"MGT_102","name":"Organizational Behavior","code":"1601211","description":"Studying individual and group dynamics within a professional environment."},{"id":"MGT_103","name":"Human Resource Management","code":"1601321","description":"Focus on recruitment, training, and performance management of employees."}]},{"id":"BUS_002","name":"Accounting","courses":[{"id":"ACC_101","name":"Principles of Accounting I","code":"1602101","description":"The accounting cycle, financial statements, and fundamental bookkeeping."},{"id":"ACC_102","name":"Intermediate Accounting","code":"1602211","description":"In-depth study of financial reporting standards and asset valuation."},{"id":"ACC_103","name":"Auditing","code":"1602323","description":"Internal and external audit procedures, ethics, and regulatory compliance."},{"id":"ACC_104","name":"Cost Accounting","code":"1602314","description":"Techniques for cost estimation, budgeting, and managerial decision making."}]},{"id":"BUS_003","name":"Risk Management and Insurance","courses":[{"id":"RSK_101","name":"Principles of Risk Management","code":"1603101","description":"Identifying, assessing, and mitigating financial and operational risks."},{"id":"RSK_102","name":"Life and Health Insurance","code":"1603221","description":"Analyzing insurance products, policy design, and underwriting basics."},{"id":"RSK_103","name":"Property and Liability Insurance","code":"1603311","description":"Study of commercial and personal property risks and legal liabilities."}]}]},{"id":"AQ_TOUR","faculty_name":"Tourism and Hospitality","majors":[{"id":"TOUR_001","name":"Hotel Management","courses":[{"id":"HTL_101","name":"Front Office Operations","code":"1801211","description":"Managing guest services, reservations, and hotel reception workflows."},{"id":"HTL_102","name":"Food and Beverage Service","code":"1801221","description":"Standards for dining room service, menu planning, and catering management."},{"id":"HTL_103","name":"Hospitality Marketing","code":"1801331","description":"Strategic marketing for hotels, resorts, and tourism destinations."}]}]},{"id":"AQ_SCI","faculty_name":"Basic and Marine Sciences","majors":[{"id":"SCI_001","name":"Marine Biology","courses":[{"id":"MAR_101","name":"General Oceanography","code":"0304101","description":"Study of physical, chemical, and geological characteristics of the oceans."},{"id":"MAR_102","name":"Marine Ecology","code":"0304331","description":"Interactions between marine organisms and their coastal environments."},{"id":"MAR_103","name":"Ichthyology (Fish Science)","code":"0304411","description":"Biological study of fish, including physiology, classification, and evolution."}]}]},{"id":"AQ_NURS","faculty_name":"Nursing","majors":[{"id":"NURS_001","name":"Nursing","courses":[{"id":"NUR_101","name":"Fundamentals of Nursing","code":"0732105","description":"Core nursing concepts, health assessment, and basic clinical skills."},{"id":"NUR_102","name":"Adult Health Nursing","code":"0702206","description":"Caring for adult patients with acute and chronic medical-surgical conditions."},{"id":"NUR_103","name":"Pharmacology for Nursing","code":"0503202","description":"Mechanism of drug actions, dosage calculations, and safe administration."}]}]},{"id":"AQ_LAW","faculty_name":"Law","majors":[{"id":"LAW_001","name":"Law","courses":[{"id":"LAW_101","name":"Introduction to Legal Science","code":"1001111","description":"Fundamental legal concepts, sources of law, and judicial systems."},{"id":"LAW_102","name":"Constitutional Law","code":"1002151","description":"Study of the state's supreme law, governance powers, and civil rights."},{"id":"LAW_103","name":"Administrative Law","code":"1032161","description":"Rules governing the actions and operations of executive agencies."},{"id":"LAW_104","name":"Commercial Law","code":"1002221","description":"Legal frameworks for trade, corporate contracts, and business transactions."}]}]}]);}),
"[project]/app/components/MajorsSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MajorsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$faculties$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/data/faculties.json (json)");
"use client";
;
;
;
;
function MajorsSidebar() {
    const [expandedFaculties, setExpandedFaculties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggleFaculty = (facultyId)=>{
        setExpandedFaculties((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(facultyId)) {
                newSet.delete(facultyId);
            } else {
                newSet.add(facultyId);
            }
            return newSet;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed left-0 top-15 w-70 border-r border-border p-6 overflow-y-auto h-full bg-card bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-6",
                children: "Faculties & Majors"
            }, void 0, false, {
                fileName: "[project]/app/components/MajorsSidebar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full opacity-70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/courses",
                    className: "flex items-center w-full h-full px-3 py-2 rounded-lg text-white font-semibold hover:bg-muted transition-colors duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mr-2",
                            children: "📚"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MajorsSidebar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        " All Courses"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MajorsSidebar.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/MajorsSidebar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 bg-gray-200 w-0 border-l"
            }, void 0, false, {
                fileName: "[project]/app/components/MajorsSidebar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$faculties$2e$json__$28$json$29$__["default"].map((faculty)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleFaculty(faculty.id),
                            className: "flex items-center w-full px-3 py-2 rounded-lg font-semibold text-left hover:bg-muted transition-colors duration-200 opacity-70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2 text-xs text-accent",
                                    children: expandedFaculties.has(faculty.id) ? "▼" : "▶"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MajorsSidebar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                faculty.faculty_name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/MajorsSidebar.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        expandedFaculties.has(faculty.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1 ml-6 mt-1 py-1 border-l border-border",
                            children: faculty.majors.map((major)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/courses/major/${major.id}`,
                                        className: "block text-sm text-muted-foreground px-4 py-1.5 hover:text-primary hover:bg-muted rounded-r-lg transition-colors duration-150",
                                        children: major.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MajorsSidebar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 19
                                    }, this)
                                }, major.id, false, {
                                    fileName: "[project]/app/components/MajorsSidebar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/MajorsSidebar.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, faculty.id, true, {
                    fileName: "[project]/app/components/MajorsSidebar.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/MajorsSidebar.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_06558d6f._.js.map