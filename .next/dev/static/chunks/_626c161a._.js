(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/data/faculties.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"AQ_IT","faculty_name":"Information Technology and Systems","majors":[{"id":"IT_001","name":"Computer Information Systems","courses":[{"id":"CIS_101","name":"Object Oriented Programming","code":"1901111","description":"Mastering classes, inheritance, and polymorphism using modern C++ or Java."},{"id":"CIS_102","name":"Data Structures","code":"1901231","description":"Analyzing algorithms and organizing data with linked lists, stacks, and trees."},{"id":"CIS_103","name":"Database Management Systems","code":"1902221","description":"Designing relational databases, SQL queries, and normalization techniques."},{"id":"CIS_104","name":"Operating Systems","code":"1901341","description":"Understanding CPU scheduling, memory management, and deadlock prevention."},{"id":"CIS_105","name":"Systems Analysis and Design","code":"1902311","description":"Studying the software development life cycle (SDLC) and modeling system requirements."}]},{"id":"IT_002","name":"Business Information Technology","courses":[{"id":"BIT_001","name":"E-Business Strategy","code":"1903331","description":"Frameworks for digital transformation and online business models."},{"id":"BIT_002","name":"Business Process Management","code":"1903412","description":"Optimizing organizational workflows through automation and analysis."},{"id":"BIT_003","name":"Enterprise Systems (ERP)","code":"1903321","description":"Integrating core business processes using systems like SAP and Oracle."},{"id":"BIT_004","name":"IT Project Management","code":"1902461","description":"Planning and executing IT projects using Agile and Waterfall methodologies."}]}]},{"id":"AQ_LANG","faculty_name":"Languages","majors":[{"id":"LANG_001","name":"English Language and Literature","courses":[{"id":"ENG_101","name":"Introduction to Literature","code":"2201111","description":"Analysis of key literary genres including poetry, drama, and fiction."},{"id":"ENG_102","name":"English Grammar","code":"2201121","description":"Comprehensive study of syntax, sentence structure, and linguistic rules."},{"id":"ENG_103","name":"American Literature","code":"2201361","description":"Exploring major American authors from the colonial period to modern times."},{"id":"ENG_104","name":"Linguistics","code":"2201231","description":"Scientific study of language, including phonetics, morphology, and semantics."}]},{"id":"LANG_002","name":"French Language and Literature","courses":[{"id":"FRN_101","name":"French Grammar I","code":"2202121","description":"Fundamental principles of French grammar and basic sentence construction."},{"id":"FRN_102","name":"French Phonetics","code":"2202231","description":"Focus on the sound system and pronunciation patterns of the French language."},{"id":"FRN_103","name":"Modern French Literature","code":"2202351","description":"Critical reading of modern French literary masterpieces and movements."}]}]},{"id":"AQ_BUS","faculty_name":"Management and Finance","majors":[{"id":"BUS_001","name":"Business Administration","courses":[{"id":"MGT_101","name":"Principles of Management","code":"1601102","description":"Introduction to planning, organizing, leading, and controlling in organizations."},{"id":"MGT_102","name":"Organizational Behavior","code":"1601211","description":"Studying individual and group dynamics within a professional environment."},{"id":"MGT_103","name":"Human Resource Management","code":"1601321","description":"Focus on recruitment, training, and performance management of employees."}]},{"id":"BUS_002","name":"Accounting","courses":[{"id":"ACC_101","name":"Principles of Accounting I","code":"1602101","description":"The accounting cycle, financial statements, and fundamental bookkeeping."},{"id":"ACC_102","name":"Intermediate Accounting","code":"1602211","description":"In-depth study of financial reporting standards and asset valuation."},{"id":"ACC_103","name":"Auditing","code":"1602323","description":"Internal and external audit procedures, ethics, and regulatory compliance."},{"id":"ACC_104","name":"Cost Accounting","code":"1602314","description":"Techniques for cost estimation, budgeting, and managerial decision making."}]},{"id":"BUS_003","name":"Risk Management and Insurance","courses":[{"id":"RSK_101","name":"Principles of Risk Management","code":"1603101","description":"Identifying, assessing, and mitigating financial and operational risks."},{"id":"RSK_102","name":"Life and Health Insurance","code":"1603221","description":"Analyzing insurance products, policy design, and underwriting basics."},{"id":"RSK_103","name":"Property and Liability Insurance","code":"1603311","description":"Study of commercial and personal property risks and legal liabilities."}]}]},{"id":"AQ_TOUR","faculty_name":"Tourism and Hospitality","majors":[{"id":"TOUR_001","name":"Hotel Management","courses":[{"id":"HTL_101","name":"Front Office Operations","code":"1801211","description":"Managing guest services, reservations, and hotel reception workflows."},{"id":"HTL_102","name":"Food and Beverage Service","code":"1801221","description":"Standards for dining room service, menu planning, and catering management."},{"id":"HTL_103","name":"Hospitality Marketing","code":"1801331","description":"Strategic marketing for hotels, resorts, and tourism destinations."}]}]},{"id":"AQ_SCI","faculty_name":"Basic and Marine Sciences","majors":[{"id":"SCI_001","name":"Marine Biology","courses":[{"id":"MAR_101","name":"General Oceanography","code":"0304101","description":"Study of physical, chemical, and geological characteristics of the oceans."},{"id":"MAR_102","name":"Marine Ecology","code":"0304331","description":"Interactions between marine organisms and their coastal environments."},{"id":"MAR_103","name":"Ichthyology (Fish Science)","code":"0304411","description":"Biological study of fish, including physiology, classification, and evolution."}]}]},{"id":"AQ_NURS","faculty_name":"Nursing","majors":[{"id":"NURS_001","name":"Nursing","courses":[{"id":"NUR_101","name":"Fundamentals of Nursing","code":"0732105","description":"Core nursing concepts, health assessment, and basic clinical skills."},{"id":"NUR_102","name":"Adult Health Nursing","code":"0702206","description":"Caring for adult patients with acute and chronic medical-surgical conditions."},{"id":"NUR_103","name":"Pharmacology for Nursing","code":"0503202","description":"Mechanism of drug actions, dosage calculations, and safe administration."}]}]},{"id":"AQ_LAW","faculty_name":"Law","majors":[{"id":"LAW_001","name":"Law","courses":[{"id":"LAW_101","name":"Introduction to Legal Science","code":"1001111","description":"Fundamental legal concepts, sources of law, and judicial systems."},{"id":"LAW_102","name":"Constitutional Law","code":"1002151","description":"Study of the state's supreme law, governance powers, and civil rights."},{"id":"LAW_103","name":"Administrative Law","code":"1032161","description":"Rules governing the actions and operations of executive agencies."},{"id":"LAW_104","name":"Commercial Law","code":"1002221","description":"Legal frameworks for trade, corporate contracts, and business transactions."}]}]}]);}),
"[project]/app/components/MajorsSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MajorsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$faculties$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/data/faculties.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
        className: "fixed left-0 top-15 w-70 border-r border-border p-6 overflow-y-auto h-full bg-card bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-6",
                children: "Faculties & Majors"
            }, void 0, false, {
                fileName: "[project]/app/components/MajorsSidebar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full opacity-70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/courses",
                    className: "flex items-center w-full h-full px-3 py-2 rounded-lg text-white font-semibold hover:bg-muted transition-colors duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 bg-gray-200 w-0 border-l"
            }, void 0, false, {
                fileName: "[project]/app/components/MajorsSidebar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$faculties$2e$json__$28$json$29$__["default"].map((faculty)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleFaculty(faculty.id),
                            className: "flex items-center w-full px-3 py-2 rounded-lg font-semibold text-left hover:bg-muted transition-colors duration-200 opacity-70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        expandedFaculties.has(faculty.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1 ml-6 mt-1 py-1 border-l border-border",
                            children: faculty.majors.map((major)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(MajorsSidebar, "AyHYypiNOTPGNxpzbpayU3pOYu8=");
_c = MajorsSidebar;
var _c;
__turbopack_context__.k.register(_c, "MajorsSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_626c161a._.js.map