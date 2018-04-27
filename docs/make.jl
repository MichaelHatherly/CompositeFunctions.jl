using Documenter, MergedMethods

makedocs(
    sitename = "MergedMethods.jl",
    modules = [MergedMethods],
    format = :html,
    clean = false,
    pages = Any["Home" => "index.md"],
)

deploydocs(
    julia = "nightly",
    target = "build",
    deps = nothing,
    make = nothing,
    repo = "github.com/MichaelHatherly/MergedMethods.jl.git",
)
