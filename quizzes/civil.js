const quizData = {

semester1:{

  "Applied Mathematics - I": {

    "Special Matrices": [

        { question: "A square matrix A is Hermitian if:", options: ["Aᵀ = A", "Aᴴ = A", "A⁻¹ = A", "A² = A"], answer: 1, explanation: "A Hermitian matrix satisfies Aᴴ = A, where Aᴴ is the conjugate transpose of A." },

        { question: "A square matrix A is Skew-Hermitian if:", options: ["Aᴴ = A", "Aᴴ = -A", "Aᵀ = A", "A⁻¹ = A"], answer: 1, explanation: "A Skew-Hermitian matrix satisfies Aᴴ = -A." },

        { question: "The diagonal elements of a Hermitian matrix are always:", options: ["Purely imaginary", "Real", "Zero", "Complex but non-real"], answer: 1, explanation: "For a Hermitian matrix, each diagonal element equals its own complex conjugate, so it must be real." },

        { question: "The diagonal elements of a Skew-Hermitian matrix are always:", options: ["Real", "Purely imaginary or zero", "Always positive", "Always equal to 1"], answer: 1, explanation: "For a Skew-Hermitian matrix, diagonal elements satisfy a = -conjugate(a), so they are purely imaginary or zero." },

        { question: "A matrix A is unitary if:", options: ["AᵀA = I", "AᴴA = I", "A² = I", "A = Aᴴ"], answer: 1, explanation: "A unitary matrix satisfies AᴴA = AAᴴ = I." },

        { question: "For a unitary matrix A, its inverse is:", options: ["Aᵀ", "Aᴴ", "-A", "A²"], answer: 1, explanation: "For a unitary matrix, A⁻¹ = Aᴴ." },

        { question: "A real square matrix A is orthogonal if:", options: ["AᴴA = I", "AᵀA = I", "A = Aᵀ", "A² = A"], answer: 1, explanation: "An orthogonal matrix satisfies AᵀA = AAᵀ = I." },

        { question: "For an orthogonal matrix A, its inverse is:", options: ["A", "-A", "Aᵀ", "AᴴA"], answer: 2, explanation: "For an orthogonal matrix, A⁻¹ = Aᵀ." },

        { question: "The determinant of an orthogonal matrix is:", options: ["Always 0", "Always 1", "Either 1 or -1", "Always greater than 1"], answer: 2, explanation: "Since AᵀA = I, taking determinants gives (det A)² = 1, so det A = ±1." }

        ],

    "Rank and System of Equations": [

        { question: "The rank of a matrix is defined as:", options: ["Number of rows", "Number of columns", "Maximum number of linearly independent rows or columns", "Sum of all matrix elements"], answer: 2, explanation: "The rank is the maximum number of linearly independent rows or columns of a matrix." },

        { question: "In row echelon form, the first non-zero element of a non-zero row is called:", options: ["Eigenvalue", "Pivot", "Determinant", "Trace"], answer: 1, explanation: "The first non-zero entry in a row of echelon form is called a pivot or leading entry." },

        { question: "The rank of a matrix in echelon form is equal to:", options: ["Number of columns", "Number of rows", "Number of non-zero rows", "Number of zero rows"], answer: 2, explanation: "The number of non-zero rows in row echelon form gives the rank of the matrix." },

        { question: "A system of linear equations is consistent if:", options: ["It has at least one solution", "It has no solution", "It has only zero coefficients", "Its determinant is always zero"], answer: 0, explanation: "A consistent system has at least one solution." },

        { question: "A system AX = B is consistent when:", options: ["rank(A) = rank([A|B])", "rank(A) > rank([A|B])", "rank(A) < rank([A|B])", "rank(A) = 0 only"], answer: 0, explanation: "By the Rouché–Capelli theorem, the system is consistent if rank(A) equals rank([A|B])." },

        { question: "If rank(A) = rank([A|B]) = n, where n is the number of unknowns, the system has:", options: ["No solution", "A unique solution", "Infinitely many solutions", "Only trivial solution"], answer: 1, explanation: "When the common rank equals the number of unknowns, the system has a unique solution." },

        { question: "If rank(A) = rank([A|B]) < n, the system has:", options: ["No solution", "A unique solution", "Infinitely many solutions", "Exactly two solutions"], answer: 2, explanation: "When the system is consistent but rank is less than the number of unknowns, one or more free variables exist, giving infinitely many solutions." },

        { question: "If rank(A) ≠ rank([A|B]), the system is:", options: ["Consistent with unique solution", "Consistent with infinite solutions", "Inconsistent", "Homogeneous"], answer: 2, explanation: "If the ranks are unequal, the augmented system contains contradictory equations, so it has no solution." },

        { question: "The main aim of Gauss elimination method is to convert a system into:", options: ["Diagonal form directly", "Upper triangular form", "Identity matrix immediately", "Skew-symmetric form"], answer: 1, explanation: "Gauss elimination uses elementary row operations to reduce the coefficient matrix to upper triangular form." },

        { question: "Gauss-Jordan method reduces a matrix completely to:", options: ["Upper triangular form only", "Lower triangular form", "Reduced row echelon form", "Diagonal form only"], answer: 2, explanation: "Gauss-Jordan elimination continues row operations until the matrix reaches reduced row echelon form." }

        ],

    "Eigenvalues and Eigenvectors": [

        { question: "For a square matrix A, λ is an eigenvalue if:", options: ["A + λI = 0", "|A + λI| = 0", "|A - λI| = 0", "Aλ = I"], answer: 2, explanation: "Eigenvalues are obtained from the characteristic equation det(A - λI) = 0." },

        { question: "The equation det(A - λI) = 0 is called:", options: ["Minimal equation", "Characteristic equation", "Eigenvector equation", "Rank equation"], answer: 1, explanation: "det(A - λI) = 0 is the characteristic equation of matrix A." },

        { question: "A non-zero vector X corresponding to eigenvalue λ satisfies:", options: ["AX = X", "AX = λX", "A + X = λ", "AX = 0 always"], answer: 1, explanation: "An eigenvector X corresponding to eigenvalue λ satisfies AX = λX." },

        { question: "The sum of eigenvalues of a square matrix is equal to its:", options: ["Rank", "Determinant", "Trace", "Norm"], answer: 2, explanation: "The sum of eigenvalues, counted with multiplicity, equals the trace of the matrix." },

        { question: "The product of eigenvalues of a matrix is equal to its:", options: ["Trace", "Rank", "Determinant", "Order"], answer: 2, explanation: "The product of all eigenvalues, counted with multiplicity, equals the determinant of the matrix." },

        { question: "If λ is an eigenvalue of A, then λⁿ is an eigenvalue of:", options: ["nA", "Aⁿ", "A⁻¹ only", "Aᵀ only"], answer: 1, explanation: "If AX = λX, repeated multiplication gives AⁿX = λⁿX, so λⁿ is an eigenvalue of Aⁿ." },

        { question: "If λ is a non-zero eigenvalue of A, then 1/λ is an eigenvalue of:", options: ["Aᵀ", "A⁻¹", "A²", "A + I"], answer: 1, explanation: "If A is invertible and λ is an eigenvalue of A, then 1/λ is an eigenvalue of A⁻¹." },

        { question: "Eigenvectors corresponding to distinct eigenvalues of a Hermitian matrix are:", options: ["Always equal", "Linearly dependent", "Orthogonal", "Always zero"], answer: 2, explanation: "A key property of Hermitian matrices is that eigenvectors corresponding to distinct eigenvalues are orthogonal." },

        { question: "The eigenvalues of a Hermitian matrix are always:", options: ["Real", "Purely imaginary", "Always zero", "Always negative"], answer: 0, explanation: "All eigenvalues of a Hermitian matrix are real." },

        { question: "The eigenvalues of a Skew-Hermitian matrix are:", options: ["Always positive real", "Purely imaginary or zero", "Always equal to 1", "Always irrational"], answer: 1, explanation: "Eigenvalues of a Skew-Hermitian matrix are purely imaginary or zero." },

        { question: "The eigenvalues of a unitary matrix have modulus:", options: ["0", "1", "Greater than 1", "Always equal to -1"], answer: 1, explanation: "For a unitary matrix, every eigenvalue λ satisfies |λ| = 1." },

        { question: "If A is a singular matrix, then one of its eigenvalues is:", options: ["1", "-1", "0", "i"], answer: 2, explanation: "A singular matrix has determinant zero, and since the determinant equals the product of eigenvalues, at least one eigenvalue must be zero." }

        ],

    "Cayley-Hamilton Theorem": [

        { question: "The Cayley-Hamilton theorem states that every square matrix:", options: ["Is invertible", "Satisfies its own characteristic equation", "Has only real eigenvalues", "Is diagonalizable"], answer: 1, explanation: "The Cayley-Hamilton theorem states that every square matrix satisfies its own characteristic equation." },

        { question: "For a matrix A, the characteristic equation is obtained from:", options: ["det(A + λI) = 0", "det(A - λI) = 0", "A² = I", "A + Aᵀ = I"], answer: 1, explanation: "The characteristic equation of A is obtained by solving det(A - λI) = 0." },

        { question: "If the characteristic equation of A is λ² - 5λ + 6 = 0, then by Cayley-Hamilton theorem:", options: ["A² - 5A + 6I = 0", "A² + 5A + 6I = 0", "A² - 5I + 6A = 0", "A - 5A² + 6I = 0"], answer: 0, explanation: "Replace λ by A and the constant term by the same multiple of identity matrix I: A² - 5A + 6I = 0." },

        { question: "If A satisfies A² - 3A + 2I = 0, then A² is equal to:", options: ["3A - 2I", "-3A + 2I", "2A - 3I", "3I - 2A"], answer: 0, explanation: "Rearranging A² - 3A + 2I = 0 gives A² = 3A - 2I." },

        { question: "One important application of Cayley-Hamilton theorem is finding:", options: ["Only rank of a matrix", "Higher powers of a matrix", "Only trace of a matrix", "Only transpose of a matrix"], answer: 1, explanation: "The theorem allows higher powers such as A³, A⁴ and beyond to be reduced using the characteristic equation." },

        { question: "Cayley-Hamilton theorem is applicable to:", options: ["Only diagonal matrices", "Only singular matrices", "Every square matrix", "Only symmetric matrices"], answer: 2, explanation: "The Cayley-Hamilton theorem applies to every square matrix." },

        { question: "If a 2x2 matrix has characteristic equation λ² + aλ + b = 0, then the matrix satisfies:", options: ["A² + aA + bI = 0", "A² + aI + bA = 0", "A + aA² + bI = 0", "A² = I"], answer: 0, explanation: "By Cayley-Hamilton theorem, λ is replaced by A and the scalar constant term b becomes bI." },

        { question: "In the characteristic equation of a matrix, the constant term is related to the:", options: ["Rank only", "Determinant of the matrix", "Number of rows only", "Trace only"], answer: 1, explanation: "The constant term of the characteristic polynomial is related to the determinant, with sign depending on the order of the matrix." }

        ],

    "Partial Derivatives and Total Differentials": [

        { question: "If z = f(x, y), the partial derivative of z with respect to x is obtained by:", options: ["Keeping x constant", "Keeping y constant", "Differentiating y with respect to x", "Making both x and y constant"], answer: 1, explanation: "While finding ∂z/∂x, y is treated as a constant." },

        { question: "For z = x²y + 3xy², ∂z/∂x is:", options: ["2xy + 3y²", "x² + 6xy", "2x + 3y", "2xy + 6xy²"], answer: 0, explanation: "Treat y as constant: ∂/∂x(x²y + 3xy²) = 2xy + 3y²." },

        { question: "For z = x²y + 3xy², ∂z/∂y is:", options: ["2xy + 3y²", "x² + 6xy", "2x + 6y", "2x²y + 3x"], answer: 1, explanation: "Treat x as constant: ∂/∂y(x²y + 3xy²) = x² + 6xy." },

        { question: "The notation ∂²z/∂x² represents:", options: ["Partial derivative with respect to y", "Second partial derivative with respect to x", "Total differential of z", "Derivative of x with respect to z"], answer: 1, explanation: "It represents the second-order partial derivative of z with respect to x." },

        { question: "For a sufficiently smooth function z = f(x, y), the mixed partial derivatives generally satisfy:", options: ["∂²z/∂x∂y = -∂²z/∂y∂x", "∂²z/∂x∂y = ∂²z/∂y∂x", "They are always zero", "They are always constants"], answer: 1, explanation: "Under suitable continuity conditions, mixed partial derivatives are equal." },

        { question: "For z = f(x, y), the total differential dz is:", options: ["dz = dx + dy", "dz = (∂z/∂x)dx + (∂z/∂y)dy", "dz = (∂z/∂x) + (∂z/∂y)", "dz = xdx + ydy"], answer: 1, explanation: "The total differential gives the approximate change in z due to small changes dx and dy." },

        { question: "The total differential is mainly used for:", options: ["Finding only eigenvalues", "Approximating small changes in a function", "Finding matrix rank", "Solving only linear equations"], answer: 1, explanation: "Total differentials are used to approximate the change in a multivariable function for small changes in its variables." },

        { question: "If z = f(u, v), where u and v depend on x, then dz/dx is found using:", options: ["Gauss elimination", "Chain rule", "Cramer's rule", "Euler's formula only"], answer: 1, explanation: "When variables are functions of another variable, the chain rule is used." },

        { question: "If z = f(u, v), u = u(x) and v = v(x), then dz/dx equals:", options: ["∂z/∂u + ∂z/∂v", "(∂z/∂u)(du/dx) + (∂z/∂v)(dv/dx)", "du/dx + dv/dx", "∂u/∂z + ∂v/∂z"], answer: 1, explanation: "This is the chain rule for a composite function with two intermediate variables." },

        { question: "If z = f(x, y), where x and y both depend on t, then dz/dt is:", options: ["∂z/∂x + ∂z/∂y", "(∂z/∂x)(dx/dt) + (∂z/∂y)(dy/dt)", "dx/dt + dy/dt", "∂x/∂z + ∂y/∂z"], answer: 1, explanation: "The total rate of change with respect to t is obtained using the multivariable chain rule." }

        ],
    
    "Implicit and Homogeneous Functions": [

        { question: "A function is called implicit when:", options: ["One variable is explicitly expressed in terms of others", "The dependent variable is not explicitly isolated", "It contains only one variable", "It has no derivatives"], answer: 1, explanation: "In an implicit function, variables are related by an equation without explicitly expressing one variable in terms of the others." },

        { question: "If F(x, y) = 0 defines y implicitly as a function of x, then dy/dx is:", options: ["Fx/Fy", "-Fx/Fy", "Fy/Fx", "-Fy/Fx always zero"], answer: 1, explanation: "Implicit differentiation gives dy/dx = -Fx/Fy, provided Fy is non-zero." },

        { question: "Which of the following is an implicit function?", options: ["y = x² + 1", "x² + y² = 1", "f(x) = 2x", "y = sin x"], answer: 1, explanation: "In x² + y² = 1, y is not explicitly isolated, so the relation is implicit." },

        { question: "A function f(x, y) is homogeneous of degree n if:", options: ["f(tx, ty) = f(x, y)", "f(tx, ty) = tⁿf(x, y)", "f(tx, ty) = nf(x, y)", "f(tx, ty) = t + f(x, y)"], answer: 1, explanation: "This is the definition of a homogeneous function of degree n." },

        { question: "The function f(x, y) = x² + y² is homogeneous of degree:", options: ["0", "1", "2", "3"], answer: 2, explanation: "Both terms have total degree 2, so the function is homogeneous of degree 2." },

        { question: "The function f(x, y) = x³ + x²y + xy² + y³ is homogeneous of degree:", options: ["1", "2", "3", "4"], answer: 2, explanation: "Every term has total degree 3." },

        { question: "Euler's theorem for a homogeneous function z = f(x, y) of degree n is:", options: ["x(∂z/∂x) + y(∂z/∂y) = z", "x(∂z/∂x) + y(∂z/∂y) = nz", "∂z/∂x + ∂z/∂y = n", "xz + yz = n"], answer: 1, explanation: "Euler's theorem states xzx + yzy = nz for a homogeneous function of degree n." },

        { question: "If z is homogeneous of degree 1, Euler's theorem becomes:", options: ["xzx + yzy = 0", "xzx + yzy = z", "xzx + yzy = 2z", "zx + zy = 1"], answer: 1, explanation: "Substituting n = 1 into Euler's theorem gives xzx + yzy = z." },

        { question: "If z = x² + y², then x(∂z/∂x) + y(∂z/∂y) equals:", options: ["z", "2z", "3z", "0"], answer: 1, explanation: "z is homogeneous of degree 2, so Euler's theorem gives xzx + yzy = 2z." },

        { question: "For a homogeneous function of degree n, Euler's theorem relates:", options: ["Rank and determinant", "Partial derivatives and the degree of the function", "Eigenvalues and eigenvectors", "Integration and differentiation"], answer: 1, explanation: "Euler's theorem connects the function's partial derivatives with its degree of homogeneity." }

        ],

    "Maxima and Minima": [

        { question: "For z = f(x, y), a necessary condition for a stationary point is:", options: ["fx = fy = 0", "fxx = fyy = 0", "z = 0", "x = y = 0"], answer: 0, explanation: "At an interior stationary point, the first partial derivatives fx and fy must both be zero." },

        { question: "For a function z = f(x, y), the discriminant used in the second derivative test is:", options: ["D = fxx + fyy", "D = fxxfyy - (fxy)²", "D = fxx - fyy", "D = fx + fy"], answer: 1, explanation: "The second derivative test uses D = fxxfyy - (fxy)²." },

        { question: "If D > 0 and fxx > 0 at a stationary point, the function has:", options: ["A local maximum", "A local minimum", "A saddle point", "No stationary point"], answer: 1, explanation: "A positive discriminant with fxx > 0 indicates a local minimum." },

        { question: "If D > 0 and fxx < 0 at a stationary point, the function has:", options: ["A local maximum", "A local minimum", "A saddle point", "No conclusion"], answer: 0, explanation: "A positive discriminant with fxx < 0 indicates a local maximum." },

        { question: "If D < 0 at a stationary point, the point is:", options: ["A maximum", "A minimum", "A saddle point", "Always a minimum"], answer: 2, explanation: "A negative discriminant indicates that the function has a saddle point." },

        { question: "If D = 0 in the second derivative test, then:", options: ["Maximum is certain", "Minimum is certain", "The test is inconclusive", "The point is always a saddle point"], answer: 2, explanation: "When D = 0, the second derivative test cannot determine the nature of the stationary point." },

        { question: "For f(x, y) = x² + y², the stationary point is:", options: ["(1, 1)", "(0, 0)", "(1, 0)", "No stationary point"], answer: 1, explanation: "fx = 2x = 0 and fy = 2y = 0 give x = 0 and y = 0." },

        { question: "For f(x, y) = x² + y², the point (0, 0) is:", options: ["A local maximum", "A local minimum", "A saddle point", "Inconclusive"], answer: 1, explanation: "The function is non-negative and has its smallest value 0 at (0, 0)." },

        { question: "For f(x, y) = x² - y², the point (0, 0) is:", options: ["A maximum", "A minimum", "A saddle point", "Not a stationary point"], answer: 2, explanation: "The function increases in the x-direction and decreases in the y-direction, producing a saddle point." },

        { question: "For a function of three variables f(x, y, z), a stationary point is generally found by setting:", options: ["fx = fy = fz = 0", "fxx = fyy = fzz = 0", "x = y = z", "f = 0 only"], answer: 0, explanation: "The first partial derivatives with respect to all independent variables must vanish at an interior stationary point." }

        ],

    "Lagrange Multipliers": [

        { question: "Lagrange's method of multipliers is mainly used to find:", options: ["Eigenvalues of a matrix", "Constrained maxima and minima", "Rank of a matrix", "Solutions of linear equations only"], answer: 1, explanation: "Lagrange multipliers are used to find maxima or minima subject to one or more constraints." },

        { question: "If f(x, y) is to be optimized subject to g(x, y) = 0, the basic Lagrange condition is:", options: ["∇f = ∇g", "∇f = λ∇g", "f = λg", "∇f = 0 only"], answer: 1, explanation: "At a constrained extremum, the gradient of f is parallel to the gradient of the constraint, so ∇f = λ∇g." },

        { question: "In the equation ∇f = λ∇g, λ is called:", options: ["Eigenvalue", "Lagrange multiplier", "Rank", "Determinant"], answer: 1, explanation: "λ is the Lagrange multiplier introduced to handle the constraint." },

        { question: "To maximize or minimize f(x, y) subject to g(x, y) = 0, we solve:", options: ["fx = fy = 0 only", "fx = λgx, fy = λgy and g(x,y) = 0", "f = 0 only", "g = λ only"], answer: 1, explanation: "The partial derivative equations together with the constraint equation determine the possible constrained extrema." },

        { question: "The constraint in a Lagrange multiplier problem:", options: ["Can be ignored after differentiation", "Must be included along with the derivative equations", "Is used only for maxima", "Is used only for minima"], answer: 1, explanation: "The constraint equation is essential for finding the valid points on the allowed region." },

        { question: "Geometrically, the condition ∇f = λ∇g means:", options: ["The gradients are perpendicular", "The gradients are parallel", "Both gradients are always zero", "The functions are equal"], answer: 1, explanation: "One gradient is a scalar multiple of the other, so they are parallel." },

        { question: "Lagrange multipliers are used when extrema are required:", options: ["Without any restrictions", "Subject to one or more constraints", "Only for matrices", "Only for single-variable functions"], answer: 1, explanation: "The method is specifically designed for optimization with constraints." },

        { question: "If f(x, y) is optimized subject to x² + y² = 1, the equation x² + y² = 1 is:", options: ["The objective function", "The constraint", "The multiplier equation", "The characteristic equation"], answer: 1, explanation: "The equation restricts the possible values of x and y, so it is the constraint." },

        { question: "For maximizing or minimizing f(x, y) subject to g(x, y) = 0, an equivalent Lagrangian can be written as:", options: ["L = f + λg", "L = f - λg", "Both L = f + λg and L = f - λg can be used with consistent equations", "L = f/g only"], answer: 2, explanation: "Both sign conventions are valid; they simply change the sign of the multiplier λ." },

        { question: "The candidates obtained using Lagrange multipliers must finally be:", options: ["Ignored", "Tested by evaluating the objective function", "Converted into eigenvectors", "Used only if λ = 0"], answer: 1, explanation: "After finding candidate points, the value of the objective function is evaluated to determine the required maximum or minimum." }

        ]

  },

    "Python": {

        "Python Features and Basic Data Types":[

            { question:"Python is primarily known as a?", options:["Low-level assembly language","High-level interpreted language","Machine language","Only markup language"], answer:1, explanation:"Python is a high-level programming language that is generally interpreted." },

            { question:"Which of the following is a major feature of Python?", options:["Very complex syntax","Readability and simple syntax","Only manual memory allocation","No object-oriented support"], answer:1, explanation:"Python is popular for its clean and readable syntax." },

            { question:"Python is considered dynamically typed because?", options:["Variables must always have fixed types","Variable types are determined at runtime","Only integers can be stored","Types cannot change"], answer:1, explanation:"Python determines the type of an object at runtime." },

            { question:"Which symbol starts a single-line comment in Python?", options:["//","#","/*","--"], answer:1, explanation:"Python uses # to begin a single-line comment." },

            { question:"Which function is commonly used to display output in Python?", options:["echo()","display()","print()","output()"], answer:2, explanation:"The print() function displays output." },

            { question:"Which keyword is used to define a variable in Python?", options:["var","let","int","No keyword is required"], answer:3, explanation:"Python variables are created by assigning a value without declaring a type keyword." },

            { question:"Which of the following is a valid Python variable name?", options:["2value","my-value","my_value","class"], answer:2, explanation:"my_value is valid because underscores are allowed and the name does not begin with a digit." },

            { question:"Python source files commonly use which extension?", options:[".java",".cpp",".py",".html"], answer:2, explanation:"Python source files normally use the .py extension." },

            { question:"Which feature allows Python code to run on different operating systems?", options:["Platform independence","Manual compilation only","Fixed hardware dependency","Assembly integration only"], answer:0, explanation:"Python is portable and can run on many operating systems with a suitable interpreter." },

            { question:"Python supports?", options:["Only procedural programming","Only object-oriented programming","Multiple programming paradigms","No functions"], answer:2, explanation:"Python supports procedural, object-oriented and functional programming styles." }

            ],

        "Numbers Boolean and Strings":[

            { question:"Which data type is used for integer numbers in Python?", options:["float","int","str","bool"], answer:1, explanation:"The int type represents integer numbers." },

            { question:"Which data type represents decimal numbers?", options:["int","float","bool","str"], answer:1, explanation:"The float type represents floating-point numbers." },

            { question:"Which type can represent complex numbers in Python?", options:["complex","imaginary","float","number"], answer:0, explanation:"Python provides the built-in complex type." },

            { question:"Which is a valid complex number in Python?", options:["3 + 4i","3 + 4j","3i + 4","complex(3,4) only"], answer:1, explanation:"Python uses j to represent the imaginary part of a complex number." },

            { question:"What is the Boolean value of 0 in a Boolean context?", options:["True","False","None","Error"], answer:1, explanation:"Zero evaluates to False in a Boolean context." },

            { question:"Which of the following represents a Boolean value?", options:["TRUE","true","True","1 only"], answer:2, explanation:"Python Boolean literals are True and False with capital first letters." },

            { question:"Strings in Python are generally?", options:["Mutable","Immutable","Only numeric","Always lists"], answer:1, explanation:"Python strings cannot be modified in place because they are immutable." },

            { question:"Which can be used to create a string in Python?", options:["Single quotes","Double quotes","Triple quotes","All of these"], answer:3, explanation:"Python supports single, double and triple quotes for strings." },

            { question:"Which operation joins two strings?", options:["*","/","+","%"], answer:2, explanation:"The + operator concatenates strings." },

            { question:"What does the * operator do with a string?", options:["Divides it","Repeats it","Deletes it","Converts it to integer"], answer:1, explanation:"The * operator repeats a string a specified number of times." },

            { question:"Which function returns the type of an object?", options:["datatype()","type()","typeof()","objectType()"], answer:1, explanation:"type() returns the type of an object." },

            { question:"What is the result type of 5 / 2 in Python?", options:["int","float","bool","str"], answer:1, explanation:"The / operator performs true division and returns a float." }

            ],

        "Functions Scope and Lambda":[

            { question:"Which keyword is used to define a function in Python?", options:["function","func","def","define"], answer:2, explanation:"Python functions are defined using the def keyword." },

            { question:"Which keyword is used to return a value from a function?", options:["output","print","return","result"], answer:2, explanation:"The return statement sends a value back from a function." },

            { question:"A function without an explicit return statement returns?", options:["0","False","None","An error"], answer:2, explanation:"Python functions return None by default when no return statement is provided." },

            { question:"A local variable is normally accessible?", options:["Everywhere in the program","Only inside its function or local scope","Only outside the function","Only inside a class"], answer:1, explanation:"A local variable belongs to the scope in which it is created." },

            { question:"A global variable is generally declared?", options:["Inside a loop only","Outside functions","Inside a class only","Inside lambda only"], answer:1, explanation:"Variables created at module level can generally be accessed as global variables." },

            { question:"Which keyword allows modification of a global variable inside a function?", options:["global","outer","static","public"], answer:0, explanation:"The global keyword refers to a global variable inside a function." },

            { question:"Variable scope refers to?", options:["Variable memory size","Where a variable can be accessed","Variable data type only","Variable output format"], answer:1, explanation:"Scope determines the region of a program where a variable name is accessible." },

            { question:"A lambda function is?", options:["A class","An anonymous function","A loop","An exception"], answer:1, explanation:"A lambda creates a small anonymous function." },

            { question:"Which keyword is used to create a lambda function?", options:["lambda","def","anonymous","function"], answer:0, explanation:"Python uses the lambda keyword for anonymous functions." },

            { question:"Lambda functions are generally most suitable for?", options:["Large multi-statement programs","Short simple expressions","Defining classes","Handling files only"], answer:1, explanation:"Lambda functions are best suited for short single-expression operations." },

            { question:"What is the scope of a variable defined inside a function?", options:["Global scope","Local scope","Module scope only","Class scope automatically"], answer:1, explanation:"Variables created inside a function normally have local scope." }

            ],

        "Loops and Flow Control":[

            { question:"Which loop is commonly used to iterate over a sequence in Python?", options:["for","repeat","loop","iterate"], answer:0, explanation:"The for loop is commonly used to iterate over sequences and iterables." },

            { question:"Which loop continues while a condition remains True?", options:["for","while","switch","case"], answer:1, explanation:"A while loop repeatedly executes while its condition is True." },

            { question:"Which keyword immediately terminates a loop?", options:["continue","skip","break","return"], answer:2, explanation:"break exits the nearest enclosing loop." },

            { question:"Which keyword skips the remaining code of the current loop iteration?", options:["break","continue","pass","return"], answer:1, explanation:"continue skips to the next iteration of the loop." },

            { question:"Which keyword does nothing and acts as a placeholder?", options:["pass","skip","continue","ignore"], answer:0, explanation:"pass is a null statement often used as a placeholder." },

            { question:"Which statement is used for conditional execution?", options:["if","for","def","import"], answer:0, explanation:"The if statement executes code conditionally." },

            { question:"Which keyword provides an alternative condition after if?", options:["elseif","elif","else if","otherwise"], answer:1, explanation:"Python uses elif for additional conditional checks." },

            { question:"Which block executes when no previous if or elif condition is True?", options:["finally","default","else","except"], answer:2, explanation:"The else block executes when preceding conditions are false." },

            { question:"What does range(5) produce values for?", options:["1 to 5","0 to 5","0 to 4","1 to 4"], answer:2, explanation:"range(5) produces 0, 1, 2, 3 and 4." },

            { question:"An infinite loop occurs when?", options:["A loop condition eventually becomes False","A loop condition never becomes False","break is used","range() is used"], answer:1, explanation:"A loop can become infinite if its terminating condition is never reached." },

            { question:"Nested loops are?", options:["Loops inside other loops","Loops without conditions","Functions inside classes","Only while loops"], answer:0, explanation:"A nested loop is a loop contained inside another loop." }

            ],

        "Exception Handling":[

            { question:"An exception is?", options:["Normal program output","An error event during program execution","A variable type","A Python loop"], answer:1, explanation:"An exception is an event that disrupts the normal flow of program execution." },

            { question:"Which keyword is used to test code that may raise an exception?", options:["try","test","check","catch"], answer:0, explanation:"The try block contains code that may raise an exception." },

            { question:"Which keyword handles an exception in Python?", options:["catch","except","handle","error"], answer:1, explanation:"Python uses except blocks to handle exceptions." },

            { question:"Which block executes regardless of whether an exception occurs?", options:["else","except","finally","try"], answer:2, explanation:"The finally block executes whether or not an exception occurs." },

            { question:"Which block can execute when no exception occurs in a try block?", options:["else","finally only","break","pass"], answer:0, explanation:"The else block can run when the try block completes without an exception." },

            { question:"Which exception may occur when dividing by zero?", options:["ValueError","TypeError","ZeroDivisionError","IndexError"], answer:2, explanation:"Division by zero raises ZeroDivisionError." },

            { question:"Which exception may occur when converting 'abc' to int?", options:["ValueError","ZeroDivisionError","KeyError","StopIteration"], answer:0, explanation:"An invalid conversion to an integer raises ValueError." },

            { question:"Which exception can occur when accessing a list index outside its valid range?", options:["IndexError","NameError","TypeError","FileError"], answer:0, explanation:"Invalid list positions raise IndexError." },

            { question:"Why is exception handling useful?", options:["It prevents every logical mistake","It allows controlled handling of runtime errors","It removes all syntax rules","It replaces functions"], answer:1, explanation:"Exception handling helps programs respond gracefully to runtime errors." },

            { question:"A try block must generally be followed by?", options:["Only for","except or finally","Only class","Only import"], answer:1, explanation:"A try statement requires exception handling or cleanup blocks such as except or finally." }

            ],

        "Shared References":[

            { question:"In Python, variables generally store?", options:["Only copies of objects","References to objects","Only machine instructions","Only integers"], answer:1, explanation:"Python variable names are references bound to objects." },

            { question:"Two variables can refer to?", options:["Only different objects","The same object","Only integers","Only functions"], answer:1, explanation:"Multiple names can reference the same object." },

            { question:"If two variables reference the same mutable object, modifying the object through one variable can?", options:["Never affect the other","Be visible through the other variable","Delete both variables","Cause syntax error"], answer:1, explanation:"Both names refer to the same underlying mutable object." },

            { question:"Which operator checks whether two references point to the same object?", options:["==","is","=","!="], answer:1, explanation:"The is operator checks object identity." },

            { question:"Which operator generally compares object values?", options:["is","==","=","->"], answer:1, explanation:"The == operator checks equality of values." },

            { question:"Which built-in function can show an object's identity?", options:["type()","id()","len()","ref()"], answer:1, explanation:"id() returns an identity value for an object during its lifetime." },

            { question:"Lists are important when studying shared references because lists are?", options:["Immutable","Mutable","Always numeric","Not objects"], answer:1, explanation:"Lists are mutable objects, so changes can be observed through shared references." },

            { question:"Which assignment can create another reference to the same list?", options:["b = a","b = copy(a) automatically","b = list only","b == a"], answer:0, explanation:"Simple assignment binds b to the same object referenced by a." }

            ],

        "File Input Output":[

            { question:"File I/O stands for?", options:["File Input and Output","Function Input Operation","Final Internal Output","File Integer Object"], answer:0, explanation:"File I/O means reading data from and writing data to files." },

            { question:"Which function is commonly used to open a file in Python?", options:["file()","open()","readfile()","load()"], answer:1, explanation:"The open() function opens a file." },

            { question:"Which mode is used to read a text file?", options:["w","r","a","x"], answer:1, explanation:"The r mode opens a file for reading." },

            { question:"Which mode is used to write to a file?", options:["r","w","a","read"], answer:1, explanation:"The w mode opens a file for writing." },

            { question:"What can happen when a file is opened using w mode?", options:["Existing contents may be overwritten","The file can only be read","The file cannot be created","Nothing can be written"], answer:0, explanation:"Writing mode generally overwrites an existing file." },

            { question:"Which mode is used to add data to the end of a file?", options:["a","r","w","x only"], answer:0, explanation:"Append mode adds new content to the end of a file." },

            { question:"Which method reads the entire contents of a file?", options:["read()","write()","append()","close()"], answer:0, explanation:"read() reads file contents." },

            { question:"Which method writes text to an opened file?", options:["read()","write()","load()","input()"], answer:1, explanation:"write() sends text data to a writable file." },

            { question:"Why should a file generally be closed after use?", options:["To release system resources and ensure operations are completed","To delete the file","To convert it to JSON","To change its name"], answer:0, explanation:"Closing releases resources and helps ensure data is properly handled." },

            { question:"Which statement is commonly preferred for automatic file closing?", options:["with open(...) as file","if open(...)","while open(...)","for open(...)"], answer:0, explanation:"The with statement automatically closes the file when the block ends." }

            ],

        "JSON Files":[

            { question:"JSON stands for?", options:["Java Source Object Network","JavaScript Object Notation","Joined System Object Notation","Java Standard Output Name"], answer:1, explanation:"JSON stands for JavaScript Object Notation." },

            { question:"JSON is commonly used for?", options:["Data storage and exchange","Only arithmetic","Only drawing graphics","Replacing Python syntax"], answer:0, explanation:"JSON is widely used for structured data storage and exchange." },

            { question:"Which Python module is commonly used to work with JSON?", options:["json","file","data","js"], answer:0, explanation:"Python provides the built-in json module." },

            { question:"Which function converts JSON text into a Python object?", options:["json.loads()","json.dumps()","json.write()","json.open()"], answer:0, explanation:"json.loads() loads JSON from a string into a Python object." },

            { question:"Which function converts a Python object into a JSON string?", options:["json.loads()","json.dumps()","json.read()","json.convert()"], answer:1, explanation:"json.dumps() converts Python objects to JSON-formatted strings." },

            { question:"Which function loads JSON data directly from a file?", options:["json.load()","json.loads()","json.dump()","json.dumps()"], answer:0, explanation:"json.load() reads JSON data from an opened file." },

            { question:"Which function writes Python data as JSON to a file?", options:["json.dump()","json.load()","json.loads()","json.read()"], answer:0, explanation:"json.dump() serializes Python data into a file." },

            { question:"A JSON object is most similar to which Python structure?", options:["list","dictionary","tuple","set"], answer:1, explanation:"JSON objects consist of key-value pairs similar to Python dictionaries." },

            { question:"A JSON array is most similar to which Python structure?", options:["dictionary","list","string","integer"], answer:1, explanation:"JSON arrays correspond closely to Python lists." }

            ],

        "Classes and Objects":[

            { question:"A class is best described as?", options:["A blueprint for creating objects","A loop","A file type","An exception"], answer:0, explanation:"A class defines the structure and behavior of objects." },

            { question:"An object is?", options:["An instance of a class","A Python keyword","A file mode","A loop variable"], answer:0, explanation:"An object is an instance created from a class." },

            { question:"Which keyword is used to define a class?", options:["class","object","define","struct"], answer:0, explanation:"Python classes are defined using the class keyword." },

            { question:"Which method is commonly called when an object is created?", options:["__start__","__init__","__create__","main"], answer:1, explanation:"The __init__ method initializes an object after creation." },

            { question:"What does self generally refer to in an instance method?", options:["The current object instance","The parent class only","A global variable","The Python interpreter"], answer:0, explanation:"self refers to the instance on which the method is being called." },

            { question:"An instance variable belongs to?", options:["The entire class only","A specific object instance","All modules","Only the interpreter"], answer:1, explanation:"Each object can have its own instance variables." },

            { question:"A class variable is generally shared by?", options:["One object only","All instances of the class","Only local functions","Only global variables"], answer:1, explanation:"Class variables belong to the class and are shared among its instances unless overridden." },

            { question:"An instance method usually operates on?", options:["A specific object using self","Only global data","Only class memory","No object"], answer:0, explanation:"Instance methods receive the object reference through self." },

            { question:"A class method is commonly associated with?", options:["The class itself","Only one instance","Only files","Only loops"], answer:0, explanation:"Class methods operate with class-level information and typically receive cls." },

            { question:"Which decorator is commonly used for a class method?", options:["@classmethod","@staticmethod only","@class","@method"], answer:0, explanation:"@classmethod defines a method that receives the class as its first argument." }

            ],

        "Inheritance":[

            { question:"Inheritance allows?", options:["A class to acquire properties and methods from another class","A function to become a loop","Files to become classes","Variables to become constants"], answer:0, explanation:"Inheritance allows a derived class to reuse and extend features of another class." },

            { question:"The class being inherited from is commonly called?", options:["Parent or base class","Child class","Object variable","Instance method"], answer:0, explanation:"The original class is called the parent, superclass or base class." },

            { question:"The class that inherits from another class is called?", options:["Derived or child class","Base class only","Global class","Static class"], answer:0, explanation:"The inheriting class is called a derived class or child class." },

            { question:"Single inheritance means?", options:["One child inherits from one parent","One parent has no methods","Multiple parents inherit from one child","No inheritance"], answer:0, explanation:"Single inheritance involves one derived class inheriting from one base class." },

            { question:"Multiple inheritance means?", options:["A class inherits from more than one parent class","Only one object exists","Only one method exists","No parent classes exist"], answer:0, explanation:"Python supports inheritance from multiple parent classes." },

            { question:"Multilevel inheritance refers to?", options:["Inheritance through multiple levels of classes","Multiple files only","One class with no parent","Only functions"], answer:0, explanation:"In multilevel inheritance, one derived class becomes the base for another derived class." },

            { question:"Which function is commonly used to access parent class behavior?", options:["super()","parent()","base()","inherit()"], answer:0, explanation:"super() provides access to methods of a parent class." },

            { question:"Method overriding occurs when?", options:["A child class provides its own version of an inherited method","A method is deleted","A function becomes global","A loop ends"], answer:0, explanation:"A derived class can redefine an inherited method with its own implementation." },

            { question:"One major advantage of inheritance is?", options:["Code reuse","Removing all classes","Preventing methods","Eliminating objects"], answer:0, explanation:"Inheritance promotes code reuse and hierarchical program design." },

            { question:"Which type of inheritance is explicitly included in your syllabus?", options:["Single and multiple inheritance","Only operator inheritance","File inheritance","Loop inheritance"], answer:0, explanation:"Your syllabus specifically includes multilevel and multiple inheritance concepts as well." }

            ],

        "Lists - Basic Operations": [

            { question: "Which symbol is used to create a list in Python?", options: [ "()", "[]", "{}", "<>" ], answer: 1, explanation: "Lists are created using square brackets []." },

            { question: "Which of the following is a valid Python list?", options: [ "(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>" ], answer: 1, explanation: "Square brackets are used to create lists." },

            { question: "Are Python lists mutable?", options: [ "Yes", "No", "Only numeric lists", "Only empty lists" ], answer: 0, explanation: "Lists are mutable, meaning their elements can be modified after creation." },

            { question: "Which method adds one element to the end of a list?", options: [ "add()", "append()", "insert()", "extend()" ], answer: 1, explanation: "append() adds a single element at the end of a list." },

            { question: "What does append() add to a list?", options: [ "Only multiple elements", "One element as a single item", "Only integers", "Only strings" ], answer: 1, explanation: "append() adds its argument as one single element." },

            { question: "Which method inserts an element at a specified index?", options: [ "append()", "insert()", "extend()", "add()" ], answer: 1, explanation: "insert(index, value) inserts an element at the specified position." },

            { question: "Which method adds multiple elements from another iterable to a list?", options: [ "append()", "extend()", "insert()", "push()" ], answer: 1, explanation: "extend() adds each element of an iterable individually to the list." },

            { question: "What is the result of [1, 2].append([3, 4])?", options: [ "[1, 2, 3, 4]", "[1, 2, [3, 4]]", "[[1, 2], [3, 4]]", "Error" ], answer: 1, explanation: "append() adds the entire list [3, 4] as one element." },

            { question: "What is the result of [1, 2].extend([3, 4])?", options: [ "[1, 2, [3, 4]]", "[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "Error" ], answer: 1, explanation: "extend() adds every element from the supplied iterable individually." },

            { question: "Which method removes and returns the last element by default?", options: [ "remove()", "delete()", "pop()", "clear()" ], answer: 2, explanation: "pop() removes and returns the last list element when no index is supplied." },

            { question: "Which method removes the first occurrence of a specified value?", options: [ "pop()", "remove()", "delete()", "clear()" ], answer: 1, explanation: "remove(value) removes the first matching value from the list." },

            { question: "What happens if remove() is called for a value that does not exist?", options: [ "Nothing happens", "IndexError", "ValueError", "The list becomes empty" ], answer: 2, explanation: "remove() raises ValueError if the specified value is not found." },

            { question: "Which statement removes all elements from a list?", options: [ "list.remove()", "list.clear()", "list.delete()", "list.popall()" ], answer: 1, explanation: "clear() removes every element from the list." },

            { question: "Which function returns the number of elements in a list?", options: [ "size()", "count()", "length()", "len()" ], answer: 3, explanation: "len(list) returns the total number of elements." },

            { question: "Which method returns the number of occurrences of a value in a list?", options: [ "count()", "len()", "index()", "find()" ], answer: 0, explanation: "count(value) returns how many times a value occurs." },

            { question: "Which method returns the index of the first occurrence of an element?", options: [ "find()", "search()", "index()", "position()" ], answer: 2, explanation: "index(value) returns the position of the first occurrence." },

            { question: "Which method sorts a list in ascending order by default?", options: [ "sort()", "sortedlist()", "arrange()", "order()" ], answer: 0, explanation: "sort() rearranges the original list in ascending order by default." },

            { question: "Which method reverses the order of elements in the same list?", options: [ "reverse()", "reversed()", "sort(reverse)", "flip()" ], answer: 0, explanation: "reverse() reverses the elements of the existing list." },

            { question: "What does list.copy() generally create?", options: [ "A reference only", "A shallow copy of the list", "An empty list", "A tuple" ], answer: 1, explanation: "copy() creates a shallow copy of the list." },

            { question: "What is the output of len([10, 20, 30])?", options: [ "2", "3", "4", "30" ], answer: 1, explanation: "The list contains three elements." }

            ],

        "Lists - Indexing, Slicing & Comprehension": [

            { question: "What is the index of the first element in a Python list?", options: [ "0", "1", "-1", "Depends on list" ], answer: 0, explanation: "Python uses zero-based indexing." },

            { question: "What does index -1 represent in a Python list?", options: [ "First element", "Last element", "Second element", "Invalid index" ], answer: 1, explanation: "Negative indexing starts from the end, so -1 represents the last element." },

            { question: "For a = [10, 20, 30, 40], what is a[0]?", options: [ "10", "20", "30", "40" ], answer: 0, explanation: "Index 0 refers to the first element." },

            { question: "For a = [10, 20, 30, 40], what is a[-1]?", options: [ "10", "20", "30", "40" ], answer: 3, explanation: "Index -1 refers to the last element." },

            { question: "What is the result of [10, 20, 30, 40][1:3]?", options: [ "[10, 20]", "[20, 30]", "[20, 30, 40]", "[10, 20, 30]" ], answer: 1, explanation: "Slicing includes the start index but excludes the stop index." },

            { question: "In list slicing a[start:stop], is stop included?", options: [ "Always", "Never", "Only for negative values", "Only in tuples" ], answer: 1, explanation: "The stop index is excluded from Python slices." },

            { question: "What does a[:] usually produce?", options: [ "First element", "Last element", "A shallow copy of the whole list", "An empty list" ], answer: 2, explanation: "A complete slice generally creates a shallow copy of the list." },

            { question: "What is the result of [1, 2, 3, 4, 5][::2]?", options: [ "[1, 2, 3]", "[1, 3, 5]", "[2, 4]", "[5, 3, 1]" ], answer: 1, explanation: "The step value 2 selects every second element starting from index 0." },

            { question: "What does a[::-1] commonly do for a list?", options: [ "Sorts it", "Copies it", "Reverses it", "Deletes it" ], answer: 2, explanation: "A slice with a step of -1 traverses the list in reverse order." },

            { question: "Which statement correctly iterates through list elements?", options: [ "for x in myList:", "loop x myList:", "foreach(myList):", "while each myList:" ], answer: 0, explanation: "Python commonly iterates over a list using for x in myList." },

            { question: "Which function can provide both index and value while iterating?", options: [ "index()", "enumerate()", "range()", "iterate()" ], answer: 1, explanation: "enumerate() provides an index and corresponding element during iteration." },

            { question: "What is a nested list?", options: [ "A list containing another list", "A sorted list", "An empty list", "A tuple inside a dictionary only" ], answer: 0, explanation: "A nested list contains one or more lists as elements." },

            { question: "What is a matrix in Python commonly represented as?", options: [ "A string", "A list of lists", "A set", "A single integer" ], answer: 1, explanation: "A matrix can be represented using nested lists, where each inner list represents a row." },

            { question: "For matrix = [[1,2],[3,4]], what is matrix[1][0]?", options: [ "1", "2", "3", "4" ], answer: 2, explanation: "matrix[1] is [3,4], and index 0 of that row is 3." },

            { question: "What is a list comprehension?", options: [ "A method to delete lists", "A concise way to create lists", "A way to convert lists into tuples", "A sorting algorithm" ], answer: 1, explanation: "List comprehensions provide a compact syntax for creating lists." },

            { question: "Which is a valid list comprehension?", options: [ "[x*x for x in range(5)]", "{x*x for x in range(5)}", "(x*x while x in range(5))", "[for x range(5): x*x]" ], answer: 0, explanation: "A list comprehension has the general form [expression for item in iterable]." },

            { question: "What does [x*x for x in range(4)] produce?", options: [ "[1, 4, 9, 16]", "[0, 1, 4, 9]", "[0, 1, 2, 3]", "[1, 2, 3, 4]" ], answer: 1, explanation: "range(4) produces 0,1,2,3 and each value is squared." },

            { question: "Which list comprehension creates only even numbers from 0 to 9?", options: [ "[x for x in range(10) if x % 2 == 0]", "[x % 2 for x in range(10)]", "[x for x == 0]", "[even(x) for x in range(10)]" ], answer: 0, explanation: "The condition x % 2 == 0 filters even values." },

            { question: "Can a list comprehension contain a condition?", options: [ "No", "Yes", "Only for strings", "Only with tuples" ], answer: 1, explanation: "A conditional filter can be added using if inside a list comprehension." },

            { question: "What is the main advantage of list comprehension?", options: [ "Always faster than every possible method", "More concise creation and transformation of lists", "Makes lists immutable", "Prevents iteration" ], answer: 1, explanation: "List comprehensions provide concise and readable syntax for many list creation tasks." }

            ],

        "Dictionaries - Operations & Comprehension": [

            { question: "Which symbol is used to create a dictionary?", options: [ "[]", "()", "{}", "<>" ], answer: 2, explanation: "Dictionaries are generally created using curly braces." },

            { question: "A dictionary stores data as:", options: [ "Only values", "Key-value pairs", "Ordered indexes only", "Characters only" ], answer: 1, explanation: "A dictionary stores mappings between keys and values." },

            { question: "Which of the following is a valid dictionary?", options: [ "[1: 'A']", "{'name': 'John'}", "(name = John)", "<name, John>" ], answer: 1, explanation: "Dictionary entries use key: value pairs inside curly braces." },

            { question: "How can a dictionary value be accessed?", options: [ "Using its key", "Using only numeric index", "Using append()", "Using pop only" ], answer: 0, explanation: "Dictionary values are normally accessed using their keys." },

            { question: "For d = {'a': 10}, what does d['a'] return?", options: [ "'a'", "10", "0", "Error" ], answer: 1, explanation: "The key 'a' maps to the value 10." },

            { question: "Are dictionary keys generally required to be unique?", options: [ "Yes", "No", "Only numbers", "Only strings" ], answer: 0, explanation: "Dictionary keys must be unique within a dictionary." },

            { question: "Can dictionary values be duplicated?", options: [ "No", "Yes", "Only integers", "Only strings" ], answer: 1, explanation: "Different keys can store the same value." },

            { question: "Which method safely retrieves a value and can provide a default?", options: [ "find()", "get()", "search()", "index()" ], answer: 1, explanation: "get() retrieves a value and can return a default instead of raising an error for a missing key." },

            { question: "What does d.get('x') return if 'x' does not exist and no default is supplied?", options: [ "0", "False", "None", "KeyError" ], answer: 2, explanation: "get() returns None by default when the key is absent." },

            { question: "Which method returns all dictionary keys?", options: [ "values()", "keys()", "items()", "getkeys()" ], answer: 1, explanation: "keys() returns a view of the dictionary keys." },

            { question: "Which method returns all dictionary values?", options: [ "keys()", "values()", "items()", "get()" ], answer: 1, explanation: "values() returns a view containing dictionary values." },

            { question: "Which method returns key-value pairs?", options: [ "pairs()", "values()", "items()", "keys()" ], answer: 2, explanation: "items() returns dictionary key-value pairs." },

            { question: "Which method can add or update multiple dictionary entries?", options: [ "append()", "extend()", "update()", "insert()" ], answer: 2, explanation: "update() adds or updates key-value pairs." },

            { question: "Which method removes a key and returns its value?", options: [ "remove()", "delete()", "pop()", "clear()" ], answer: 2, explanation: "pop(key) removes the specified key and returns its associated value." },

            { question: "What does clear() do to a dictionary?", options: [ "Sorts it", "Removes all items", "Deletes only keys", "Makes it immutable" ], answer: 1, explanation: "clear() removes all key-value pairs from the dictionary." },

            { question: "What is dictionary comprehension?", options: [ "A concise way to create dictionaries", "A method to delete dictionaries", "A loop that only reads dictionaries", "A way to create tuples" ], answer: 0, explanation: "Dictionary comprehension provides compact syntax for constructing dictionaries." },

            { question: "Which is a valid dictionary comprehension?", options: [ "{x: x*x for x in range(5)}", "[x: x*x for x in range(5)]", "(x: x*x for x in range(5))", "{for x in range(5): x*x}" ], answer: 0, explanation: "Dictionary comprehensions use the syntax {key_expression: value_expression for item in iterable}." },

            { question: "What does {x: x*x for x in range(3)} produce?", options: [ "{0:0, 1:1, 2:4}", "[0,1,4]", "{1:1,2:4,3:9}", "{0,1,4}" ], answer: 0, explanation: "Each number becomes a key and its square becomes the corresponding value." }

            ],

        "Tuples - Basic Operations": [

            { question: "Which symbol is commonly used to create a tuple?", options: [ "[]", "()", "{}", "<>" ], answer: 1, explanation: "Tuples are commonly created using parentheses." },

            { question: "Which of the following is a tuple?", options: [ "[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "<1, 2, 3>" ], answer: 1, explanation: "Parentheses are commonly used for tuples." },

            { question: "Are tuples mutable?", options: [ "Yes", "No", "Only numeric tuples", "Only empty tuples" ], answer: 1, explanation: "Tuples are immutable and cannot be modified after creation." },

            { question: "Which operation is NOT allowed directly on a tuple?", options: [ "Indexing", "Iteration", "Changing an element", "Slicing" ], answer: 2, explanation: "Tuple elements cannot be changed because tuples are immutable." },

            { question: "Which function returns the number of elements in a tuple?", options: [ "count()", "len()", "size()", "length()" ], answer: 1, explanation: "len() returns the total number of elements." },

            { question: "Which method counts occurrences of a value in a tuple?", options: [ "len()", "count()", "index()", "find()" ], answer: 1, explanation: "count(value) returns how many times a value occurs." },

            { question: "Which method returns the first index of a value in a tuple?", options: [ "find()", "search()", "index()", "position()" ], answer: 2, explanation: "index(value) returns the index of the first matching element." },

            { question: "How is a single-element tuple commonly written?", options: [ "(5)", "(5,)", "[5]", "{5}" ], answer: 1, explanation: "A trailing comma distinguishes a one-element tuple from a normal parenthesized expression." },

            { question: "What is type((5)) generally?", options: [ "tuple", "int", "list", "set" ], answer: 1, explanation: "(5) is simply the integer 5 enclosed in parentheses." },

            { question: "What is type((5,))?", options: [ "int", "list", "tuple", "set" ], answer: 2, explanation: "The comma creates a single-element tuple." },

            { question: "Which statement best describes tuple indexing?", options: [ "Tuples cannot be indexed", "Tuples support indexing like lists", "Only negative indexing is allowed", "Only strings can be indexed" ], answer: 1, explanation: "Tuples support indexing and slicing similarly to lists." },

            { question: "Why are tuples often used?", options: [ "To store data that should not be modified", "To make all values mutable", "To avoid indexing", "To prevent iteration" ], answer: 0, explanation: "Tuples are useful when data should remain unchanged." },

            { question: "Which data structure is generally more suitable for fixed records?", options: [ "Tuple", "Mutable list only", "Loop", "Exception" ], answer: 0, explanation: "Tuples are often used to represent fixed collections of values." },

            { question: "Can a tuple contain duplicate values?", options: [ "No", "Yes", "Only strings", "Only integers" ], answer: 1, explanation: "Tuples can contain duplicate values." },

            { question: "Can a tuple contain different data types?", options: [ "No", "Yes", "Only with inheritance", "Only empty tuples" ], answer: 1, explanation: "Python tuples can store objects of different data types." },

            { question: "Which operation creates a slice of a tuple?", options: [ "tuple[1:3]", "tuple.append()", "tuple.add()", "tuple.update()" ], answer: 0, explanation: "Tuples support slicing using the same slice notation as lists." }

            ],

        "Sets - Basic Operations": [

            { question: "Which symbol is generally used to create a non-empty set?", options: [ "[]", "()", "{}", "<>" ], answer: 2, explanation: "Curly braces can be used to create a non-empty set." },

            { question: "What is the main property of a Python set?", options: [ "Elements are always indexed", "Duplicate elements are automatically removed", "Elements must be strings", "Elements are stored as key-value pairs" ], answer: 1, explanation: "Sets store unique elements, so duplicate values are removed." },

            { question: "What is the result of {1, 2, 2, 3}?", options: [ "{1, 2, 2, 3}", "{1, 2, 3}", "[1, 2, 3]", "Error" ], answer: 1, explanation: "Duplicate values are not stored separately in a set." },

            { question: "How is an empty set created?", options: [ "{}", "[]", "set()", "()" ], answer: 2, explanation: "{} creates an empty dictionary, while set() creates an empty set." },

            { question: "Are Python sets ordered by index like lists?", options: [ "Yes", "No", "Only integer sets", "Only empty sets" ], answer: 1, explanation: "Sets do not provide normal positional indexing like lists." },

            { question: "Which method adds one element to a set?", options: [ "append()", "add()", "insert()", "push()" ], answer: 1, explanation: "add(value) inserts one element into a set." },

            { question: "Which method adds multiple elements from an iterable to a set?", options: [ "append()", "extend()", "update()", "insert()" ], answer: 2, explanation: "update() adds elements from another iterable to a set." },

            { question: "Which method removes an element and raises an error if it does not exist?", options: [ "discard()", "remove()", "clear()", "pop()" ], answer: 1, explanation: "remove() raises an error if the requested element is absent." },

            { question: "Which method removes an element without raising an error if it does not exist?", options: [ "remove()", "discard()", "delete()", "clear()" ], answer: 1, explanation: "discard() safely removes an element if present." },

            { question: "What does set.pop() generally do?", options: [ "Removes the last indexed item", "Removes an arbitrary element", "Sorts the set", "Duplicates the set" ], answer: 1, explanation: "Sets are unordered, so pop() removes an arbitrary element." },

            { question: "Which operation finds elements present in both sets?", options: [ "Union", "Intersection", "Difference", "Symmetric difference" ], answer: 1, explanation: "Intersection returns elements common to both sets." },

            { question: "Which operator can represent set union?", options: [ "&", "|", "^", "%" ], answer: 1, explanation: "The | operator performs set union." },

            { question: "Which operator can represent set intersection?", options: [ "|", "&", "^", "-" ], answer: 1, explanation: "The & operator performs set intersection." },

            { question: "Which operation returns elements present in one set but not another?", options: [ "Union", "Intersection", "Difference", "Equality" ], answer: 2, explanation: "Set difference returns elements belonging to one set but not the other." },

            { question: "What does symmetric difference return?", options: [ "Only common elements", "Elements present in exactly one of the sets", "All duplicate elements", "Only the first set" ], answer: 1, explanation: "Symmetric difference excludes common elements and keeps elements unique to either set." },

            { question: "Which operation checks whether one set is contained within another?", options: [ "issubset()", "isinside()", "contains()", "subset()" ], answer: 0, explanation: "issubset() checks whether all elements of one set occur in another set." },

            { question: "Which operation checks whether two sets have no common elements?", options: [ "isdisjoint()", "isempty()", "isunique()", "separate()" ], answer: 0, explanation: "isdisjoint() returns True when two sets have no common elements." },

            { question: "Which data structure is most suitable for automatically removing duplicate values?", options: [ "List", "Tuple", "Set", "String" ], answer: 2, explanation: "Sets automatically store only unique elements." }

            ],

        "NumPy Array Arithmetic": [

            { question: "Which library is commonly imported as np in Python for numerical computing?", options: ["Pandas", "NumPy", "Matplotlib", "SciPy"], answer: 1, explanation: "NumPy is conventionally imported using: import numpy as np." },

            { question: "Which function is used to create a NumPy array from a Python list?", options: ["np.list()", "np.array()", "np.create()", "np.makeArray()"], answer: 1, explanation: "np.array() converts a Python list or sequence into a NumPy array." },

            { question: "What is the result of np.array([1, 2, 3]) + 2?", options: ["[3, 4, 5]", "[1, 2, 3, 2]", "[2, 4, 6]", "Error"], answer: 0, explanation: "NumPy performs element-wise arithmetic, so 2 is added to every element." },

            { question: "What is the result of np.array([1, 2, 3]) * 2?", options: ["[1, 4, 9]", "[2, 4, 6]", "[3, 4, 5]", "[1, 2, 3, 2]"], answer: 1, explanation: "Multiplication with a scalar is applied element-wise." },

            { question: "What does the + operator do between two NumPy arrays of the same shape?", options: ["Concatenates arrays", "Adds corresponding elements", "Multiplies corresponding elements", "Always produces an error"], answer: 1, explanation: "The + operator performs element-wise addition in NumPy." },

            { question: "What is the result of np.array([1, 2]) * np.array([3, 4])?", options: ["[3, 8]", "11", "[4, 6]", "Error"], answer: 0, explanation: "The * operator performs element-wise multiplication, producing [1×3, 2×4]." },

            { question: "Which operator performs element-wise division in NumPy?", options: ["//", "/", "%", "**"], answer: 1, explanation: "The / operator performs element-wise division." },

            { question: "What does np.array([2, 3, 4]) ** 2 produce?", options: ["[4, 9, 16]", "[4, 6, 8]", "[2, 9, 16]", "Error"], answer: 0, explanation: "Exponentiation is performed element-wise on every array element." },

            { question: "Which function returns the sum of all elements in a NumPy array?", options: ["np.add()", "np.total()", "np.sum()", "np.plus()"], answer: 2, explanation: "np.sum() calculates the sum of array elements." },

            { question: "What is np.mean(np.array([2, 4, 6]))?", options: ["3", "4", "6", "12"], answer: 1, explanation: "Mean = (2 + 4 + 6) / 3 = 4." },

            { question: "Which function returns the largest value in a NumPy array?", options: ["np.large()", "np.max()", "np.high()", "np.maximumValue()"], answer: 1, explanation: "np.max() returns the maximum element." },

            { question: "Which function returns the smallest value in a NumPy array?", options: ["np.min()", "np.small()", "np.low()", "np.minimumValue()"], answer: 0, explanation: "np.min() returns the minimum element." }

            ],


        "Reshaping Arrays": [

            { question: "What does the shape attribute of a NumPy array represent?", options: ["Number of bytes", "Dimensions of the array", "Data type only", "Sum of elements"], answer: 1, explanation: "shape represents the size of the array along each dimension." },

            { question: "What is the shape of np.array([[1,2,3],[4,5,6]])?", options: ["(6,)", "(2, 3)", "(3, 2)", "(1, 6)"], answer: 1, explanation: "The array has 2 rows and 3 columns." },

            { question: "Which method is commonly used to change the shape of a NumPy array?", options: ["resizeOnly()", "reshape()", "shapeChange()", "transform()"], answer: 1, explanation: "reshape() changes the dimensions without changing the elements." },

            { question: "Can an array of 12 elements be reshaped into shape (3, 4)?", options: ["Yes", "No", "Only if elements are integers", "Only in Python lists"], answer: 0, explanation: "3 × 4 = 12, so all elements fit exactly." },

            { question: "Can an array of 10 elements be reshaped into shape (3, 3)?", options: ["Yes", "No", "Only with broadcasting", "Only if dtype is float"], answer: 1, explanation: "3 × 3 = 9, which does not equal 10." },

            { question: "What does np.array([1,2,3,4]).reshape(2,2) produce?", options: ["[[1,2],[3,4]]", "[[1,2,3,4]]", "[[1],[2],[3],[4]]", "Error"], answer: 0, explanation: "The four elements are arranged row-wise into 2 rows and 2 columns." },

            { question: "What does -1 mean in np.reshape()?", options: ["Delete an axis", "Automatically calculate that dimension", "Reverse the array", "Create negative values"], answer: 1, explanation: "NumPy automatically determines the dimension represented by -1." },

            { question: "What is the result shape of an array with 12 elements after reshape(3, -1)?", options: ["(3, 3)", "(3, 4)", "(4, 3)", "(12,)"], answer: 1, explanation: "12 / 3 = 4, so NumPy calculates the second dimension as 4." },

            { question: "Which method converts a multidimensional array into a one-dimensional array?", options: ["flatten()", "reshapeOnly()", "dimension()", "matrix()"], answer: 0, explanation: "flatten() returns a one-dimensional copy of the array." },

            { question: "What does arr.ravel() generally do?", options: ["Deletes the array", "Flattens the array into one dimension", "Sorts the array", "Converts it to a dictionary"], answer: 1, explanation: "ravel() returns a flattened view of an array when possible." },

            { question: "Which condition must be satisfied before reshaping an array?", options: ["New dimensions must contain the same total number of elements", "Number of rows must always increase", "Array must contain integers", "Array must be one-dimensional"], answer: 0, explanation: "The total number of elements must remain unchanged." },

            { question: "What is the result of np.arange(6).reshape(2,3).shape?", options: ["(6,)", "(2,3)", "(3,2)", "(1,6)"], answer: 1, explanation: "The array is explicitly reshaped into 2 rows and 3 columns." }

            ],


        "NumPy Indexing and Slicing": [

            { question: "What is the index of the first element of a NumPy array?", options: ["1", "0", "-1", "Depends on array size"], answer: 1, explanation: "Python and NumPy use zero-based indexing." },

            { question: "What is arr[0] for arr = np.array([10,20,30])?", options: ["10", "20", "30", "0"], answer: 0, explanation: "Index 0 refers to the first element." },

            { question: "What is arr[-1] for arr = np.array([10,20,30])?", options: ["10", "20", "30", "Error"], answer: 2, explanation: "Negative index -1 refers to the last element." },

            { question: "What does arr[1:4] return?", options: ["Elements at indices 1,2,3", "Elements at indices 1,2,3,4", "Only index 4", "All elements"], answer: 0, explanation: "The ending index in Python slicing is excluded." },

            { question: "For arr = np.array([0,1,2,3,4]), what is arr[:3]?", options: ["[0,1,2]", "[0,1,2,3]", "[1,2,3]", "[3,4]"], answer: 0, explanation: "Slicing from the beginning up to index 3 excludes index 3." },

            { question: "For arr = np.array([0,1,2,3,4]), what is arr[::2]?", options: ["[0,1,2]", "[0,2,4]", "[1,3]", "[2,4]"], answer: 1, explanation: "The third slicing value is the step, so every second element is selected." },

            { question: "How do you access the element in row 1 and column 2 of a 2D array using NumPy indexing?", options: ["arr[1][2]", "arr(1,2)", "arr{1,2}", "arr<1,2>"], answer: 0, explanation: "arr[1][2] accesses row index 1 followed by column index 2." },

            { question: "Which syntax is also commonly used for row 1 and column 2?", options: ["arr[1,2]", "arr(1,2)", "arr{1,2}", "arr<1,2>"], answer: 0, explanation: "NumPy supports comma-separated indexing for multidimensional arrays." },

            { question: "What does arr[:, 1] select in a 2D array?", options: ["All rows and column 1", "Row 1 and all columns", "Only first row", "Entire array"], answer: 0, explanation: ": means all rows, while 1 selects the second column." },

            { question: "What does arr[1, :] select?", options: ["All rows", "Second row and all columns", "Second column", "First row only"], answer: 1, explanation: "Index 1 selects the second row and : selects all columns." },

            { question: "What is boolean indexing used for in NumPy?", options: ["Selecting elements based on a condition", "Changing array shape", "Creating matrices only", "Sorting strings"], answer: 0, explanation: "Boolean indexing filters elements according to True or False conditions." },

            { question: "What does arr[arr > 5] return?", options: ["Elements greater than 5", "Indexes greater than 5", "Boolean values only", "An error"], answer: 0, explanation: "The condition creates a boolean mask that selects values greater than 5." }

            ],


        "Vectors and Matrices": [

            { question: "A one-dimensional NumPy array is commonly used to represent a?", options: ["Vector", "Database", "Dictionary", "File"], answer: 0, explanation: "A 1D NumPy array is commonly used as a vector." },

            { question: "A two-dimensional NumPy array is commonly used to represent a?", options: ["Matrix", "String", "Set", "Function"], answer: 0, explanation: "A 2D array consists of rows and columns and can represent a matrix." },

            { question: "What is the shape of a vector containing 5 elements?", options: ["(5,)", "(1,5,1)", "(5,5)", "(1,)"], answer: 0, explanation: "A standard one-dimensional NumPy vector has shape (5,)." },

            { question: "What does np.dot(a, b) calculate for two one-dimensional arrays?", options: ["Dot product", "Array concatenation", "Element-wise division", "Array reshaping"], answer: 0, explanation: "np.dot() calculates the dot product for compatible vectors." },

            { question: "Which operator performs matrix multiplication in modern NumPy syntax?", options: ["*", "@", "+", "//"], answer: 1, explanation: "The @ operator performs matrix multiplication." },

            { question: "What does the * operator generally do between two NumPy matrices?", options: ["Matrix multiplication", "Element-wise multiplication", "Matrix addition", "Matrix transpose"], answer: 1, explanation: "The * operator performs element-wise multiplication." },

            { question: "Which function creates an identity matrix?", options: ["np.identity()", "np.zeros()", "np.ones()", "np.matrixOnly()"], answer: 0, explanation: "np.identity(n) creates an n × n identity matrix." },

            { question: "What is special about an identity matrix?", options: ["All elements are zero", "Diagonal elements are 1 and others are 0", "All elements are 1", "It has only one row"], answer: 1, explanation: "An identity matrix has 1s on the main diagonal and 0s elsewhere." },

            { question: "Which attribute gives the number of dimensions of a NumPy array?", options: ["arr.ndim", "arr.dimension", "arr.size", "arr.count"], answer: 0, explanation: "ndim returns the number of array dimensions." },

            { question: "Which attribute gives the total number of elements in an array?", options: ["arr.shape", "arr.size", "arr.ndim", "arr.lengthOnly"], answer: 1, explanation: "size returns the total number of elements." },

            { question: "What does arr.T represent for a two-dimensional NumPy array?", options: ["Transpose", "Total sum", "Type", "Temporary array"], answer: 0, explanation: "The T attribute gives the transpose of a matrix." },

            { question: "If A has shape (2,3), what is the shape of A.T?", options: ["(2,3)", "(3,2)", "(6,)", "(3,3)"], answer: 1, explanation: "Transpose swaps rows and columns." }

            ],


        "NumPy Broadcasting": [

            { question: "What is broadcasting in NumPy?", options: ["Sending data over a network", "Performing operations on arrays with compatible shapes", "Sorting arrays", "Saving arrays to files"], answer: 1, explanation: "Broadcasting allows NumPy to perform operations between arrays of different but compatible shapes." },

            { question: "Can a scalar be broadcast to every element of a NumPy array?", options: ["Yes", "No", "Only for 2D arrays", "Only for integer arrays"], answer: 0, explanation: "A scalar can be conceptually expanded to match every element of an array." },

            { question: "What happens in np.array([1,2,3]) + 5?", options: ["5 is added to every element", "Only first element changes", "Arrays are concatenated", "Error"], answer: 0, explanation: "The scalar 5 is broadcast across the array." },

            { question: "Which pair of shapes is broadcast-compatible?", options: ["(3,1) and (1,4)", "(3,2) and (4,2)", "(2,3) and (4,5)", "(2,2) and (3,3)"], answer: 0, explanation: "Dimensions of size 1 can expand, allowing (3,1) and (1,4) to produce shape (3,4)." },

            { question: "What is the result shape when arrays of shape (3,1) and (1,4) are combined?", options: ["(3,4)", "(1,1)", "(4,3)", "(3,1)"], answer: 0, explanation: "Broadcasting expands the dimensions of size 1 to produce a 3 × 4 result." },

            { question: "Are arrays with shapes (2,3) and (3,) compatible for broadcasting?", options: ["Yes", "No", "Only with reshape()", "Only if values are equal"], answer: 0, explanation: "The shape (3,) matches the last dimension of (2,3), so it can be broadcast across rows." },

            { question: "What is the main advantage of broadcasting?", options: ["Avoids unnecessary loops", "Deletes duplicate values", "Changes data type automatically", "Creates files"], answer: 0, explanation: "Broadcasting enables efficient vectorized operations without explicit Python loops." },

            { question: "What does vectorized computation mean in NumPy?", options: ["Performing operations on entire arrays at once", "Drawing vectors only", "Creating dictionaries", "Writing loops manually"], answer: 0, explanation: "Vectorization performs operations on many elements simultaneously using optimized array operations." },

            { question: "Are shapes (2,3) and (2,1) compatible for broadcasting?", options: ["Yes", "No", "Only after flatten()", "Only for matrices of zeros"], answer: 0, explanation: "The dimension 1 can expand to match 3, so broadcasting is possible." },

            { question: "What is the result of np.array([[1],[2]]) + np.array([10,20,30])?", options: ["[[11,21,31],[12,22,32]]", "[[11],[22]]", "[10,20,30]", "Error"], answer: 0, explanation: "The first array has shape (2,1) and the second has shape (3,), producing a broadcasted shape of (2,3)." },

            { question: "Broadcasting mainly depends on?", options: ["Compatible array shapes", "Array variable names", "Only data types", "File size"], answer: 0, explanation: "Broadcasting rules compare array dimensions and require them to be equal or one of them to be 1." },

            { question: "Why is NumPy usually faster than manual Python loops for numerical operations?", options: ["It uses optimized vectorized operations", "It never uses memory", "It cannot process large arrays", "It converts everything into strings"], answer: 0, explanation: "NumPy performs many numerical operations using optimized low-level implementations." }

            ]
    },

},

semester2:{

  "Computer Programming": {
    
    "Number Systems and Conversions": [

        { question: "A bit is:", options: ["A group of 4 binary digits", "The smallest unit of data represented as 0 or 1", "A group of 8 bytes", "A decimal digit"], answer: 1, explanation: "A bit is the smallest unit of digital information and can have the value 0 or 1." },

        { question: "One byte is equal to:", options: ["2 bits", "4 bits", "8 bits", "16 bits"], answer: 2, explanation: "A byte consists of 8 bits." },

        { question: "The base of the binary number system is:", options: ["2", "8", "10", "16"], answer: 0, explanation: "Binary uses only two digits: 0 and 1." },

        { question: "The base of the octal number system is:", options: ["2", "8", "10", "16"], answer: 1, explanation: "Octal uses digits from 0 to 7, so its base is 8." },

        { question: "The base of the decimal number system is:", options: ["2", "8", "10", "16"], answer: 2, explanation: "The decimal system uses digits 0 through 9 and has base 10." },

        { question: "The base of the hexadecimal number system is:", options: ["8", "10", "12", "16"], answer: 3, explanation: "Hexadecimal uses 16 symbols: 0–9 and A–F." },

        { question: "Which digit is not valid in the binary number system?", options: ["0", "1", "2", "Both 0 and 1"], answer: 2, explanation: "Binary numbers contain only 0 and 1." },

        { question: "Which digit is not valid in the octal number system?", options: ["5", "7", "8", "0"], answer: 2, explanation: "Octal digits range only from 0 to 7." },

        { question: "In hexadecimal, the symbol A represents:", options: ["8", "9", "10", "11"], answer: 2, explanation: "Hexadecimal uses A=10, B=11, C=12, D=13, E=14 and F=15." },

        { question: "In hexadecimal, the symbol F represents:", options: ["14", "15", "16", "17"], answer: 1, explanation: "F is the largest hexadecimal digit and represents decimal 15." },

        { question: "The binary equivalent of decimal 10 is:", options: ["1000", "1001", "1010", "1011"], answer: 2, explanation: "10 = 8 + 2, so its binary representation is 1010." },

        { question: "The binary equivalent of decimal 15 is:", options: ["1011", "1101", "1110", "1111"], answer: 3, explanation: "15 = 8 + 4 + 2 + 1, giving 1111." },

        { question: "The decimal equivalent of binary 1010 is:", options: ["8", "9", "10", "12"], answer: 2, explanation: "1010₂ = 8 + 2 = 10₁₀." },

        { question: "The decimal equivalent of binary 1111 is:", options: ["13", "14", "15", "16"], answer: 2, explanation: "1111₂ = 8 + 4 + 2 + 1 = 15." },

        { question: "The decimal equivalent of binary 10000 is:", options: ["8", "10", "16", "32"], answer: 2, explanation: "10000₂ has a 1 in the 2⁴ position, so it equals 16." },

        { question: "The octal equivalent of decimal 8 is:", options: ["7", "8", "10", "11"], answer: 2, explanation: "Decimal 8 is written as 10 in base 8." },

        { question: "The hexadecimal equivalent of decimal 15 is:", options: ["E", "F", "10", "15"], answer: 1, explanation: "Decimal 15 is represented by F in hexadecimal." },

        { question: "The hexadecimal equivalent of decimal 16 is:", options: ["F", "10", "11", "100"], answer: 1, explanation: "16₁₀ = 10₁₆." },

        { question: "The decimal equivalent of hexadecimal A is:", options: ["8", "9", "10", "11"], answer: 2, explanation: "A represents decimal 10 in hexadecimal." },

        { question: "The decimal equivalent of hexadecimal 10 is:", options: ["10", "15", "16", "20"], answer: 2, explanation: "10₁₆ = 1×16 + 0 = 16₁₀." },

        { question: "One hexadecimal digit is equivalent to how many binary bits?", options: ["2", "3", "4", "8"], answer: 2, explanation: "Since 16 = 2⁴, each hexadecimal digit corresponds to exactly 4 bits." },

        { question: "One octal digit is equivalent to how many binary bits?", options: ["2", "3", "4", "8"], answer: 1, explanation: "Since 8 = 2³, each octal digit corresponds to 3 binary bits." },

        { question: "Binary 11111111 is equal to decimal:", options: ["127", "128", "255", "256"], answer: 2, explanation: "11111111₂ = 128+64+32+16+8+4+2+1 = 255." },

        { question: "The binary equivalent of hexadecimal F is:", options: ["1110", "1111", "1010", "1100"], answer: 1, explanation: "Hexadecimal F represents decimal 15, which is 1111 in binary." },

        { question: "The binary equivalent of hexadecimal A is:", options: ["1000", "1001", "1010", "1110"], answer: 2, explanation: "Hexadecimal A represents decimal 10, which is 1010₂." },

        { question: "Which number system is commonly used internally by digital computers?", options: ["Decimal", "Binary", "Octal", "Roman"], answer: 1, explanation: "Digital electronic circuits operate using two stable states, making binary the fundamental computer number system." }

        ],

    "Binary Arithmetic": [

        { question: "What is 0 + 0 in binary?", options: ["0", "1", "10", "11"], answer: 0, explanation: "0 + 0 = 0." },

        { question: "What is 0 + 1 in binary?", options: ["0", "1", "10", "11"], answer: 1, explanation: "0 + 1 = 1." },

        { question: "What is 1 + 1 in binary?", options: ["0", "1", "10", "11"], answer: 2, explanation: "1 + 1 equals decimal 2, represented as 10 in binary." },

        { question: "What is 1 + 1 + 1 in binary?", options: ["10", "11", "100", "1"], answer: 1, explanation: "Three in decimal is represented as 11 in binary." },

        { question: "The result of binary addition 101 + 10 is:", options: ["101", "110", "111", "1000"], answer: 2, explanation: "101₂ = 5 and 10₂ = 2, so the sum is 7 = 111₂." },

        { question: "The result of binary addition 111 + 1 is:", options: ["111", "1000", "110", "1010"], answer: 1, explanation: "7 + 1 = 8, which is 1000₂." },

        { question: "What is 1 x 0 in binary?", options: ["0", "1", "10", "Undefined"], answer: 0, explanation: "Any binary digit multiplied by 0 gives 0." },

        { question: "What is 1 x 1 in binary?", options: ["0", "1", "10", "11"], answer: 1, explanation: "1 multiplied by 1 is 1." },

        { question: "What is 0 x 0 in binary?", options: ["0", "1", "10", "Undefined"], answer: 0, explanation: "0 × 0 = 0." },

        { question: "The result of binary multiplication 101 x 10 is:", options: ["101", "1000", "1010", "1110"], answer: 2, explanation: "Multiplication by 10₂ shifts the binary number one position left, so 101 × 10 = 1010." },

        { question: "The result of binary multiplication 11 x 10 is:", options: ["100", "101", "110", "111"], answer: 2, explanation: "3 × 2 = 6, and 6 is 110₂." },

        { question: "The result of binary multiplication 11 x 11 is:", options: ["100", "101", "110", "1001"], answer: 3, explanation: "3 × 3 = 9, which is 1001₂." },

        { question: "In binary subtraction, 1 - 0 equals:", options: ["0", "1", "10", "Borrow required"], answer: 1, explanation: "1 - 0 = 1." },

        { question: "In binary subtraction, 1 - 1 equals:", options: ["0", "1", "10", "Undefined"], answer: 0, explanation: "1 - 1 = 0." },

        { question: "The result of binary subtraction 10 - 1 is:", options: ["0", "1", "10", "11"], answer: 1, explanation: "2 - 1 = 1, so the answer is 1₂." },

        { question: "The result of binary subtraction 101 - 1 is:", options: ["10", "11", "100", "101"], answer: 2, explanation: "5 - 1 = 4, which is 100₂." },

        { question: "The result of binary subtraction 110 - 10 is:", options: ["10", "100", "110", "1000"], answer: 1, explanation: "6 - 2 = 4, which is 100₂." },

        { question: "The result of binary subtraction 1000 - 1 is:", options: ["110", "111", "100", "1111"], answer: 1, explanation: "8 - 1 = 7, which is 111₂." },

        { question: "Binary multiplication is based on which fundamental operation?", options: ["Repeated division", "Repeated addition and shifting", "Only subtraction", "Decimal conversion"], answer: 1, explanation: "Binary multiplication uses addition of shifted partial products." },

        { question: "Multiplying a binary number by 10₂ is equivalent to:", options: ["Dividing by 2", "Adding 1", "Shifting left by one position", "Shifting right by one position"], answer: 2, explanation: "Multiplication by binary 10 shifts the number left by one bit." },

        { question: "What is binary 100 + 100?", options: ["1000", "110", "111", "1010"], answer: 0, explanation: "4 + 4 = 8, represented as 1000₂." },

        { question: "What is binary 101 + 101?", options: ["1010", "1001", "1111", "1100"], answer: 0, explanation: "5 + 5 = 10, represented as 1010₂." },

        { question: "What is binary 111 - 10?", options: ["100", "101", "110", "111"], answer: 1, explanation: "7 - 2 = 5, which is 101₂." },

        { question: "What is binary 100 x 11?", options: ["1000", "1100", "1110", "1010"], answer: 1, explanation: "4 × 3 = 12, which is 1100₂." },

        { question: "What is binary 1010 - 10?", options: ["1000", "1010", "1100", "1110"], answer: 0, explanation: "10 - 2 = 8, represented as 1000₂." }

        ],

    "Introduction to Computer Languages": [

        { question: "Machine language is written using:", options: ["English words", "Binary digits 0 and 1", "Assembly mnemonics only", "High-level statements"], answer: 1, explanation: "Machine language consists of binary instructions directly understood by the computer." },

        { question: "Machine language is directly understood by:", options: ["Compiler", "Interpreter", "CPU", "Assembler"], answer: 2, explanation: "The CPU directly executes machine-language instructions." },

        { question: "Machine language is considered:", options: ["Machine independent", "Machine dependent", "Always platform independent", "A high-level language"], answer: 1, explanation: "Machine-language instructions depend on the specific computer architecture." },

        { question: "Assembly language uses:", options: ["Only binary digits", "Mnemonic codes", "Only English paragraphs", "No instructions"], answer: 1, explanation: "Assembly language uses symbolic mnemonics such as ADD, MOV and SUB." },

        { question: "The translator used for assembly language is:", options: ["Compiler", "Interpreter", "Assembler", "Loader"], answer: 2, explanation: "An assembler translates assembly-language instructions into machine language." },

        { question: "Which of the following is an example of a low-level language?", options: ["Python", "Java", "Machine language", "HTML"], answer: 2, explanation: "Machine language is the lowest-level programming language." },

        { question: "Which language is closer to human language?", options: ["Machine language", "Assembly language", "High-level language", "Binary language only"], answer: 2, explanation: "High-level languages are designed to be easier for humans to read and write." },

        { question: "Which of the following is a high-level programming language?", options: ["Binary", "Machine code", "Assembly", "C++"], answer: 3, explanation: "C++ is a high-level programming language." },

        { question: "A compiler generally translates:", options: ["One statement at a time", "The entire program as a whole", "Only machine code into assembly", "Only hardware instructions"], answer: 1, explanation: "A compiler typically translates the complete source program before execution." },

        { question: "An interpreter generally translates:", options: ["The whole program before execution", "One statement at a time", "Only binary digits", "Assembly into hardware"], answer: 1, explanation: "An interpreter translates and executes the program statement by statement." },

        { question: "Which translator produces machine code from assembly language?", options: ["Compiler", "Interpreter", "Assembler", "Debugger"], answer: 2, explanation: "An assembler converts assembly language into machine language." },

        { question: "Which translator is commonly associated with C and C++?", options: ["Assembler", "Compiler", "Only interpreter", "Loader"], answer: 1, explanation: "C and C++ source programs are generally translated using a compiler." },

        { question: "Which is generally faster during program execution after successful compilation?", options: ["A compiled program", "An interpreted program always", "Assembly cannot execute", "None of these"], answer: 0, explanation: "Compiled programs are translated into machine code before execution, reducing translation work during runtime." },

        { question: "Source code is:", options: ["The original program written by a programmer", "Only machine code", "The output of a printer", "The computer hardware"], answer: 0, explanation: "Source code is the human-readable program written in a programming language." },

        { question: "Object code is generally produced by:", options: ["Keyboard directly", "Compiler or assembler", "Monitor", "Mouse"], answer: 1, explanation: "Compilers and assemblers translate source code into lower-level object or machine code." },

        { question: "A compiler mainly performs:", options: ["Hardware manufacturing", "Translation of source code", "Internet browsing", "File printing"], answer: 1, explanation: "The main role of a compiler is to translate high-level source code into lower-level executable code." },

        { question: "Which language is most difficult for humans to read?", options: ["Python", "C++", "Machine language", "Java"], answer: 2, explanation: "Machine language consists of binary patterns and is difficult for humans to read and write." },

        { question: "Assembly language is generally easier to understand than:", options: ["High-level languages", "Machine language", "English", "Algorithms"], answer: 1, explanation: "Assembly uses mnemonics, making it easier to understand than pure binary machine code." },

        { question: "A major advantage of high-level languages is:", options: ["They contain only 0 and 1", "They are easier to write and understand", "They cannot be translated", "They depend completely on hardware instructions"], answer: 1, explanation: "High-level languages provide abstractions that make programming easier for humans." },

        { question: "The main purpose of language translators is to:", options: ["Increase monitor size", "Convert programs into machine-understandable form", "Create hardware", "Store electricity"], answer: 1, explanation: "Computers ultimately execute machine-level instructions, so translators convert source programs accordingly." }

        ],

    "Introduction to Operating Systems": [

        { question: "An operating system is mainly responsible for:", options: ["Only writing programs", "Managing computer hardware and software resources", "Only creating documents", "Only browsing the internet"], answer: 1, explanation: "An operating system manages hardware resources and provides services to programs and users." },

        { question: "The operating system acts as an interface between:", options: ["Keyboard and mouse only", "User/application programs and computer hardware", "Monitor and printer only", "Two programming languages"], answer: 1, explanation: "The OS provides an interface between users or programs and the underlying hardware." },

        { question: "A batch operating system processes:", options: ["One instruction manually at a time", "Jobs collected into batches", "Only real-time events", "Only network packets"], answer: 1, explanation: "Batch systems collect jobs and execute them in batches with limited direct interaction." },

        { question: "In a batch operating system, user interaction during job execution is generally:", options: ["Continuous", "Minimal or absent", "Always required", "More than time-sharing"], answer: 1, explanation: "Traditional batch processing involves little or no interaction while jobs are executing." },

        { question: "Multiprogramming refers to:", options: ["Running only one program permanently", "Keeping multiple programs in memory to improve CPU utilization", "Using multiple keyboards", "Writing programs in many languages"], answer: 1, explanation: "Multiprogramming keeps multiple jobs available so the CPU can work while another job waits for I/O." },

        { question: "The primary objective of multiprogramming is to improve:", options: ["CPU utilization", "Monitor brightness", "Keyboard speed", "File size"], answer: 0, explanation: "Multiprogramming reduces CPU idle time by allowing another job to execute when one is waiting." },

        { question: "Time-sharing systems allow:", options: ["Only one user to use the system", "Multiple users to share CPU time interactively", "No interaction with users", "Only batch processing"], answer: 1, explanation: "Time-sharing divides CPU time among multiple users or processes to provide interactive computing." },

        { question: "In a time-sharing system, CPU time is divided into:", options: ["Pages", "Time slices or time quanta", "Only files", "Registers"], answer: 1, explanation: "Processes or users receive CPU time in small intervals called time slices or quanta." },

        { question: "A real-time operating system is designed for:", options: ["Only entertainment", "Tasks with strict timing requirements", "Only document editing", "Batch processing only"], answer: 1, explanation: "Real-time systems must respond to events within specified timing constraints." },

        { question: "In a real-time system, correctness depends on:", options: ["Only producing the correct output eventually", "Both correct output and producing it within the required time", "Internet speed only", "Program size only"], answer: 1, explanation: "Real-time systems require logical correctness as well as timely completion." },

        { question: "Which type of system is commonly associated with strict deadlines?", options: ["Batch system", "Real-time system", "Simple text editor", "Offline compiler"], answer: 1, explanation: "Real-time systems are designed around timing and deadline requirements." },

        { question: "A network operating system is mainly designed to:", options: ["Manage only one isolated computer", "Support communication and resource sharing over a network", "Replace all hardware", "Perform only arithmetic"], answer: 1, explanation: "Network operating systems support communication and sharing of resources among connected computers." },

        { question: "A distributed operating system manages:", options: ["Only one processor", "Multiple interconnected computers as a coordinated system", "Only one file", "Only keyboard input"], answer: 1, explanation: "Distributed systems coordinate multiple networked computers to perform tasks and share resources." },

        { question: "In a distributed system, computers may:", options: ["Work together on a common task", "Never communicate", "Always use one CPU physically", "Only run batch jobs"], answer: 0, explanation: "Distributed systems consist of multiple computers cooperating through communication." },

        { question: "Which operating system type is most suitable for airline reservation or industrial control systems requiring timely response?", options: ["Batch system", "Real-time system", "Simple batch compiler", "Offline system"], answer: 1, explanation: "Applications requiring guaranteed response times commonly use real-time operating systems." },

        { question: "Which operating system type is associated with executing jobs in groups?", options: ["Batch system", "Time-sharing system", "Real-time system", "Distributed system only"], answer: 0, explanation: "Batch systems organize and process jobs in batches." },

        { question: "Which operating system type gives users an interactive experience by rapidly switching CPU execution among processes?", options: ["Batch system", "Time-sharing system", "Offline processing", "Machine language system"], answer: 1, explanation: "Time-sharing rapidly switches CPU time among users or processes to provide interactive response." },

        { question: "The operating system is responsible for managing:", options: ["Memory", "Processes", "Input and output devices", "All of these"], answer: 3, explanation: "Operating systems manage processes, memory, devices, files and other system resources." },

        { question: "Which is NOT normally a primary function of an operating system?", options: ["Process management", "Memory management", "Device management", "Manufacturing the CPU"], answer: 3, explanation: "The OS manages hardware but does not manufacture the CPU." },

        { question: "The component responsible for controlling and coordinating computer resources is:", options: ["Operating system", "Text editor", "Web browser only", "Keyboard"], answer: 0, explanation: "The operating system controls and coordinates the use of computer resources." },

        { question: "Multiprogramming differs from a single-program system because:", options: ["Multiple jobs can be kept available for execution", "It has no CPU", "It cannot use memory", "It uses only one instruction"], answer: 0, explanation: "Multiprogramming allows multiple programs to reside in memory so CPU idle time can be reduced." },

        { question: "Time-sharing is closely related to:", options: ["Interactive computing", "Only batch jobs", "Only machine code", "Hardware manufacturing"], answer: 0, explanation: "Time-sharing systems are designed to provide interactive service to multiple users or processes." },

        { question: "A distributed operating system primarily deals with:", options: ["One isolated machine only", "Cooperation among multiple connected computers", "Only one program in memory", "Only binary arithmetic"], answer: 1, explanation: "Distributed operating systems coordinate multiple connected computers and their resources." }

        ],

    "Introduction to C": [

        { question: "C language is primarily a:", options: [ "Machine language", "Procedure-oriented programming language", "Markup language", "Database language" ], answer: 1, explanation: "C is primarily a procedure-oriented programming language." },

        { question: "Which of the following is a valid characteristic of C?", options: [ "It is only an object-oriented language", "It is a procedure-oriented programming language", "It cannot use functions", "It does not support loops" ], answer: 1, explanation: "C is a procedure-oriented programming language and strongly supports functions and control structures." },

        { question: "A character set in C consists of:", options: [ "Only alphabets", "Only numbers", "Letters, digits and special symbols", "Only special symbols" ], answer: 2, explanation: "The C character set includes letters, digits, whitespace characters and special symbols." },

        { question: "Which of the following is a valid C identifier?", options: [ "2value", "total-marks", "total_marks", "float" ], answer: 2, explanation: "Identifiers can contain letters, digits and underscores, but cannot begin with a digit or be a keyword." },

        { question: "Which character is NOT allowed in a C identifier?", options: [ "_", "A", "7", "-" ], answer: 3, explanation: "The hyphen (-) is an operator and cannot be used inside a C identifier." },

        { question: "Which of the following is an invalid identifier in C?", options: [ "_count", "marks1", "student_name", "int" ], answer: 3, explanation: "int is a reserved keyword and cannot be used as an identifier." },

        { question: "An identifier in C can start with:", options: [ "A digit only", "A letter or underscore", "A special symbol", "Any character" ], answer: 1, explanation: "A C identifier must begin with a letter or underscore." },

        { question: "Keywords in C are:", options: [ "User-defined variable names", "Reserved words with predefined meanings", "Names of functions only", "Names of constants only" ], answer: 1, explanation: "Keywords are reserved words that have predefined meanings in the C language." },

        { question: "Which of the following is a C keyword?", options: [ "main", "printf", "variable", "while" ], answer: 3, explanation: "while is a reserved keyword in C." },

        { question: "Which of the following is NOT a C keyword?", options: [ "int", "float", "main", "return" ], answer: 2, explanation: "main is a function name, not a C keyword." },

        { question: "Which data type is generally used to store an integer in C?", options: [ "float", "char", "int", "double" ], answer: 2, explanation: "The int data type is used to store integer values." },

        { question: "Which data type is used to store a single character in C?", options: [ "string", "char", "character", "int" ], answer: 1, explanation: "The char data type stores a single character." },

        { question: "Which data type is commonly used to store decimal values in C?", options: [ "int", "float", "char", "void" ], answer: 1, explanation: "float is commonly used for storing decimal or floating-point values." },

        { question: "Which of the following generally provides greater precision than float?", options: [ "char", "int", "double", "void" ], answer: 2, explanation: "double generally provides greater precision than float." },

        { question: "The void data type in C represents:", options: [ "An integer value", "A character value", "No value or no type", "A decimal value" ], answer: 2, explanation: "void represents the absence of a value or type." },

        { question: "Storage classes in C determine:", options: [ "Only the color of variables", "Scope, lifetime and storage behavior of variables", "Only the value of variables", "Only the data type of variables" ], answer: 1, explanation: "Storage classes determine properties such as scope, lifetime and storage behavior." },

        { question: "Which of the following is a storage class in C?", options: [ "automatic", "decimal", "character", "expression" ], answer: 0, explanation: "auto (automatic), extern, static and register are storage classes in C." },

        { question: "The auto storage class is generally used for:", options: [ "Automatic local variables", "Global variables only", "Constants only", "Functions only" ], answer: 0, explanation: "The auto storage class is generally associated with automatic local variables." },

        { question: "A variable declared with static storage class generally retains its value:", options: [ "Only during one expression", "Between function calls", "Only inside a loop iteration", "Only during compilation" ], answer: 1, explanation: "A static local variable retains its value between function calls." },

        { question: "The extern storage class is mainly used to:", options: [ "Declare an external variable defined elsewhere", "Create a constant", "Create a loop", "Store characters" ], answer: 0, explanation: "extern is used to refer to a variable or function defined elsewhere." }

        ],

    "Operators and Expressions": [

        { question: "An operator in C is a symbol that:", options: [ "Stores a program permanently", "Performs an operation on operands", "Creates only variables", "Ends every program" ], answer: 1, explanation: "Operators perform operations on one or more operands." },

        { question: "Which of the following is an arithmetic operator?", options: [ "&&", "+", ">", "=" ], answer: 1, explanation: "+ is an arithmetic operator." },

        { question: "Which operator gives the remainder after division?", options: [ "/", "%", "*", "+" ], answer: 1, explanation: "The modulus operator % gives the remainder of integer division." },

        { question: "Which operator is used for multiplication in C?", options: [ "x", "×", "*", "%" ], answer: 2, explanation: "* is the multiplication operator in C." },

        { question: "The expression 10 % 3 evaluates to:", options: [ "3", "1", "0", "10" ], answer: 1, explanation: "10 divided by 3 leaves a remainder of 1." },

        { question: "Which of the following is a unary operator?", options: [ "+", "*", "++", "%" ], answer: 2, explanation: "++ operates on a single operand and is a unary operator." },

        { question: "What does the ++ operator do?", options: [ "Decreases a value by 1", "Increases a value by 1", "Multiplies by 2", "Divides by 2" ], answer: 1, explanation: "The increment operator ++ increases its operand by 1." },

        { question: "What does the -- operator do?", options: [ "Increases a value by 2", "Decreases a value by 1", "Multiplies by -1", "Assigns zero" ], answer: 1, explanation: "The decrement operator -- decreases its operand by 1." },

        { question: "Which of the following is a relational operator?", options: [ "==", "+=", "&&", "!" ], answer: 0, explanation: "== compares two values for equality." },

        { question: "Which operator checks whether two values are equal?", options: [ "=", "==", "!=", ">=" ], answer: 1, explanation: "= is assignment, while == is the equality comparison operator." },

        { question: "Which operator checks whether two values are NOT equal?", options: [ "==", "=", "!=", "<=" ], answer: 2, explanation: "!= checks whether two operands are not equal." },

        { question: "Which of the following is a logical operator?", options: [ "%", "&&", "+", ">" ], answer: 1, explanation: "&& is the logical AND operator." },

        { question: "The logical AND operator in C is:", options: [ "&", "&&", "||", "!" ], answer: 1, explanation: "&& is the logical AND operator." },

        { question: "The logical OR operator in C is:", options: [ "|", "||", "&&", "!" ], answer: 1, explanation: "|| is the logical OR operator." },

        { question: "The logical NOT operator in C is:", options: [ "~", "!", "&&", "!=" ], answer: 1, explanation: "! is the logical NOT operator." },

        { question: "Which operator is used to assign a value to a variable?", options: [ "==", "=", "+", "!=" ], answer: 1, explanation: "= is the assignment operator." },

        { question: "Which of the following is a compound assignment operator?", options: [ "==", "+=", "&&", ">" ], answer: 1, explanation: "+= adds a value to a variable and assigns the result back to it." },

        { question: "The statement x += 5 is equivalent to:", options: [ "x = 5", "x = x + 5", "x = x * 5", "x = x - 5" ], answer: 1, explanation: "x += 5 means x = x + 5." },

        { question: "The statement x *= 3 is equivalent to:", options: [ "x = x + 3", "x = x - 3", "x = x * 3", "x = x / 3" ], answer: 2, explanation: "x *= 3 multiplies x by 3 and stores the result in x." },

        { question: "Which operator is known as the conditional or ternary operator?", options: [ "::", "?:", "&&", "==" ], answer: 1, explanation: "The ?: operator is called the conditional or ternary operator." },

        { question: "The conditional operator has how many operands?", options: [ "One", "Two", "Three", "Four" ], answer: 2, explanation: "The conditional operator ?: is the only commonly used ternary operator in C." },

        { question: "Which expression has the highest priority among these in normal C precedence?", options: [ "a + b", "a * b", "a == b", "(a + b)" ], answer: 3, explanation: "Parentheses explicitly force evaluation of the enclosed expression first." },

        { question: "Operator precedence determines:", options: [ "The size of variables", "The order in which operators are evaluated", "The number of variables", "The storage class" ], answer: 1, explanation: "Precedence determines which operators are evaluated first in an expression." },

        { question: "Operator associativity determines:", options: [ "The data type of an expression", "The evaluation direction when operators have equal precedence", "The size of memory", "The value of a variable before execution" ], answer: 1, explanation: "Associativity resolves evaluation order when operators have the same precedence." },

        { question: "What is the result of 2 + 3 * 4?", options: [ "20", "14", "24", "18" ], answer: 1, explanation: "Multiplication has higher precedence than addition, so 3 * 4 = 12 and 2 + 12 = 14." },

        { question: "What is the result of (2 + 3) * 4?", options: [ "14", "20", "24", "9" ], answer: 1, explanation: "Parentheses are evaluated first, so (2 + 3) * 4 = 20." },

        { question: "Which operator generally has higher precedence?", options: [ "+", "*", "=", "==" ], answer: 1, explanation: "Multiplication has higher precedence than addition, assignment and equality comparison." }

        ],

    "Control Structures - Loops": [

        { question: "Control structures are used to:", options: [ "Change the monitor brightness", "Control the flow of execution of a program", "Only declare variables", "Only create functions" ], answer: 1, explanation: "Control structures determine the order in which program statements execute." },

        { question: "Which statement is used for decision making in C?", options: [ "if", "goto only", "sizeof", "typedef" ], answer: 0, explanation: "The if statement is used for conditional decision making." },

        { question: "The if statement executes its block when:", options: [ "The condition is true", "The condition is always false", "The program starts", "The compiler stops" ], answer: 0, explanation: "The statements inside an if block execute when its condition evaluates to true." },

        { question: "Which statement provides an alternative block when an if condition is false?", options: [ "else", "while", "continue", "return" ], answer: 0, explanation: "The else block executes when the associated if condition is false." },

        { question: "Which loop checks its condition before executing the loop body?", options: [ "do-while only", "while", "switch", "goto" ], answer: 1, explanation: "A while loop is an entry-controlled loop because the condition is checked before the body executes." },

        { question: "Which loop guarantees that its body executes at least once?", options: [ "for", "while", "do-while", "if" ], answer: 2, explanation: "A do-while loop checks its condition after executing its body." },

        { question: "Which of the following is an entry-controlled loop?", options: [ "do-while", "while", "Neither", "Both only after execution" ], answer: 1, explanation: "The while loop checks its condition before executing the body." },

        { question: "Which of the following is an exit-controlled loop?", options: [ "for", "while", "do-while", "if" ], answer: 2, explanation: "The do-while loop checks its condition after the body executes." },

        { question: "Which loop is commonly preferred when the number of iterations is known?", options: [ "for", "switch", "if", "else" ], answer: 0, explanation: "A for loop conveniently combines initialization, condition and update when iterations are known." },

        { question: "Which of the following is the correct general structure of a for loop?", options: [ "for(condition)", "for(initialization; condition; update)", "for(initialization, condition)", "for(condition; update)" ], answer: 1, explanation: "A standard for loop contains initialization, condition and update expressions." },

        { question: "What happens when a while loop condition is initially false?", options: [ "The body executes once", "The body does not execute", "The body executes twice", "The program automatically stops" ], answer: 1, explanation: "A while loop checks the condition before executing its body." },

        { question: "What happens when a do-while loop condition is initially false?", options: [ "The body never executes", "The body executes once", "The body executes twice", "The compiler gives an error" ], answer: 1, explanation: "A do-while loop executes its body first and checks the condition afterward." },

        { question: "A nested loop means:", options: [ "A loop without a condition", "A loop inside another loop", "A loop with only one iteration", "A loop using switch" ], answer: 1, explanation: "A nested loop is a loop placed inside another loop." },

        { question: "Which loop is most commonly used for iterating through a fixed range of values?", options: [ "for", "switch", "if", "break" ], answer: 0, explanation: "for loops are commonly used for fixed or count-controlled iteration." },

        { question: "Which loop condition can create an infinite loop?", options: [ "A condition that eventually becomes false", "A condition that always remains true", "A condition using <", "A condition using ==" ], answer: 1, explanation: "If the condition never becomes false, the loop can continue indefinitely." },

        { question: "What does the following loop represent? while(condition) { statements; }", options: [ "Selection structure", "Entry-controlled loop", "Exit-controlled loop", "Switch structure" ], answer: 1, explanation: "The condition is checked before entering the while loop body." },

        { question: "What does the update expression in a for loop generally do?", options: [ "Declares a new function", "Changes the loop control variable", "Ends the program immediately", "Creates a switch case" ], answer: 1, explanation: "The update expression usually changes the loop control variable after each iteration." },

        { question: "Which statement is typically used to stop loop repetition based on a condition?", options: [ "The loop condition", "A character constant", "A data type", "A storage class" ], answer: 0, explanation: "The loop condition controls whether another iteration occurs." }

        ],

    "Control Structures - Switch, Break and Continue": [

        { question: "The switch statement is mainly used for:", options: [ "Multiple selection based on an expression", "Repeating a loop only", "Declaring variables", "Creating arrays only" ], answer: 0, explanation: "switch provides multi-way selection based on the value of an expression." },

        { question: "Which keyword is used to define alternatives inside a switch statement?", options: [ "case", "while", "continue", "typedef" ], answer: 0, explanation: "case labels define alternatives in a switch statement." },

        { question: "Which part of a switch statement handles values that match no case?", options: [ "break", "default", "continue", "return" ], answer: 1, explanation: "The default section executes when no case matches." },

        { question: "What is the main purpose of break inside a switch statement?", options: [ "Repeat the switch", "Exit the switch statement", "Restart the current case", "Declare a new case" ], answer: 1, explanation: "break terminates the switch and transfers control after it." },

        { question: "If break is omitted between switch cases, what may occur?", options: [ "The program always stops", "Fall-through to subsequent cases", "The compiler always deletes the case", "The switch becomes a loop" ], answer: 1, explanation: "Without break, execution may continue into the statements of following cases." },

        { question: "The default case in a switch statement is:", options: [ "Mandatory in every switch", "Executed when no case matches", "Always executed first", "A loop condition" ], answer: 1, explanation: "default handles situations where none of the case labels match." },

        { question: "Which statement immediately terminates the nearest loop?", options: [ "continue", "break", "default", "case" ], answer: 1, explanation: "break immediately exits the nearest enclosing loop or switch." },

        { question: "Which statement skips the remaining statements of the current loop iteration?", options: [ "break", "continue", "return", "default" ], answer: 1, explanation: "continue skips the remaining statements in the current iteration and proceeds to the next iteration." },

        { question: "In a for loop, continue generally transfers control to:", options: [ "The beginning of the entire program", "The update expression", "The previous loop", "The default case" ], answer: 1, explanation: "In a for loop, continue causes control to move to the update expression and then the condition is checked." },

        { question: "In a while loop, continue causes control to:", options: [ "Exit the program", "Move toward the next condition check", "Execute the default case", "Restart compilation" ], answer: 1, explanation: "continue skips the remaining body statements and control proceeds to the loop's next condition check." },

        { question: "Which statement can be used inside both loops and switch statements to exit them?", options: [ "break", "case", "default", "else" ], answer: 0, explanation: "break can terminate the nearest enclosing loop or switch." },

        { question: "Which control structure is generally suitable for menu-driven programs?", options: [ "switch-case", "do-while only", "if only", "typedef" ], answer: 0, explanation: "switch-case is commonly used for menu-based multiple-choice program flow." },

        { question: "Which keyword is associated with skipping an iteration rather than terminating a loop?", options: [ "break", "continue", "default", "case" ], answer: 1, explanation: "continue skips the current iteration, while break terminates the nearest loop." },

        { question: "What is the primary difference between break and continue?", options: [ "They are identical", "break exits the loop while continue skips the current iteration", "continue exits the program", "break only works in if statements" ], answer: 1, explanation: "break terminates the nearest loop or switch, while continue skips the remaining statements of the current iteration." },

        { question: "Which of the following is a valid switch component?", options: [ "case", "semester", "storage", "identifier only" ], answer: 0, explanation: "case labels are used to specify possible values in a switch statement." },

        { question: "A switch statement is an example of:", options: [ "Multi-way selection", "Only repetition", "Only recursion", "Storage allocation" ], answer: 0, explanation: "switch performs multi-way selection based on an expression." }

        ]

  },

  "Basic Electrical Engineering": {

    "Kirchhoff's Laws": [

        { question: "Kirchhoff's Current Law (KCL) is based on the conservation of:", options: [ "Energy", "Charge", "Power", "Voltage" ], answer: 1, explanation: "KCL is based on conservation of electric charge." },

        { question: "According to Kirchhoff's Current Law, at any node:", options: [ "Sum of voltages is zero", "Sum of currents entering equals sum of currents leaving", "All currents are equal", "Power is always zero" ], answer: 1, explanation: "The algebraic sum of currents at a node is zero, meaning total current entering equals total current leaving." },

        { question: "Kirchhoff's Current Law is mainly applied at a:", options: [ "Loop", "Mesh", "Node or junction", "Resistor" ], answer: 2, explanation: "KCL is applied at nodes or junctions where multiple branches meet." },

        { question: "If 5 A and 3 A enter a node and one current leaves the node, the leaving current is:", options: [ "2 A", "8 A", "15 A", "3 A" ], answer: 1, explanation: "By KCL, total entering current equals total leaving current, so 5 + 3 = 8 A." },

        { question: "The algebraic sum of all currents at a node according to KCL is:", options: [ "1", "Infinite", "Zero", "Equal to voltage" ], answer: 2, explanation: "The algebraic sum of currents entering and leaving a node is zero." },

        { question: "Kirchhoff's Voltage Law (KVL) is based on conservation of:", options: [ "Charge", "Energy", "Current", "Resistance" ], answer: 1, explanation: "KVL follows the principle of conservation of energy." },

        { question: "According to Kirchhoff's Voltage Law, the algebraic sum of voltages around a closed loop is:", options: [ "Equal to current", "Zero", "Always positive", "Infinite" ], answer: 1, explanation: "The total voltage rises and drops around any closed loop must add to zero." },

        { question: "KVL is mainly applied to a:", options: [ "Node", "Junction", "Closed loop", "Current source only" ], answer: 2, explanation: "KVL relates voltages around a closed path or loop." },

        { question: "A voltage rise of 10 V and voltage drops of 4 V and 6 V satisfy:", options: [ "KCL only", "KVL", "Ohm's law only", "None" ], answer: 1, explanation: "The voltage rise equals the total voltage drop: 10 - 4 - 6 = 0." },

        { question: "When traversing a resistor in the direction of current, the potential change is generally considered a:", options: [ "Voltage rise", "Voltage drop", "Current rise", "Power source" ], answer: 1, explanation: "Moving through a resistor in the direction of current results in a voltage drop." },

        { question: "Which law is more directly useful for writing equations involving branch currents meeting at a junction?", options: [ "Ohm's law", "KCL", "KVL", "Thevenin's theorem" ], answer: 1, explanation: "KCL directly relates currents at a junction." },

        { question: "Which law is more directly useful for analysing voltage drops around a closed circuit path?", options: [ "KCL", "KVL", "Norton's theorem", "Superposition theorem" ], answer: 1, explanation: "KVL relates all voltage rises and drops around a closed loop." },

        { question: "KCL and KVL are applicable to electrical networks because they are based on conservation principles of:", options: [ "Mass and momentum", "Charge and energy", "Resistance and power", "Voltage and current only" ], answer: 1, explanation: "KCL follows conservation of charge and KVL follows conservation of energy." }

        ],

    "Star-Delta Transformation": [

        { question: "Star-delta transformation is mainly used to:", options: [ "Increase voltage", "Simplify complex resistor networks", "Generate power", "Measure current" ], answer: 1, explanation: "Star-delta transformation helps simplify networks that cannot be reduced directly using simple series and parallel combinations." },

        { question: "A star network is also commonly called a:", options: [ "Y network", "T network only", "Mesh network", "Bridge network" ], answer: 0, explanation: "A star-connected network is commonly represented by the letter Y." },

        { question: "A delta network is commonly represented by the symbol:", options: [ "Y", "Δ", "Ω", "λ" ], answer: 1, explanation: "A delta-connected network has a triangular configuration represented by Δ." },

        { question: "How many terminals are involved in a standard star or delta network transformation?", options: [ "Two", "Three", "Four", "Six" ], answer: 1, explanation: "Star and delta networks connect three external terminals." },

        { question: "In a star network, the three resistances are connected to:", options: [ "Three separate batteries", "A common central point", "Only one terminal", "A parallel source" ], answer: 1, explanation: "The three star resistances meet at a common central node." },

        { question: "In a delta network, the resistances form:", options: [ "A straight line", "A triangular closed network", "A single loop with one resistor", "A common central point" ], answer: 1, explanation: "The three delta resistances form a triangular network." },

        { question: "Star-delta transformation preserves the electrical behavior seen from:", options: [ "Only the central point", "The three external terminals", "Only one resistor", "The voltage source only" ], answer: 1, explanation: "Equivalent star and delta networks have the same resistance behavior between their three external terminals." },

        { question: "Star-delta transformation is especially useful when a circuit cannot be simplified directly using:", options: [ "Ohm's law", "Series and parallel combinations", "Voltage sources", "Current meters" ], answer: 1, explanation: "It is commonly used when bridge-like resistor arrangements prevent direct series-parallel reduction." },

        { question: "In delta-to-star conversion, a star resistance is proportional to:", options: [ "The product of two adjacent delta resistances", "The sum of all currents", "Only the largest delta resistance", "The supply voltage" ], answer: 0, explanation: "Each star resistance is obtained using the product of the two delta resistances connected to that terminal divided by the sum of all delta resistances." },

        { question: "For delta-to-star conversion, the denominator used in calculating each star resistance is:", options: [ "Product of all delta resistances", "Sum of all delta resistances", "Supply voltage", "Current through the network" ], answer: 1, explanation: "Each delta-to-star formula uses the sum of all three delta resistances in the denominator." },

        { question: "For a balanced delta network where all three resistances are equal to R, each equivalent star resistance is:", options: [ "R", "R/3", "3R", "R/2" ], answer: 1, explanation: "For a balanced delta, each equivalent star resistance is R/3." },

        { question: "For a balanced star network where each resistance is R, each equivalent delta resistance is:", options: [ "R/3", "R", "3R", "R²" ], answer: 2, explanation: "For a balanced star, each equivalent delta branch resistance is 3R." }

        ],

    "Network Theorems": [

        { question: "The superposition theorem is applicable to:", options: [ "Linear circuits with multiple independent sources", "Only circuits with one source", "Nonlinear circuits only", "Mechanical systems only" ], answer: 0, explanation: "Superposition is used in linear networks containing two or more independent sources." },

        { question: "According to superposition theorem, the response in a linear circuit is found by:", options: [ "Adding all resistances", "Considering one independent source at a time and adding individual responses", "Removing all resistors", "Using only the largest source" ], answer: 1, explanation: "Each independent source acts separately while the effects of all sources are added algebraically." },

        { question: "While applying superposition, an ideal independent voltage source is deactivated by replacing it with a:", options: [ "Short circuit", "Open circuit", "Resistor", "Current source" ], answer: 0, explanation: "An ideal voltage source has zero internal resistance, so when deactivated it is replaced by a short circuit." },

        { question: "While applying superposition, an ideal independent current source is deactivated by replacing it with a:", options: [ "Short circuit", "Open circuit", "Voltage source", "Resistor of zero value" ], answer: 1, explanation: "An ideal current source has infinite internal resistance, so it is replaced by an open circuit." },

        { question: "Dependent sources are generally:", options: [ "Turned off during superposition", "Kept active during superposition", "Always replaced by a short circuit", "Removed from the circuit" ], answer: 1, explanation: "Dependent sources depend on circuit variables and remain active during superposition analysis." },

        { question: "Superposition theorem can directly calculate:", options: [ "Voltage and current responses", "Power only", "Resistance only", "Temperature only" ], answer: 0, explanation: "Superposition is directly applied to linear quantities such as voltages and currents." },

        { question: "Why is superposition not directly applied to power?", options: [ "Power is always zero", "Power is a nonlinear function of voltage or current", "Power does not depend on current", "Power is not measurable" ], answer: 1, explanation: "Since P = I²R or V²/R, power depends nonlinearly on voltage or current." },


        { question: "Thevenin's theorem replaces a linear two-terminal network by:", options: [ "A current source and parallel resistance", "A voltage source and series resistance", "Only a resistance", "Only a capacitor" ], answer: 1, explanation: "The Thevenin equivalent consists of Vth in series with Rth." },

        { question: "The Thevenin voltage Vth is equal to the:", options: [ "Short-circuit current", "Open-circuit voltage across the output terminals", "Total power", "Load resistance" ], answer: 1, explanation: "Vth is the open-circuit voltage measured across the two terminals." },

        { question: "The Thevenin resistance Rth is the equivalent resistance seen from the output terminals after:", options: [ "Removing all resistors", "Deactivating independent sources", "Increasing the load", "Adding another source" ], answer: 1, explanation: "Independent sources are deactivated when finding equivalent Thevenin resistance." },

        { question: "Thevenin's theorem is useful because it:", options: [ "Makes a complex network easier to analyse for different loads", "Eliminates all current", "Removes the need for Ohm's law", "Only works with AC circuits" ], answer: 0, explanation: "Once reduced to a Thevenin equivalent, different load values can be analysed easily." },


        { question: "Norton's theorem replaces a linear two-terminal network by:", options: [ "A voltage source in series with resistance", "A current source in parallel with resistance", "Only a voltage source", "A capacitor in series with a resistor" ], answer: 1, explanation: "The Norton equivalent consists of a current source IN in parallel with RN." },

        { question: "The Norton current IN is equal to the:", options: [ "Open-circuit voltage", "Short-circuit current at the terminals", "Load voltage", "Total circuit resistance" ], answer: 1, explanation: "The Norton current is the current flowing when the output terminals are short-circuited." },

        { question: "The Norton resistance RN is equal to:", options: [ "The Thevenin resistance Rth", "The load resistance only", "Zero always", "The source voltage" ], answer: 0, explanation: "Thevenin and Norton equivalents have the same equivalent resistance." },

        { question: "The relationship between Thevenin voltage and Norton current is:", options: [ "Vth = IN × Rth", "Vth = IN / Rth", "Vth = Rth / IN", "Vth = IN + Rth" ], answer: 0, explanation: "The equivalent voltage source is obtained by multiplying Norton current by equivalent resistance." },

        { question: "Thevenin and Norton equivalents represent:", options: [ "Different physical laws", "Equivalent forms of the same two-terminal linear network", "Only AC circuits", "Only nonlinear circuits" ], answer: 1, explanation: "Both are different equivalent representations of the same external terminal behavior." },


        { question: "Maximum power transfer theorem determines the load condition for:", options: [ "Maximum voltage generation", "Maximum power delivered to the load", "Minimum source resistance", "Zero current" ], answer: 1, explanation: "The theorem determines the load resistance that receives maximum power from the network." },

        { question: "For a purely resistive DC network, maximum power is transferred when:", options: [ "RL = 0", "RL = Rth", "RL is infinite", "RL = 2Rth always" ], answer: 1, explanation: "For resistive DC networks, maximum power transfer occurs when load resistance equals Thevenin resistance." },

        { question: "At maximum power transfer in a DC resistive circuit, the load resistance is:", options: [ "Less than source resistance", "Equal to Thevenin resistance", "Always zero", "Always infinite" ], answer: 1, explanation: "The condition for maximum load power is RL = Rth." },

        { question: "At the maximum power transfer condition RL = Rth, the circuit efficiency is ideally:", options: [ "100%", "75%", "50%", "25%" ], answer: 2, explanation: "Equal resistance causes equal power dissipation in Rth and RL, giving 50% efficiency." },

        { question: "Which theorem is especially useful when the load resistance changes repeatedly?", options: [ "Thevenin's theorem", "Only KCL", "Only KVL", "Star-delta transformation only" ], answer: 0, explanation: "Thevenin's equivalent makes recalculating load current and voltage for different loads much easier." }

        ],

    "Step Response of RL and RC Circuits": [

        { question: "A step voltage is a voltage that changes suddenly from one value to another at a particular time.", options: [ "True", "False", "Only in AC circuits", "Only in transformers" ], answer: 0, explanation: "A step input represents an abrupt change in voltage or current, commonly applied at t = 0." },

        { question: "An RL circuit contains:", options: [ "Resistance and inductance", "Resistance and capacitance", "Only inductance", "Only resistance" ], answer: 0, explanation: "An RL circuit consists of resistance R and inductance L." },

        { question: "An RC circuit contains:", options: [ "Resistance and inductance", "Resistance and capacitance", "Only capacitance", "Only resistance" ], answer: 1, explanation: "An RC circuit consists of resistance R and capacitance C." },

        { question: "In an RL circuit, an inductor opposes sudden changes in:", options: [ "Voltage", "Current", "Resistance", "Power" ], answer: 1, explanation: "Current through an inductor cannot change instantaneously in an ideal circuit." },

        { question: "In an RC circuit, a capacitor opposes sudden changes in:", options: [ "Current only", "Voltage across the capacitor", "Resistance", "Inductance" ], answer: 1, explanation: "The voltage across an ideal capacitor cannot change instantaneously." },

        { question: "The time constant of an RL series circuit is:", options: [ "R/L", "L/R", "RC", "1/RC" ], answer: 1, explanation: "The RL time constant is τ = L/R seconds." },

        { question: "The time constant of an RC series circuit is:", options: [ "L/R", "R/L", "RC", "1/RC" ], answer: 2, explanation: "The RC time constant is τ = RC seconds." },

        { question: "The unit of time constant is:", options: [ "Ohm", "Farad", "Henry", "Second" ], answer: 3, explanation: "A time constant represents time and is measured in seconds." },

        { question: "In a DC RL circuit after a sufficiently long time, an ideal inductor behaves approximately as a:", options: [ "Open circuit", "Short circuit", "Current source", "Capacitor" ], answer: 1, explanation: "Under steady-state DC conditions, an ideal inductor has zero voltage drop and behaves like a short circuit." },

        { question: "In a DC RC circuit after a sufficiently long time, an ideal capacitor behaves approximately as a:", options: [ "Short circuit", "Open circuit", "Voltage source", "Inductor" ], answer: 1, explanation: "After charging fully in steady-state DC conditions, an ideal capacitor blocks DC and behaves as an open circuit." },

        { question: "During the growth of current in an RL circuit, the current changes:", options: [ "Instantaneously to its final value", "Exponentially toward its final value", "Randomly", "Linearly forever" ], answer: 1, explanation: "Current in a first-order RL circuit changes exponentially." },

        { question: "During charging of an RC circuit, capacitor voltage changes:", options: [ "Instantaneously to its final value", "Exponentially toward its final value", "Only linearly", "Never changes" ], answer: 1, explanation: "Capacitor voltage approaches its final value exponentially during charging." },

        { question: "After one time constant during a charging response, the response reaches approximately:", options: [ "0%", "36.8%", "63.2%", "100%" ], answer: 2, explanation: "For an exponential rise, approximately 63.2% of the final value is reached after one time constant." },

        { question: "After one time constant during exponential decay, approximately what percentage remains?", options: [ "100%", "63.2%", "36.8%", "0%" ], answer: 2, explanation: "An exponentially decaying quantity falls to approximately 36.8% of its initial value after one time constant." },

        { question: "After approximately five time constants, a first-order circuit is considered:", options: [ "At its initial condition", "Very close to steady state", "At exactly zero always", "Unstable" ], answer: 1, explanation: "After about 5τ, the response is considered practically at its final steady-state value." },

        { question: "Increasing the inductance L while keeping R constant causes the RL time constant to:", options: [ "Decrease", "Increase", "Become zero", "Remain unchanged" ], answer: 1, explanation: "Since τ = L/R, increasing L increases the time constant." },

        { question: "Increasing resistance R while keeping L constant causes the RL time constant to:", options: [ "Increase", "Decrease", "Remain unchanged", "Become infinite always" ], answer: 1, explanation: "Since τ = L/R, increasing R decreases the RL time constant." },

        { question: "Increasing capacitance C while keeping R constant causes the RC time constant to:", options: [ "Decrease", "Increase", "Become zero", "Remain unchanged" ], answer: 1, explanation: "Since τ = RC, increasing capacitance increases the time constant." },

        { question: "Increasing resistance R while keeping C constant causes the RC charging process to:", options: [ "Become faster", "Become slower", "Become instantaneous", "Stop completely" ], answer: 1, explanation: "Increasing R increases τ = RC, causing a slower response." }

        ],

    "Phasor Diagram & Waveform Factors": [

        { question: "A phasor is mainly used to represent a sinusoidal quantity by its:", options: [ "Frequency only", "Magnitude and phase angle", "Resistance only", "Power only" ], answer: 1, explanation: "A phasor represents the magnitude and phase relationship of a sinusoidal quantity." },

        { question: "Phasor diagrams are mainly useful in the analysis of:", options: [ "DC circuits only", "Sinusoidal AC circuits", "Mechanical circuits only", "Digital circuits only" ], answer: 1, explanation: "Phasors simplify the analysis of sinusoidal voltages and currents in AC circuits." },

        { question: "Two sinusoidal quantities having the same frequency can be compared using a phasor diagram based on their:", options: [ "Color", "Phase difference", "Physical size", "Resistance only" ], answer: 1, explanation: "Phasor diagrams clearly show the phase difference between sinusoidal quantities." },

        { question: "If voltage reaches its maximum value before current in an AC circuit, voltage is said to:", options: [ "Lag current", "Lead current", "Have zero phase", "Be independent of current" ], answer: 1, explanation: "A quantity that reaches the same point in its cycle earlier is said to lead." },

        { question: "If current reaches its maximum value after voltage, current is said to:", options: [ "Lead voltage", "Lag voltage", "Have infinite frequency", "Be independent of voltage" ], answer: 1, explanation: "Current is said to lag voltage when it reaches corresponding values later in the cycle." },

        { question: "The RMS value of a sinusoidal voltage is approximately equal to:", options: [ "0.707 times peak value", "Peak value divided by 0.707", "2 times peak value", "Equal to peak value" ], answer: 0, explanation: "For a sinusoidal waveform, Vrms = Vm/√2 ≈ 0.707Vm." },

        { question: "The RMS value of a sinusoidal current is:", options: [ "Im/√2", "2Im", "Im²", "Im/2π" ], answer: 0, explanation: "The RMS value of a sinusoidal current is Im/√2." },

        { question: "The form factor of a waveform is defined as the ratio of:", options: [ "Peak value to RMS value", "RMS value to average value", "Average value to peak value", "Frequency to voltage" ], answer: 1, explanation: "Form factor = RMS value / Average value." },

        { question: "The peak factor, also called crest factor, is the ratio of:", options: [ "Average value to RMS value", "Peak value to RMS value", "RMS value to peak value", "Frequency to peak value" ], answer: 1, explanation: "Peak factor = Maximum value / RMS value." },

        { question: "The peak factor of a sinusoidal waveform is approximately:", options: [ "1", "1.11", "1.414", "2" ], answer: 2, explanation: "For a sine wave, peak factor = √2 ≈ 1.414." },

        { question: "The form factor of a sinusoidal waveform is approximately:", options: [ "0.707", "1.11", "1.414", "2" ], answer: 1, explanation: "The form factor of a sine wave is approximately 1.11." },

        { question: "RMS value is important because it represents the equivalent:", options: [ "Frequency of DC", "Heating effect of a DC quantity", "Phase angle", "Maximum voltage only" ], answer: 1, explanation: "RMS value produces the same heating effect in a resistor as an equivalent DC value." },

        { question: "A phasor rotates at a constant angular velocity equal to the:", options: [ "Resistance", "Angular frequency", "Power factor", "RMS value" ], answer: 1, explanation: "A rotating phasor represents a sinusoidal waveform and rotates with angular frequency ω." }

        ],

    "AC Series and Parallel Circuits": [

        { question: "The opposition offered by a resistor to AC current is called:", options: [ "Reactance", "Resistance", "Impedance only", "Susceptance" ], answer: 1, explanation: "A resistor offers resistance to both AC and DC current." },

        { question: "The opposition offered by an inductor to AC current is called:", options: [ "Resistance", "Capacitive reactance", "Inductive reactance", "Conductance" ], answer: 2, explanation: "An inductor offers inductive reactance XL to alternating current." },

        { question: "Inductive reactance is given by:", options: [ "XL = 2πfL", "XL = 1/(2πfC)", "XL = R/L", "XL = RC" ], answer: 0, explanation: "Inductive reactance is XL = 2πfL." },

        { question: "Capacitive reactance is given by:", options: [ "XC = 2πfL", "XC = 1/(2πfC)", "XC = RC", "XC = R/L" ], answer: 1, explanation: "Capacitive reactance is XC = 1/(2πfC)." },

        { question: "As frequency increases, inductive reactance:", options: [ "Decreases", "Increases", "Remains zero", "Always remains constant" ], answer: 1, explanation: "Since XL = 2πfL, inductive reactance increases with frequency." },

        { question: "As frequency increases, capacitive reactance:", options: [ "Increases", "Decreases", "Becomes equal to resistance always", "Remains constant" ], answer: 1, explanation: "Since XC = 1/(2πfC), capacitive reactance decreases with frequency." },

        { question: "In a pure resistive AC circuit, voltage and current are:", options: [ "90° apart", "In phase", "180° apart", "Always unrelated" ], answer: 1, explanation: "In a purely resistive circuit, voltage and current are in phase." },

        { question: "In a pure inductive AC circuit, current:", options: [ "Leads voltage by 90°", "Lags voltage by 90°", "Is in phase with voltage", "Leads voltage by 180°" ], answer: 1, explanation: "Current lags voltage by 90° in a pure inductive circuit." },

        { question: "In a pure capacitive AC circuit, current:", options: [ "Lags voltage by 90°", "Leads voltage by 90°", "Is in phase", "Is always zero" ], answer: 1, explanation: "Current leads voltage by 90° in a pure capacitive circuit." },

        { question: "The total opposition offered to AC current in an RLC circuit is called:", options: [ "Resistance", "Reactance", "Impedance", "Conductance" ], answer: 2, explanation: "Impedance combines resistance and reactance in an AC circuit." },

        { question: "The unit of impedance is:", options: [ "Henry", "Farad", "Ohm", "Watt" ], answer: 2, explanation: "Impedance is measured in ohms (Ω)." },

        { question: "In a series circuit, the same quantity flows through all components:", options: [ "Voltage", "Current", "Power", "Resistance" ], answer: 1, explanation: "The same current flows through every component connected in series." },

        { question: "In a parallel circuit, the same quantity appears across every branch:", options: [ "Current", "Voltage", "Resistance", "Power factor" ], answer: 1, explanation: "Every branch in a parallel circuit has the same voltage across it." },

        { question: "In a series RL circuit, the current generally:", options: [ "Leads voltage", "Lags voltage", "Is always in phase", "Has zero value" ], answer: 1, explanation: "The inductive effect causes current to lag voltage in an RL circuit." },

        { question: "In a series RC circuit, the current generally:", options: [ "Lags voltage", "Leads voltage", "Is always zero", "Is independent of voltage" ], answer: 1, explanation: "The capacitive effect causes current to lead voltage in an RC circuit." }

        ],

    "AC Power & Power Factor": [

        { question: "The average power consumed in an AC circuit is called:", options: [ "Reactive power", "Active power", "Apparent power", "Maximum power" ], answer: 1, explanation: "Active or real power is the average power actually consumed by the circuit." },

        { question: "Active power in an AC circuit is measured in:", options: [ "VAR", "VA", "Watt", "Ohm" ], answer: 2, explanation: "Real or active power is measured in watts." },

        { question: "Reactive power is measured in:", options: [ "Watt", "VAR", "VA", "Ohm" ], answer: 1, explanation: "Reactive power is measured in volt-amperes reactive (VAR)." },

        { question: "Apparent power is measured in:", options: [ "Watt", "VAR", "VA", "Joule" ], answer: 2, explanation: "Apparent power is measured in volt-amperes (VA)." },

        { question: "Active power is given by:", options: [ "P = VI", "P = VI cosφ", "P = VI sinφ", "P = V/I" ], answer: 1, explanation: "For an AC circuit, active power P = VI cosφ." },

        { question: "Reactive power is given by:", options: [ "Q = VI cosφ", "Q = VI sinφ", "Q = V/I", "Q = I/R" ], answer: 1, explanation: "Reactive power is Q = VI sinφ." },

        { question: "Apparent power is given by:", options: [ "S = VI", "S = VI cosφ", "S = VI sinφ", "S = V/R" ], answer: 0, explanation: "Apparent power is the product of RMS voltage and RMS current." },

        { question: "Power factor is equal to:", options: [ "sinφ", "cosφ", "tanφ", "1/cosφ" ], answer: 1, explanation: "Power factor is defined as cosφ, where φ is the phase angle between voltage and current." },

        { question: "Power factor is the ratio of:", options: [ "Reactive power to apparent power", "Active power to apparent power", "Apparent power to active power", "Voltage to current" ], answer: 1, explanation: "Power factor = Active Power / Apparent Power = cosφ." },

        { question: "The power factor of a purely resistive circuit is:", options: [ "0", "0.5", "1", "-1" ], answer: 2, explanation: "Voltage and current are in phase in a resistive circuit, so cos0° = 1." },

        { question: "An inductive load generally has:", options: [ "Leading power factor", "Lagging power factor", "Unity power factor always", "Negative resistance" ], answer: 1, explanation: "Current lags voltage in inductive loads, producing lagging power factor." },

        { question: "A capacitive load generally has:", options: [ "Lagging power factor", "Leading power factor", "Zero power factor only", "Unity power factor always" ], answer: 1, explanation: "Current leads voltage in capacitive loads, producing leading power factor." },

        { question: "At unity power factor, the phase angle between voltage and current is:", options: [ "90°", "45°", "0°", "180°" ], answer: 2, explanation: "Unity power factor means cosφ = 1, therefore φ = 0°." },

        { question: "A low power factor generally causes:", options: [ "Lower current for same power", "Higher current for same power", "Zero voltage", "Zero resistance" ], answer: 1, explanation: "For the same real power, lower power factor requires more current." },

        { question: "Power factor correction is commonly performed using capacitors for:", options: [ "Capacitive loads", "Inductive loads", "Pure resistors only", "DC batteries only" ], answer: 1, explanation: "Capacitors provide leading reactive power and help compensate lagging inductive loads." },

        { question: "The relationship between apparent, active and reactive power forms a:", options: [ "Power triangle", "Resistance triangle", "Voltage divider", "Current source" ], answer: 0, explanation: "Active power, reactive power and apparent power are represented using a power triangle." }

        ],

    "Resonance in Circuits": [

        { question: "Resonance in an RLC circuit occurs when:", options: [ "R = 0", "XL = XC", "XL > XC always", "XC = 0" ], answer: 1, explanation: "Resonance occurs when inductive reactance equals capacitive reactance." },

        { question: "At resonance, the net reactance of an ideal RLC circuit is:", options: [ "Maximum", "Zero", "Infinite always", "Equal to resistance" ], answer: 1, explanation: "When XL = XC, the inductive and capacitive reactances cancel." },

        { question: "The resonant frequency of an LC circuit is:", options: [ "1/(2π√LC)", "2π√LC", "L/C", "R/L" ], answer: 0, explanation: "The resonant frequency is f₀ = 1/(2π√LC)." },

        { question: "At resonance in a series RLC circuit, impedance is:", options: [ "Maximum", "Minimum", "Infinite", "Equal to capacitive reactance" ], answer: 1, explanation: "At resonance, reactances cancel and impedance becomes minimum, ideally equal to R." },

        { question: "At resonance in a series RLC circuit, current is:", options: [ "Minimum", "Maximum", "Always zero", "Independent of voltage" ], answer: 1, explanation: "Minimum impedance causes maximum current in a series resonant circuit." },

        { question: "At resonance, the power factor of a series RLC circuit is ideally:", options: [ "0", "0.5", "1", "-1" ], answer: 2, explanation: "At resonance, voltage and current are in phase, giving unity power factor." },

        { question: "At resonance in a series RLC circuit, the circuit behaves as:", options: [ "Purely inductive", "Purely capacitive", "Purely resistive", "An open circuit" ], answer: 2, explanation: "The inductive and capacitive effects cancel, leaving only resistance." },

        { question: "Below the resonant frequency, a series RLC circuit behaves predominantly:", options: [ "Inductively", "Capacitively", "Purely resistively", "As an open circuit" ], answer: 1, explanation: "At lower frequencies, XL is smaller and XC is larger, so the circuit is predominantly capacitive." },

        { question: "Above the resonant frequency, a series RLC circuit behaves predominantly:", options: [ "Capacitively", "Inductively", "Purely resistively", "As a short circuit" ], answer: 1, explanation: "At higher frequencies, XL becomes larger than XC, giving inductive behavior." },

        { question: "If inductance L increases while capacitance remains constant, resonant frequency:", options: [ "Increases", "Decreases", "Remains unchanged", "Becomes infinite" ], answer: 1, explanation: "Since f₀ = 1/(2π√LC), increasing L decreases resonant frequency." },

        { question: "If capacitance C increases while inductance remains constant, resonant frequency:", options: [ "Increases", "Decreases", "Remains unchanged", "Becomes zero resistance" ], answer: 1, explanation: "Increasing C increases √LC and therefore decreases resonant frequency." },

        { question: "The condition XL = XC means:", options: [ "No current flows", "Inductive and capacitive effects cancel", "Resistance becomes zero", "Voltage becomes zero" ], answer: 1, explanation: "Equal and opposite inductive and capacitive reactances cancel each other." }

        ],

    "Balanced Three-Phase Circuits": [

        { question: "A balanced three-phase system consists of:", options: [ "Two equal voltages", "Three equal sinusoidal voltages separated by 120°", "Three DC sources", "One voltage and two currents" ], answer: 1, explanation: "Balanced three-phase voltages have equal magnitudes and are separated by 120 electrical degrees." },

        { question: "The phase difference between successive phase voltages in a balanced three-phase system is:", options: [ "60°", "90°", "120°", "180°" ], answer: 2, explanation: "The three balanced phase voltages are separated by 120°." },

        { question: "The two common three-phase connections are:", options: [ "Series and parallel", "Star and delta", "RL and RC", "AC and DC" ], answer: 1, explanation: "Three-phase loads are commonly connected in star (Y) or delta (Δ)." },

        { question: "In a balanced star-connected system, line voltage VL is related to phase voltage Vph by:", options: [ "VL = Vph", "VL = √3 Vph", "VL = 3Vph", "VL = Vph/√3" ], answer: 1, explanation: "For a balanced star connection, VL = √3 Vph." },

        { question: "In a balanced star-connected system, line current IL is:", options: [ "√3 times phase current", "Equal to phase current", "Always zero", "Three times phase current" ], answer: 1, explanation: "In a star connection, IL = Iph." },

        { question: "In a balanced delta-connected system, line voltage VL is:", options: [ "Equal to phase voltage", "√3 times phase voltage", "Three times phase voltage", "Zero" ], answer: 0, explanation: "In a delta connection, each phase is directly connected across line voltage, so VL = Vph." },

        { question: "In a balanced delta-connected system, line current IL is:", options: [ "Equal to phase current", "√3 times phase current", "One-third of phase current", "Always zero" ], answer: 1, explanation: "For a balanced delta connection, IL = √3 Iph." },

        { question: "The total active power in a balanced three-phase system is:", options: [ "P = VI cosφ", "P = √3 VL IL cosφ", "P = VL/IL", "P = 3VLIL" ], answer: 1, explanation: "Total three-phase active power is P = √3 VL IL cosφ." },

        { question: "The total reactive power in a balanced three-phase circuit is:", options: [ "Q = √3 VL IL sinφ", "Q = VL IL cosφ", "Q = VI", "Q = R/L" ], answer: 0, explanation: "Three-phase reactive power is Q = √3 VL IL sinφ." },

        { question: "The apparent power of a balanced three-phase system is:", options: [ "S = √3 VL IL", "S = VL/IL", "S = VLILcosφ", "S = RIL²" ], answer: 0, explanation: "Three-phase apparent power is S = √3 VL IL." },

        { question: "A balanced three-phase load means:", options: [ "All phase impedances are equal", "All phase voltages are zero", "Only one phase operates", "Each phase has different impedance" ], answer: 0, explanation: "A balanced load has equal impedance in all three phases." },

        { question: "One major advantage of three-phase power systems is:", options: [ "No power transmission", "More uniform power transfer", "No current is required", "Only DC can be used" ], answer: 1, explanation: "Balanced three-phase systems provide nearly constant power transfer." },


        { question: "The two-wattmeter method is commonly used to measure total power in:", options: [ "Single-phase circuits only", "Three-phase three-wire circuits", "DC circuits only", "Battery circuits only" ], answer: 1, explanation: "The two-wattmeter method is widely used for measuring power in three-phase three-wire systems." },

        { question: "For a balanced three-phase load, total active power using the two-wattmeter method is:", options: [ "W1 - W2", "W1 + W2", "W1 × W2", "W1/W2" ], answer: 1, explanation: "The algebraic sum of the two wattmeter readings gives total active power." },

        { question: "If the power factor of a balanced load is unity, the two wattmeters in the two-wattmeter method generally show:", options: [ "Equal readings", "One positive and one negative reading", "Both zero", "Infinite readings" ], answer: 0, explanation: "At unity power factor, the two wattmeter readings are equal." },

        { question: "If one wattmeter reads zero in the two-wattmeter method, the power factor is approximately:", options: [ "1", "0.5", "0", "0.707" ], answer: 1, explanation: "One wattmeter becomes zero when the phase angle is 60°, corresponding to a power factor of cos60° = 0.5." },

        { question: "In the two-wattmeter method, one wattmeter may read negative when the power factor is:", options: [ "Greater than 1", "Less than 0.5", "Exactly 1", "Always zero" ], answer: 1, explanation: "For power factors below 0.5, one wattmeter can show a negative reading." },

        { question: "Three-phase power is commonly used for large motors mainly because it provides:", options: [ "No magnetic field", "Efficient and smooth power transfer", "Only low voltage", "No current flow" ], answer: 1, explanation: "Three-phase systems provide efficient power transmission and naturally produce a rotating magnetic field in motors." }

        ]

  },

},

semester3:{},

semester4:{},

semester5:{},

semester6:{},

semester7:{}

};