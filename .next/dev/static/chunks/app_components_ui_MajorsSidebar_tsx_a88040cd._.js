(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/ui/MajorsSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MajorsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/data/majors.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
            majors.map((faculty)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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

//# sourceMappingURL=app_components_ui_MajorsSidebar_tsx_a88040cd._.js.map