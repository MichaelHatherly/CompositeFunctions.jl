var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#MergedMethods-1",
    "page": "Home",
    "title": "MergedMethods",
    "category": "section",
    "text": "Merge methods from different modules."
},

{
    "location": "index.html#Contents-1",
    "page": "Home",
    "title": "Contents",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "This package is registered in METADATA.jl and so can be installed using Pkg.addPkg.add(\"MergedMethods\")"
},

{
    "location": "index.html#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#MergedMethods",
    "page": "Home",
    "title": "MergedMethods",
    "category": "Module",
    "text": "Merge functions from different modules into a single function.\n\nThis module provides two exported macros that can be used to merge different functions.\n\n@merge\n@kwmerge\n\n\n\n"
},

{
    "location": "index.html#MergedMethods.@merge",
    "page": "Home",
    "title": "MergedMethods.@merge",
    "category": "Macro",
    "text": "Merge functions from different modules.\n\nSignature\n\n@merge(func, modules...)\n\nExamples\n\nmodule A\n\ntype T end\n\nf(::T) = T\n\nend\n\nmodule B\n\ntype T end\n\nf(::T) = T\n\nend\n\n@merge f A B\n\nf(A.T()) == A.T\nf(B.T()) == B.T\n\nIf several modules provide methods suitable for the specified arguments then the first listed, in the above example it would be A, is selected.\n\nGenerated Code\n\n@merge uses @generated to build specialised code for each tuple of arguments passed to the merged function. The resulting code will typically have little to no overhead due to inlining of the dispatch function.\n\nmodule A\n\nf(x::Int, y::Float64) = x + 2y\n\nend\n\nmodule B\n\nf(x::Float64, y::Int) = x - 3y\n\nend\n\n@merge f A B\n\ntest(x, y) = f(x, y) + f(y, x)\n@code_llvm test(1, 1.0)\n\ndefine double @julia_test_24571(i64, double) {\ntop:\n  %2 = call double @\"julia_*.1245\"(i64 2, double %1)\n  %3 = call double @\"julia_+_24572\"(i64 %0, double %2)\n  %4 = mul i64 %0, 3\n  %5 = call double @julia_-.1288(double %1, i64 %4)\n  %6 = fadd double %3, %5\n  ret double %6\n}\n\nSee also: @kwmerge.\n\n\n\n"
},

{
    "location": "index.html#MergedMethods.@kwmerge",
    "page": "Home",
    "title": "MergedMethods.@kwmerge",
    "category": "Macro",
    "text": "Variant of @merge with support for passing keyword arguments.\n\nSignature\n\n@kwmerge(func, modules...)\n\nExamples\n\n@kwmerge f A B\nf(1, a = 2, b =  3)\n\nNote:\n\nThis macro should only be used when keywords are actually needed since the generated code will probably not be as efficient as that of @merge.\n\nSee also: @merge.\n\n\n\n"
},

{
    "location": "index.html#Public-Interface-1",
    "page": "Home",
    "title": "Public Interface",
    "category": "section",
    "text": "MergedMethods\n@merge\n@kwmerge"
},

]}
