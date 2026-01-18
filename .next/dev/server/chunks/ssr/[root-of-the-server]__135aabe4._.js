module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/data/majors.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"AQ_IT","faculty_name":"Information Technology and Systems","majors":[{"id":"IT_001","name":"Computer Information Systems"},{"id":"IT_002","name":"Business Information Technology"}]},{"id":"AQ_LANG","faculty_name":"Languages","majors":[{"id":"LANG_001","name":"English Language and Literature"},{"id":"LANG_002","name":"French Language and Literature"}]},{"id":"AQ_BUS","faculty_name":"Management and Finance","majors":[{"id":"BUS_001","name":"Business Administration"},{"id":"BUS_002","name":"Accounting"},{"id":"BUS_003","name":"Risk Management and Insurance"}]},{"id":"AQ_TOUR","faculty_name":"Tourism and Hospitality","majors":[{"id":"TOUR_001","name":"Hotel Management"},{"id":"TOUR_002","name":"Travel and Tourism Management"}]},{"id":"AQ_SCI","faculty_name":"Basic and Marine Sciences","majors":[{"id":"SCI_001","name":"Marine Biology"},{"id":"SCI_002","name":"Coastal Environment"}]},{"id":"AQ_NURS","faculty_name":"Nursing","majors":[{"id":"NURS_001","name":"Nursing"}]},{"id":"AQ_LAW","faculty_name":"Law","majors":[{"id":"LAW_001","name":"Law"}]}]);}),
"[project]/components/ui/MajorsSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MajorsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$majors$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/data/majors.json (json)");
"use client";
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
        className: "fixed left-0 top-0 w-70 border-r border-gray-200 p-6 overflow-y-auto bg-white h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-6 text-gray-900",
                children: "Faculties & Majors"
            }, void 0, false, {
                fileName: "[project]/components/ui/MajorsSidebar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$majors$2e$json__$28$json$29$__["default"].map((faculty)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleFaculty(faculty.id),
                            className: "flex items-center w-full px-3 py-2 rounded-lg font-semibold bg-green-200 text-gray-900 hover:bg-green-100 transition-colors duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2 text-sm text-orange-600",
                                    children: expandedFaculties.has(faculty.id) ? "▼" : "▶"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/MajorsSidebar.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                faculty.faculty_name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/MajorsSidebar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        expandedFaculties.has(faculty.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1 ml-6 mt-1 py-1",
                            children: faculty.majors.map((major)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-sm text-gray-800 cursor-pointer px-3 py-1.5 rounded hover:bg-green-100 hover:text-green-900 transition-colors duration-150",
                                    children: major.name
                                }, major.id, false, {
                                    fileName: "[project]/components/ui/MajorsSidebar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/MajorsSidebar.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    ]
                }, faculty.id, true, {
                    fileName: "[project]/components/ui/MajorsSidebar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/MajorsSidebar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__135aabe4._.js.map