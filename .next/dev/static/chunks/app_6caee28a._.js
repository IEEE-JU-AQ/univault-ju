(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/data/majors.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"AQ_IT","faculty_name":"Information Technology and Systems","majors":[{"id":"IT_001","name":"Computer Information Systems","courses":[{"id":"CIS_101","name":"Object Oriented Programming","code":"1901111"},{"id":"CIS_102","name":"Data Structures","code":"1901231"},{"id":"CIS_103","name":"Database Management Systems","code":"1902221"},{"id":"CIS_104","name":"Operating Systems","code":"1901341"},{"id":"CIS_105","name":"Systems Analysis and Design","code":"1902311"}]},{"id":"IT_002","name":"Business Information Technology","courses":[{"id":"BIT_001","name":"E-Business Strategy","code":"1903331"},{"id":"BIT_002","name":"Business Process Management","code":"1903412"},{"id":"BIT_003","name":"Enterprise Systems (ERP)","code":"1903321"},{"id":"BIT_004","name":"IT Project Management","code":"1902461"}]}]},{"id":"AQ_LANG","faculty_name":"Languages","majors":[{"id":"LANG_001","name":"English Language and Literature","courses":[{"id":"ENG_101","name":"Introduction to Literature","code":"2201111"},{"id":"ENG_102","name":"English Grammar","code":"2201121"},{"id":"ENG_103","name":"American Literature","code":"2201361"},{"id":"ENG_104","name":"Linguistics","code":"2201231"}]},{"id":"LANG_002","name":"French Language and Literature","courses":[{"id":"FRN_101","name":"French Grammar I","code":"2202121"},{"id":"FRN_102","name":"French Phonetics","code":"2202231"},{"id":"FRN_103","name":"Modern French Literature","code":"2202351"}]}]},{"id":"AQ_BUS","faculty_name":"Management and Finance","majors":[{"id":"BUS_001","name":"Business Administration","courses":[{"id":"MGT_101","name":"Principles of Management","code":"1601102"},{"id":"MGT_102","name":"Organizational Behavior","code":"1601211"},{"id":"MGT_103","name":"Human Resource Management","code":"1601321"}]},{"id":"BUS_002","name":"Accounting","courses":[{"id":"ACC_101","name":"Principles of Accounting I","code":"1602101"},{"id":"ACC_102","name":"Intermediate Accounting","code":"1602211"},{"id":"ACC_103","name":"Auditing","code":"1602323"},{"id":"ACC_104","name":"Cost Accounting","code":"1602314"}]},{"id":"BUS_003","name":"Risk Management and Insurance","courses":[{"id":"RSK_101","name":"Principles of Risk Management","code":"1603101"},{"id":"RSK_102","name":"Life and Health Insurance","code":"1603221"},{"id":"RSK_103","name":"Property and Liability Insurance","code":"1603311"}]}]},{"id":"AQ_TOUR","faculty_name":"Tourism and Hospitality","majors":[{"id":"TOUR_001","name":"Hotel Management","courses":[{"id":"HTL_101","name":"Front Office Operations","code":"1801211"},{"id":"HTL_102","name":"Food and Beverage Service","code":"1801221"},{"id":"HTL_103","name":"Hospitality Marketing","code":"1801331"}]}]},{"id":"AQ_SCI","faculty_name":"Basic and Marine Sciences","majors":[{"id":"SCI_001","name":"Marine Biology","courses":[{"id":"MAR_101","name":"General Oceanography","code":"0304101"},{"id":"MAR_102","name":"Marine Ecology","code":"0304331"},{"id":"MAR_103","name":"Ichthyology (Fish Science)","code":"0304411"}]}]},{"id":"AQ_NURS","faculty_name":"Nursing","majors":[{"id":"NURS_001","name":"Nursing","courses":[{"id":"NUR_101","name":"Fundamentals of Nursing","code":"0732105"},{"id":"NUR_102","name":"Adult Health Nursing","code":"0702206"},{"id":"NUR_103","name":"Pharmacology for Nursing","code":"0503202"}]}]},{"id":"AQ_LAW","faculty_name":"Law","majors":[{"id":"LAW_001","name":"Law","courses":[{"id":"LAW_101","name":"Introduction to Legal Science","code":"1001111"},{"id":"LAW_102","name":"Constitutional Law","code":"1002151"},{"id":"LAW_103","name":"Administrative Law","code":"1032161"},{"id":"LAW_104","name":"Commercial Law","code":"1002221"}]}]}]);}),
"[project]/app/components/ui/MajorsSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MajorsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$majors$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/data/majors.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MajorsSidebar() {
    _s();
    const [expandedFaculties, setExpandedFaculties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed left-0 top-0 w-70 border-r border-gray-200 p-6 overflow-y-auto bg-white h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-6 text-gray-900",
                children: "Faculties & Majors"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/MajorsSidebar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$majors$2e$json__$28$json$29$__["default"].map((faculty)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleFaculty(faculty.id),
                            className: "flex items-center w-full px-3 py-2 rounded-lg font-semibold bg-green-200 text-gray-900 hover:bg-green-100 transition-colors duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2 text-sm text-orange-600",
                                    children: expandedFaculties.has(faculty.id) ? "▼" : "▶"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ui/MajorsSidebar.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                faculty.faculty_name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ui/MajorsSidebar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        expandedFaculties.has(faculty.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1 ml-6 mt-1 py-1",
                            children: faculty.majors.map((major)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-sm text-gray-800 cursor-pointer px-3 py-1.5 rounded hover:bg-green-100 hover:text-green-900 transition-colors duration-150",
                                    children: major.name
                                }, major.id, false, {
                                    fileName: "[project]/app/components/ui/MajorsSidebar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/ui/MajorsSidebar.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    ]
                }, faculty.id, true, {
                    fileName: "[project]/app/components/ui/MajorsSidebar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/MajorsSidebar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(MajorsSidebar, "AyHYypiNOTPGNxpzbpayU3pOYu8=");
_c = MajorsSidebar;
var _c;
__turbopack_context__.k.register(_c, "MajorsSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_6caee28a._.js.map