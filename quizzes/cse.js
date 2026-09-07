const quizData = {

semester1: {

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

  "Web Development": {

    "Internet & World Wide Web": [

        { question: "What is the Internet?", options: ["A single computer", "A global network of interconnected networks", "A web browser", "A programming language"], answer: 1, explanation: "The Internet is a global system of interconnected computer networks." },

        { question: "What does WWW stand for?", options: ["World Wide Web", "Web World Wide", "World Web Window", "Wide World Web"], answer: 0, explanation: "WWW stands for World Wide Web." },

        { question: "The World Wide Web is mainly used to access?", options: ["Hardware components", "Interlinked web pages and resources", "Only operating systems", "Only databases"], answer: 1, explanation: "The WWW provides access to interlinked web pages and resources." },

        { question: "Which organization provides users access to the Internet?", options: ["ISP", "CPU", "HTML", "URL"], answer: 0, explanation: "An ISP (Internet Service Provider) provides Internet access." },

        { question: "Which of the following is NOT an Internet service?", options: ["Email", "Web browsing", "File transfer", "CPU execution"], answer: 3, explanation: "CPU execution is a computer processing operation, not an Internet service." },

        { question: "What is a website?", options: ["A collection of related web pages", "A web browser", "A programming language", "A network cable"], answer: 0, explanation: "A website consists of related web pages usually identified by a common domain." },

        { question: "A web page is generally identified by a?", options: ["CPU address", "URL", "RAM address", "MAC processor"], answer: 1, explanation: "A web page is accessed using its Uniform Resource Locator (URL)." },

        { question: "Which technology is primarily used to structure web pages?", options: ["HTML", "CPU", "RAM", "HTTP"], answer: 0, explanation: "HTML is used to create and structure web page content." },

        { question: "Which of the following is an example of a web browser?", options: ["Google Chrome", "HTML", "HTTP", "DNS"], answer: 0, explanation: "Google Chrome is a web browser." },

        { question: "Which statement correctly describes the relationship between the Internet and WWW?", options: ["They are exactly the same", "WWW is one service that runs on the Internet", "Internet runs on WWW", "WWW is a type of CPU"], answer: 1, explanation: "The World Wide Web is a service that operates using the Internet." },

        { question: "Which of the following is used for creating web pages?", options: ["HTML", "SMTP only", "CPU", "BIOS"], answer: 0, explanation: "HTML is the standard markup language used for creating web pages." },

        { question: "A collection of linked pages available under one domain is called?", options: ["Website", "Browser", "Protocol", "Server cable"], answer: 0, explanation: "A website is a collection of related web pages." }

        ],

    "Internet Addressing & URL": [

        { question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Routing Language", "Unified Resource Locator"], answer: 0, explanation: "URL stands for Uniform Resource Locator." },

        { question: "Which of the following identifies a resource on the Web?", options: ["URL", "CPU", "RAM", "Keyboard"], answer: 0, explanation: "A URL specifies the location of a resource on the Web." },

        { question: "What does DNS stand for?", options: ["Domain Name System", "Data Network Service", "Digital Number System", "Domain Network Security"], answer: 0, explanation: "DNS stands for Domain Name System." },

        { question: "The main function of DNS is to?", options: ["Convert domain names into IP addresses", "Create HTML pages", "Store passwords", "Design websites"], answer: 0, explanation: "DNS translates human-readable domain names into IP addresses." },

        { question: "Which of the following is a domain name?", options: ["google.com", "192.168.1.1", "HTML", "HTTP"], answer: 0, explanation: "google.com is a domain name." },

        { question: "What is an IP address used for?", options: ["Identifying a device on a network", "Styling a web page", "Creating a table", "Writing CSS"], answer: 0, explanation: "An IP address identifies a device or network interface." },

        { question: "Which part of a URL specifies the communication protocol?", options: ["https", "example", ".com", "/page"], answer: 0, explanation: "The protocol part specifies how communication occurs, such as HTTP or HTTPS." },

        { question: "In the URL https://www.example.com/page, what is www.example.com?", options: ["Domain/host name", "Protocol", "File extension", "Query string"], answer: 0, explanation: "www.example.com represents the host or domain name." },

        { question: "Which protocol is commonly used for secure web communication?", options: ["HTTPS", "HTML", "CSS", "FTP"], answer: 0, explanation: "HTTPS provides encrypted communication using HTTP over TLS." },

        { question: "Which of the following is NOT a part commonly found in a URL?", options: ["Protocol", "Domain", "Path", "CPU"], answer: 3, explanation: "CPU is not a URL component." },

        { question: "A domain name is mainly used because?", options: ["It is easier for humans to remember than IP addresses", "It replaces HTML", "It creates hardware", "It increases RAM"], answer: 0, explanation: "Domain names provide human-readable addresses for Internet resources." },

        { question: "What does .com generally represent?", options: ["A top-level domain", "An IP address", "A protocol", "A browser"], answer: 0, explanation: ".com is a top-level domain (TLD)." }

        ],

    "Web Browsers, Servers & HTTP": [

        { question: "What is the primary function of a web browser?", options: ["Display and access web resources", "Create hardware", "Replace the Internet", "Compile operating systems"], answer: 0, explanation: "A browser requests, receives, and displays web resources." },

        { question: "Which of the following is a web browser?", options: ["Firefox", "Apache", "HTML", "HTTP"], answer: 0, explanation: "Firefox is a web browser." },

        { question: "What is a web server?", options: ["A system that stores and delivers web resources", "A type of keyboard", "A markup language", "A CSS property"], answer: 0, explanation: "A web server processes requests and delivers web resources to clients." },

        { question: "Which model is commonly used for web communication?", options: ["Client-server model", "Keyboard-monitor model", "CPU-RAM model", "Compiler-browser model"], answer: 0, explanation: "Web communication commonly follows the client-server architecture." },

        { question: "In the client-server model, a web browser acts as a?", options: ["Client", "Server", "Compiler", "Database only"], answer: 0, explanation: "The browser sends requests to servers and is therefore a client." },

        { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HighText Transfer Program", "Hyper Transfer Text Process", "Home Transfer Protocol"], answer: 0, explanation: "HTTP stands for HyperText Transfer Protocol." },

        { question: "HTTP is mainly used for?", options: ["Communication between web clients and servers", "Creating CPU hardware", "Formatting hard disks", "Writing CSS"], answer: 0, explanation: "HTTP defines communication between clients such as browsers and web servers." },

        { question: "A browser requesting a web page from a server is called?", options: ["Request", "Response", "Compilation", "Execution"], answer: 0, explanation: "The client sends a request to the server." },

        { question: "The data returned by a server after receiving a request is called?", options: ["Response", "Request", "Compiler", "Domain"], answer: 0, explanation: "The server sends a response back to the client." },

        { question: "Which HTTP method is commonly used to retrieve data?", options: ["GET", "DELETE", "POST", "PUT"], answer: 0, explanation: "GET is commonly used to request or retrieve resources." },

        { question: "Which HTTP method is commonly used to send data to a server?", options: ["POST", "GET", "VIEW", "RUN"], answer: 0, explanation: "POST is commonly used to submit data to a server." },

        { question: "Which component usually hosts website files?", options: ["Web server", "Mouse", "Keyboard", "Monitor"], answer: 0, explanation: "Website files are typically stored and served by a web server." }

        ],

    "HTML Fundamentals": [

        { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: 0, explanation: "HTML stands for HyperText Markup Language." },

        { question: "HTML is primarily a?", options: ["Markup language", "Operating system", "Database", "Web browser"], answer: 0, explanation: "HTML is a markup language used to structure web content." },

        { question: "Which tag represents the root element of an HTML document?", options: ["<html>", "<head>", "<body>", "<title>"], answer: 0, explanation: "The <html> element is the root element of an HTML document." },

        { question: "Which section contains metadata about an HTML document?", options: ["<head>", "<body>", "<footer>", "<main>"], answer: 0, explanation: "The <head> section contains metadata, links, and document information." },

        { question: "Which section contains the visible page content?", options: ["<body>", "<head>", "<title>", "<meta>"], answer: 0, explanation: "Content displayed in the browser is generally placed inside <body>." },

        { question: "Which tag defines the title shown on the browser tab?", options: ["<title>", "<h1>", "<head>", "<caption>"], answer: 0, explanation: "The <title> element defines the document title shown in the browser tab." },

        { question: "HTML tags are generally enclosed within?", options: ["Angle brackets <>", "Square brackets []", "Curly brackets {}", "Parentheses ()"], answer: 0, explanation: "HTML tags are written inside angle brackets." },

        { question: "Which HTML tag is used for the largest heading by default?", options: ["<h1>", "<h6>", "<p>", "<head>"], answer: 0, explanation: "<h1> represents the highest-level heading." },

        { question: "Which tag is used to create a paragraph?", options: ["<p>", "<para>", "<text>", "<paragraph>"], answer: 0, explanation: "The <p> tag defines a paragraph." },

        { question: "Which HTML element is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0, explanation: "The <a> anchor element is used to create hyperlinks." },

        { question: "Which attribute specifies the destination of a hyperlink?", options: ["href", "src", "alt", "style"], answer: 0, explanation: "The href attribute specifies the target URL of a link." },

        { question: "Which tag creates an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: 0, explanation: "<ul> creates an unordered list." },

        { question: "Which tag creates an ordered list?", options: ["<ol>", "<ul>", "<li>", "<order>"], answer: 0, explanation: "<ol> creates an ordered list." },

        { question: "Which tag represents a list item?", options: ["<li>", "<ul>", "<ol>", "<item>"], answer: 0, explanation: "<li> defines an individual list item." }

        ],

    "HTML Advanced Elements": [

        { question: "Which HTML tag is used to display an image?", options: ["<img>", "<image>", "<picturefile>", "<src>"], answer: 0, explanation: "The <img> element embeds an image in an HTML page." },

        { question: "Which attribute specifies the image file location?", options: ["src", "href", "alt", "title"], answer: 0, explanation: "The src attribute specifies the image source." },

        { question: "What is the purpose of the alt attribute in an image?", options: ["Provide alternative text", "Change image color", "Create a hyperlink", "Resize automatically"], answer: 0, explanation: "The alt attribute provides alternative text when an image cannot be displayed and improves accessibility." },

        { question: "Which HTML element is used to create a table?", options: ["<table>", "<tab>", "<tr>", "<td>"], answer: 0, explanation: "The <table> element defines an HTML table." },

        { question: "Which tag represents a table row?", options: ["<tr>", "<td>", "<th>", "<row>"], answer: 0, explanation: "<tr> defines a table row." },

        { question: "Which tag represents a standard table cell?", options: ["<td>", "<tr>", "<th>", "<table>"], answer: 0, explanation: "<td> defines a table data cell." },

        { question: "Which tag represents a table header cell?", options: ["<th>", "<td>", "<tr>", "<head>"], answer: 0, explanation: "<th> defines a table header cell." },

        { question: "Which HTML feature was historically used to display one HTML document inside another?", options: ["Frame", "Heading", "Paragraph", "List"], answer: 0, explanation: "Frames were historically used to divide the browser window and display documents separately." },

        { question: "What does DHTML commonly refer to?", options: ["Dynamic HTML", "Digital HTML", "Data HTML", "Double HTML"], answer: 0, explanation: "DHTML generally refers to Dynamic HTML techniques involving HTML, CSS, and JavaScript." },

        { question: "Which technologies are commonly associated with Dynamic HTML?", options: ["HTML, CSS and JavaScript", "Only HTML", "Only SQL", "Only C"], answer: 0, explanation: "DHTML combines HTML, CSS, and JavaScript to create dynamic web pages." },

        { question: "Which element is mainly used to organize tabular information?", options: ["<table>", "<ul>", "<div>", "<p>"], answer: 0, explanation: "The <table> element organizes data into rows and columns." },

        { question: "Which attribute is useful for describing an image for accessibility?", options: ["alt", "src", "href", "id"], answer: 0, explanation: "The alt attribute provides descriptive alternative text for an image." }

        ],

    "XML Fundamentals & DTD": [

        { question: "What does XML stand for?", options: ["eXtensible Markup Language", "Extra Markup Language", "Extended Machine Language", "Executable Markup Language"], answer: 0, explanation: "XML stands for eXtensible Markup Language." },

        { question: "The main purpose of XML is to?", options: ["Store and transport structured data", "Style web pages", "Replace all programming languages", "Create operating systems"], answer: 0, explanation: "XML is designed primarily to store and transport structured data." },

        { question: "Unlike HTML, XML allows users to?", options: ["Define custom tags", "Only use predefined tags", "Avoid all tags", "Run Java programs"], answer: 0, explanation: "XML allows developers to define custom elements and tags." },

        { question: "XML is case-sensitive. Which statement is correct?", options: ["<Name> and <name> are different", "<Name> and <name> are always identical", "XML ignores tag names", "XML has no tags"], answer: 0, explanation: "XML is case-sensitive, so tag names must match exactly." },

        { question: "In XML, every opening tag should generally have?", options: ["A corresponding closing tag", "A CSS file", "A database", "A browser"], answer: 0, explanation: "XML elements generally require properly matched opening and closing tags." },

        { question: "Which is a valid XML closing tag for <student>?", options: ["</student>", "<student/>", "<student>", "</>"], answer: 0, explanation: "</student> is the correct closing tag." },

        { question: "XML attributes are written?", options: ["Inside the opening tag", "After the closing tag", "Outside the document", "Only in CSS"], answer: 0, explanation: "Attributes are specified within an element's opening tag." },

        { question: "Which of the following is used to define the structure of an XML document?", options: ["DTD", "CSS", "HTTP", "HTML"], answer: 0, explanation: "DTD defines the legal structure and elements of an XML document." },

        { question: "What does DTD stand for?", options: ["Document Type Definition", "Data Type Document", "Digital Text Definition", "Document Transfer Data"], answer: 0, explanation: "DTD stands for Document Type Definition." },

        { question: "A DTD is mainly used to?", options: ["Define allowed XML elements and structure", "Style XML text", "Create databases", "Open web browsers"], answer: 0, explanation: "A DTD defines the valid structure and elements of an XML document." },

        { question: "Which statement about XML is correct?", options: ["It focuses mainly on describing data", "It is used only for styling", "It cannot contain attributes", "It is a web browser"], answer: 0, explanation: "XML is primarily concerned with representing and describing structured data." },

        { question: "Which feature is mandatory for a well-formed XML document?", options: ["Properly nested elements", "CSS styling", "JavaScript", "A web server"], answer: 0, explanation: "XML elements must be properly nested to form a well-formed document." }

        ],

    "CSS Fundamentals": [

        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Coded Style Sheets"], answer: 0, explanation: "CSS stands for Cascading Style Sheets." },

        { question: "The primary purpose of CSS is to?", options: ["Style and design web pages", "Store database records", "Replace HTML structure", "Create CPUs"], answer: 0, explanation: "CSS controls the presentation and appearance of HTML content." },

        { question: "Which technology is mainly used to structure a web page?", options: ["HTML", "CSS", "DNS", "HTTP"], answer: 0, explanation: "HTML provides the structure, while CSS provides styling." },

        { question: "Which technology is mainly used to style a web page?", options: ["CSS", "HTML", "URL", "XML"], answer: 0, explanation: "CSS is used for visual styling and layout." },

        { question: "Which symbol is used to start a CSS ID selector?", options: ["#", ".", "*", "&"], answer: 0, explanation: "The # symbol is used for an ID selector." },

        { question: "Which symbol is commonly used for a CSS class selector?", options: [".", "#", "@", "$"], answer: 0, explanation: "The dot (.) is used to select elements by class." },

        { question: "Which CSS property changes text color?", options: ["color", "background", "font-style", "border"], answer: 0, explanation: "The color property controls the text color." },

        { question: "Which CSS property changes the background color?", options: ["background-color", "color", "font-color", "text-color"], answer: 0, explanation: "background-color sets the background color of an element." },

        { question: "Which CSS property changes text size?", options: ["font-size", "text-size", "size", "font-style"], answer: 0, explanation: "font-size controls the size of text." },

        { question: "Which CSS property is used to make text bold?", options: ["font-weight", "font-size", "text-bold", "weight"], answer: 0, explanation: "font-weight controls the thickness or boldness of text." },

        { question: "Which CSS property adds space inside an element's border?", options: ["padding", "margin", "border", "outline"], answer: 0, explanation: "Padding creates space between the content and the border." },

        { question: "Which CSS property adds space outside an element?", options: ["margin", "padding", "border", "color"], answer: 0, explanation: "Margin creates space outside an element's border." },

        { question: "Which CSS concept allows styles to be applied with different priorities?", options: ["Cascade", "DNS", "HTTP", "XML"], answer: 0, explanation: "The cascading nature of CSS determines how conflicting styles are resolved." },

        { question: "Which of the following is a valid CSS declaration?", options: ["color: red;", "color = red;", "color -> red;", "color(red)"], answer: 0, explanation: "A CSS declaration follows the format property: value;" }

        ]

  },

  "Engineering Graphics": {

    "Lines, Lettering, Dimensioning & Scales": [

        { question: "Which type of line is generally used for visible outlines in engineering drawings?", options: ["Continuous thick line", "Dashed thin line", "Chain thin line", "Freehand line"], answer: 0, explanation: "Visible outlines are generally represented using continuous thick lines." },

        { question: "Which type of line is generally used to represent hidden edges?", options: ["Continuous thick line", "Dashed line", "Chain line", "Dimension line"], answer: 1, explanation: "Hidden edges and outlines are represented using dashed lines." },

        { question: "Dimensioning in engineering graphics is mainly used to?", options: ["Decorate drawings", "Specify the size and location of features", "Color the drawing", "Represent hidden lines"], answer: 1, explanation: "Dimensioning communicates the exact size and location of features." },

        { question: "A dimension line generally has?", options: ["Arrowheads at its ends", "Circles at its ends", "No markings", "Only one arrow"], answer: 0, explanation: "Dimension lines generally terminate with arrowheads indicating the extent of the dimension." },

        { question: "Extension lines are used to?", options: ["Extend the actual object", "Indicate the limits between which a dimension applies", "Show hidden edges", "Represent cutting planes"], answer: 1, explanation: "Extension lines indicate the points or limits from which dimensions are measured." },

        { question: "The numerical value written on a drawing to indicate size is called?", options: ["Scale", "Dimension", "Projection", "Reference"], answer: 1, explanation: "A dimension is the numerical value specifying the size of an object or feature." },

        { question: "What is the main purpose of lettering in engineering drawing?", options: ["Decoration", "Clear communication of information", "Measuring objects", "Producing projections"], answer: 1, explanation: "Lettering is used to clearly communicate notes, dimensions and technical information." },

        { question: "Engineering lettering should primarily be?", options: ["Decorative and artistic", "Clear, uniform and legible", "Large and colorful", "Curved and complex"], answer: 1, explanation: "Engineering lettering should be uniform, simple and easy to read." },

        { question: "A scale in engineering drawing is used when?", options: ["The object cannot be drawn at convenient actual size", "The object has no dimensions", "Only colors are required", "The drawing has no projections"], answer: 0, explanation: "Scales are used to represent objects larger or smaller than their actual size." },

        { question: "A full-size scale has a representative fraction of?", options: ["1:1", "1:2", "2:1", "1:10"], answer: 0, explanation: "A full-size scale represents the object at its actual size, so RF = 1:1." },

        { question: "A reducing scale is used when?", options: ["The drawing is larger than the actual object", "The drawing is smaller than the actual object", "No measurement is required", "The object is imaginary"], answer: 1, explanation: "A reducing scale represents a large object at a smaller size." },

        { question: "An enlarging scale is used when?", options: ["A small object needs to be shown larger", "A large object needs to be reduced", "The object has no dimensions", "Only perspective drawings are made"], answer: 0, explanation: "An enlarging scale is used to show very small objects more clearly." },

        { question: "Representative Fraction (RF) is the ratio of?", options: ["Actual length to drawing length", "Drawing length to actual length", "Height to width", "Area to volume"], answer: 1, explanation: "RF = Length on drawing / Actual length, using the same units." },

        { question: "Which scale has an RF less than 1?", options: ["Full scale", "Reducing scale", "Enlarging scale", "Natural scale"], answer: 1, explanation: "A reducing scale has drawing dimensions smaller than actual dimensions, so RF < 1." },

        { question: "Which scale has an RF greater than 1?", options: ["Reducing scale", "Full scale", "Enlarging scale", "Natural scale"], answer: 2, explanation: "An enlarging scale has drawing dimensions greater than actual dimensions, so RF > 1." }

        ],

    "Reference Planes & Orthographic Projections": [

        { question: "The two principal reference planes used in orthographic projection are?", options: ["Horizontal Plane and Vertical Plane", "Top Plane and Bottom Plane", "Front Plane and Side Plane only", "Diagonal Plane and Curved Plane"], answer: 0, explanation: "The principal reference planes are the Horizontal Plane (HP) and Vertical Plane (VP)." },

        { question: "HP stands for?", options: ["Horizontal Plane", "Height Plane", "Hidden Plane", "Half Plane"], answer: 0, explanation: "HP stands for Horizontal Plane." },

        { question: "VP stands for?", options: ["Vertical Plane", "Visual Plane", "Variable Plane", "Viewing Plane"], answer: 0, explanation: "VP stands for Vertical Plane." },

        { question: "The intersection of HP and VP is represented by?", options: ["XY line", "AB line", "Projection line", "Dimension line"], answer: 0, explanation: "The intersection of HP and VP is represented by the XY reference line." },

        { question: "Orthographic projection represents an object using?", options: ["One perspective view only", "Multiple views on mutually perpendicular planes", "Only a 3D shaded image", "A single curved projection"], answer: 1, explanation: "Orthographic projection represents an object using projections on perpendicular reference planes." },

        { question: "The top view of an object is obtained by projection on?", options: ["Horizontal Plane", "Vertical Plane", "Auxiliary Plane only", "Profile Plane only"], answer: 0, explanation: "The top view is obtained on the Horizontal Plane." },

        { question: "The front view of an object is obtained by projection on?", options: ["Horizontal Plane", "Vertical Plane", "Ground Plane", "Section Plane"], answer: 1, explanation: "The front view is obtained on the Vertical Plane." },

        { question: "In first-angle projection, the object is placed?", options: ["In the first quadrant", "In the third quadrant", "Behind the observer", "On the XY line"], answer: 0, explanation: "First-angle projection assumes the object is placed in the first quadrant." },

        { question: "In first-angle projection, the top view is generally placed?", options: ["Above the front view", "Below the front view", "To the right of the front view", "Inside the front view"], answer: 1, explanation: "In first-angle projection, the top view is placed below the front view." },

        { question: "Which projection system is commonly used in India for engineering drawings?", options: ["First-angle projection", "Third-angle projection only", "Perspective projection only", "Oblique projection only"], answer: 0, explanation: "First-angle projection is commonly used in India and many other countries." },

        { question: "The purpose of rotating HP downward in orthographic projection is to?", options: ["Create a 3D model", "Bring both views into the same plane", "Increase object size", "Remove dimensions"], answer: 1, explanation: "HP is rotated about the XY line to bring projections onto one drawing plane." },

        { question: "Projection lines in orthographic projection are generally?", options: ["Parallel to each other and perpendicular to the reference plane", "Randomly drawn", "Curved", "Always diagonal"], answer: 0, explanation: "Orthographic projection uses parallel projectors perpendicular to the plane of projection." }

        ],

    "Projection of Points": [

        { question: "A point has which dimensions?", options: ["Length only", "Length and width", "No physical dimensions", "Length, width and height"], answer: 2, explanation: "A geometrical point is considered dimensionless." },

        { question: "The front view of a point is its projection on?", options: ["HP", "VP", "Ground plane", "Profile plane only"], answer: 1, explanation: "The front view is the projection of a point on VP." },

        { question: "The top view of a point is its projection on?", options: ["VP", "HP", "XY line", "Auxiliary plane only"], answer: 1, explanation: "The top view is the projection of a point on HP." },

        { question: "In first-angle projection, a point above HP has its front view?", options: ["Above XY", "Below XY", "On XY always", "At the origin"], answer: 0, explanation: "A point above HP has its front view above the XY reference line." },

        { question: "In first-angle projection, a point in front of VP has its top view?", options: ["Above XY", "Below XY", "Always on XY", "At infinity"], answer: 1, explanation: "A point in front of VP has its top view below XY in first-angle projection." },

        { question: "If a point lies on HP, its front view lies?", options: ["On XY", "Above XY", "Below XY", "Outside the drawing"], answer: 0, explanation: "A point on HP has zero height above HP, so its front view lies on XY." },

        { question: "If a point lies on VP, its top view lies?", options: ["On XY", "Above XY always", "Below XY always", "At infinity"], answer: 0, explanation: "A point on VP has zero distance in front of VP, so its top view lies on XY." },

        { question: "A point located above HP and in front of VP belongs to?", options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"], answer: 0, explanation: "Above HP and in front of VP corresponds to the first quadrant." },

        { question: "A point located above HP and behind VP belongs to?", options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"], answer: 1, explanation: "Above HP and behind VP corresponds to the second quadrant." },

        { question: "A point located below HP and behind VP belongs to?", options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"], answer: 2, explanation: "Below HP and behind VP corresponds to the third quadrant." },

        { question: "A point located below HP and in front of VP belongs to?", options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"], answer: 3, explanation: "Below HP and in front of VP corresponds to the fourth quadrant." },

        { question: "A projector used to obtain front and top views is generally?", options: ["Perpendicular to XY", "Parallel to XY only", "Circular", "Random"], answer: 0, explanation: "Projectors are generally drawn perpendicular to the XY line when relating front and top views." }

        ],

    "Projection of Lines & True Length": [

        { question: "A straight line has?", options: ["Length but no breadth", "Only breadth", "No dimensions", "Area but no length"], answer: 0, explanation: "A geometrical line has length but negligible breadth." },

        { question: "The true length of a line is seen when the line is?", options: ["Parallel to the plane of projection", "Perpendicular to the plane of projection", "Inclined to both planes", "Hidden completely"], answer: 0, explanation: "A line parallel to a projection plane shows its true length on that plane." },

        { question: "If a line is perpendicular to HP, its top view appears as?", options: ["A point", "True length", "A circle", "An inclined line"], answer: 0, explanation: "A line perpendicular to HP projects as a point on HP." },

        { question: "If a line is perpendicular to VP, its front view appears as?", options: ["A point", "True length", "A circle", "A horizontal line always"], answer: 0, explanation: "A line perpendicular to VP projects as a point on VP." },

        { question: "If a line is parallel to HP, its top view shows?", options: ["True length", "Only a point", "Always zero length", "A circle"], answer: 0, explanation: "A line parallel to HP shows its true length in the top view." },

        { question: "If a line is parallel to VP, its front view shows?", options: ["True length", "A point", "Zero length", "Only an arc"], answer: 0, explanation: "A line parallel to VP shows its true length in the front view." },

        { question: "The apparent length of a line is?", options: ["Always greater than true length", "Equal to or less than true length", "Always zero", "Unrelated to true length"], answer: 1, explanation: "A projected length cannot exceed the true length of the line." },

        { question: "A line inclined to HP and parallel to VP shows its true length in?", options: ["Front view", "Top view", "Both views as points", "Neither view"], answer: 0, explanation: "Since the line is parallel to VP, its front view shows true length." },

        { question: "A line inclined to VP and parallel to HP shows its true length in?", options: ["Top view", "Front view", "Neither view", "Both views as points"], answer: 0, explanation: "Since the line is parallel to HP, its top view shows true length." },

        { question: "The angle a line makes with HP is called?", options: ["Inclination with HP", "Plan angle only", "Projection angle", "Dimension angle"], answer: 0, explanation: "The angle between the line and HP is its inclination with HP." },

        { question: "The angle a line makes with VP is called?", options: ["Inclination with VP", "Scale angle", "Dimension angle", "Section angle"], answer: 0, explanation: "The angle between the line and VP is its inclination with VP." },

        { question: "A line inclined to both HP and VP generally shows?", options: ["True length in both principal views", "Foreshortened length in both principal views", "A point in both views", "A circle in one view"], answer: 1, explanation: "When inclined to both HP and VP, both principal projections are generally foreshortened." },

        { question: "Which method is commonly used to determine the true length of an inclined line?", options: ["Rotation method", "Coloring method", "Shading method", "Dimension method only"], answer: 0, explanation: "The rotation method is commonly used to obtain the true length and true inclinations." }

        ],

    "Projection of Planes & True Shape": [

        { question: "A plane has?", options: ["Length and breadth but negligible thickness", "Only length", "Only thickness", "No dimensions"], answer: 0, explanation: "A geometrical plane has length and breadth but negligible thickness." },

        { question: "A plane parallel to HP shows its true shape in?", options: ["Top view", "Front view", "Both views as points", "Neither view"], answer: 0, explanation: "A plane parallel to HP shows its true shape on HP." },

        { question: "A plane parallel to VP shows its true shape in?", options: ["Front view", "Top view", "Neither view", "Only side view"], answer: 0, explanation: "A plane parallel to VP shows its true shape on VP." },

        { question: "A plane perpendicular to HP projects on HP as?", options: ["A line", "Its true shape", "A circle always", "A point always"], answer: 0, explanation: "A plane perpendicular to a projection plane appears edgewise as a line." },

        { question: "The true shape of an inclined plane is obtained on a plane?", options: ["Parallel to the given plane", "Perpendicular to the given plane", "Always HP", "Always VP"], answer: 0, explanation: "A plane shows its true shape when projected onto a plane parallel to it." },

        { question: "If a plane is inclined to HP, its projection on HP generally appears?", options: ["Foreshortened", "Always true shape", "As a point", "As a sphere"], answer: 0, explanation: "An inclined plane generally appears foreshortened on the plane to which it is inclined." },

        { question: "A circular plane parallel to HP appears in top view as?", options: ["A circle", "A line", "A point", "An ellipse always"], answer: 0, explanation: "A circle parallel to HP retains its true shape in top view." },

        { question: "A circular plane inclined to HP generally appears in top view as?", options: ["An ellipse", "Always a circle", "A square", "A point"], answer: 0, explanation: "A circle inclined to the plane of projection generally projects as an ellipse." },

        { question: "What is meant by the true shape of a plane?", options: ["Its actual geometrical shape and size", "Its smallest projection", "Its hidden projection", "Its dimensionless representation"], answer: 0, explanation: "True shape means the actual shape and dimensions of the plane." },

        { question: "An auxiliary plane is often used to?", options: ["Obtain true shape or true length", "Color the object", "Remove dimensions", "Create perspective only"], answer: 0, explanation: "Auxiliary planes are used to obtain true lengths, true shapes and other useful views." },

        { question: "A plane parallel to both HP and VP would?", options: ["Show true shape in both principal views", "Appear as a point", "Appear as a line in both views", "Have no projection"], answer: 2, explanation: "A plane cannot be parallel to both mutually perpendicular HP and VP unless considered in a special degenerate orientation; ordinary plane problems do not show true shape in both principal views." }

        ],

    "Polyhedral & Solids of Revolution": [

        { question: "A solid is a geometric object having?", options: ["Length, breadth and height", "Only length", "Only area", "No dimensions"], answer: 0, explanation: "A solid has three dimensions: length, breadth and height." },

        { question: "A polyhedral solid is bounded by?", options: ["Plane surfaces", "Only curved surfaces", "No surfaces", "Circular lines only"], answer: 0, explanation: "Polyhedral solids are bounded by plane polygonal surfaces." },

        { question: "Which of the following is a polyhedral solid?", options: ["Cube", "Cylinder", "Cone", "Sphere"], answer: 0, explanation: "A cube is bounded entirely by plane polygonal faces." },

        { question: "Which of the following is a solid of revolution?", options: ["Cylinder", "Cube", "Prism", "Pyramid"], answer: 0, explanation: "A cylinder can be generated by rotating a rectangle about one of its sides." },

        { question: "A prism generally has?", options: ["Two equal and parallel polygonal bases", "One circular base only", "No base", "Only curved surfaces"], answer: 0, explanation: "A prism has two congruent and parallel polygonal bases." },

        { question: "A pyramid generally has?", options: ["One polygonal base and an apex", "Two equal circular bases", "Only curved surfaces", "No apex"], answer: 0, explanation: "A pyramid has one polygonal base and triangular faces meeting at an apex." },

        { question: "A cylinder has?", options: ["Two circular bases and a curved surface", "One polygonal base and apex", "Six square faces", "Only triangular faces"], answer: 0, explanation: "A cylinder has two circular bases connected by a curved lateral surface." },

        { question: "A cone has?", options: ["One circular base and an apex", "Two equal circular bases", "Six square faces", "Only plane surfaces"], answer: 0, explanation: "A cone has a circular base and a single apex." },

        { question: "A sphere is generated by rotating?", options: ["A semicircle about its diameter", "A square about its diagonal", "A triangle about its base", "A line about another line"], answer: 0, explanation: "A sphere can be generated by rotating a semicircle about its diameter." },

        { question: "The line joining the centers of the bases of a prism is called?", options: ["Axis", "Generator", "Section line", "Dimension line"], answer: 0, explanation: "The axis is the line joining the centers of the bases." },

        { question: "In a right circular cylinder, the axis is?", options: ["Perpendicular to the base", "Parallel to the base", "Inclined at any angle necessarily", "A curved line"], answer: 0, explanation: "In a right circular cylinder, the axis is perpendicular to the base." },

        { question: "The line from the apex to the center of the base of a right cone is?", options: ["Axis", "Generator only", "Dimension line", "Section plane"], answer: 0, explanation: "The line joining the apex to the center of the circular base is the axis of the cone." }

        ],

    "Projection of Solids": [

        { question: "When the axis of a solid is perpendicular to HP, the base is generally?", options: ["Parallel to HP", "Perpendicular to HP", "Always inclined to HP", "Invisible"], answer: 0, explanation: "If the axis is perpendicular to HP, the base is parallel to HP." },

        { question: "If the axis of a solid is perpendicular to HP, its top view generally shows?", options: ["True shape of the base", "True length of axis only", "A point", "No projection"], answer: 0, explanation: "The base is parallel to HP and therefore appears in true shape in top view." },

        { question: "If the axis of a solid is perpendicular to VP, the base is generally?", options: ["Parallel to VP", "Perpendicular to VP", "Always inclined to VP", "Hidden"], answer: 0, explanation: "If the axis is perpendicular to VP, the base is parallel to VP." },

        { question: "A solid resting on its base on HP generally has its axis?", options: ["Perpendicular to HP", "Parallel to HP", "Parallel to VP only", "Always inclined to HP"], answer: 0, explanation: "When a solid rests on its base on HP, its axis is perpendicular to HP." },

        { question: "The term simple position of a solid refers to?", options: ["A standard orientation with respect to reference planes", "A solid without dimensions", "A transparent solid", "A hidden solid"], answer: 0, explanation: "Simple positions are standard orientations used as the starting point for projections." },

        { question: "When the axis is parallel to both HP and VP, the axis appears?", options: ["In true length in both principal views", "As a point in both views", "Foreshortened in both views", "Invisible"], answer: 0, explanation: "A line parallel to both reference planes appears in true length in both corresponding projections." },

        { question: "When a solid is inclined to one reference plane, a common procedure is to?", options: ["First draw it in simple position and then tilt it", "Draw random views directly", "Avoid orthographic projection", "Only draw the top view"], answer: 0, explanation: "The change-of-position method generally starts with a simple position and then tilts the solid." },

        { question: "If the axis is inclined to HP but parallel to VP, its true length is seen in?", options: ["Front view", "Top view", "Neither view", "Both views as a point"], answer: 0, explanation: "Since the axis is parallel to VP, its front view shows true length." },

        { question: "If the axis is inclined to VP but parallel to HP, its true length is seen in?", options: ["Top view", "Front view", "Neither view", "Both views as points"], answer: 0, explanation: "Since the axis is parallel to HP, its top view shows true length." },

        { question: "In projection of solids, visible edges are generally drawn using?", options: ["Continuous thick lines", "Dashed lines only", "Invisible lines", "Dimension lines"], answer: 0, explanation: "Visible outlines and edges are represented by continuous thick lines." },

        { question: "Hidden edges of a solid are generally represented using?", options: ["Dashed lines", "Continuous thick lines", "Dimension lines", "Center lines only"], answer: 0, explanation: "Hidden edges are conventionally shown using dashed lines." }

        ],

    "Section of Solids": [

        { question: "A section of a solid is obtained when the solid is?", options: ["Cut by an imaginary cutting plane", "Colored", "Rotated only", "Scaled"], answer: 0, explanation: "A section is produced by imagining a solid cut by a section plane." },

        { question: "The imaginary plane used to cut a solid is called?", options: ["Section plane", "Reference plane", "Dimension plane", "Scale plane"], answer: 0, explanation: "The cutting plane used to obtain a section is called a section plane." },

        { question: "The shape produced by the cutting plane is called?", options: ["Section", "Projection only", "Axis", "Generator"], answer: 0, explanation: "The shape formed where the cutting plane intersects the solid is called the section." },

        { question: "The true shape of a section is obtained when projected on a plane?", options: ["Parallel to the section plane", "Perpendicular to the section plane", "Always HP", "Always VP"], answer: 0, explanation: "The true shape is obtained on a plane parallel to the cutting plane." },

        { question: "The process of representing the cut surface using equally spaced thin lines is called?", options: ["Hatching or section lining", "Dimensioning", "Scaling", "Projection"], answer: 0, explanation: "Sectioned surfaces are commonly represented using hatching or section lines." },

        { question: "Section lines are generally drawn?", options: ["At a uniform angle and equally spaced", "Randomly", "Only vertically", "Only horizontally"], answer: 0, explanation: "Section lines are generally parallel, equally spaced and commonly inclined." },

        { question: "A cutting plane parallel to the base of a cone produces a?", options: ["Circle", "Triangle", "Rectangle", "Square always"], answer: 0, explanation: "A section parallel to the circular base of a cone produces a circle." },

        { question: "A cutting plane parallel to the base of a cylinder produces a?", options: ["Circle", "Triangle", "Ellipse only", "Rectangle"], answer: 0, explanation: "A plane parallel to the circular base of a cylinder produces a circular section." },

        { question: "A section plane passing through the axis of a right circular cone generally produces?", options: ["Triangle", "Circle", "Square", "Pentagon"], answer: 0, explanation: "A plane passing through the axis of a right circular cone produces a triangular section." },

        { question: "A section plane passing through the axis of a cylinder generally produces?", options: ["Rectangle", "Circle", "Triangle", "Pentagon"], answer: 0, explanation: "A longitudinal section through the axis of a cylinder produces a rectangle." },

        { question: "The sectional top view or front view generally represents?", options: ["The apparent shape of the cut surface in that projection", "Always the true shape", "Only dimensions", "No part of the solid"], answer: 0, explanation: "A sectional view shows the projection of the cut surface, which may or may not be its true shape." },

        { question: "Why is the true shape of section important?", options: ["It shows the actual geometry of the cut surface", "It removes the need for projections", "It hides the solid", "It changes the dimensions of the solid"], answer: 0, explanation: "The true shape gives the actual size and geometry of the section produced by the cutting plane." }

        ]

  },

},

semester2: {

},

semester3: {

    "Discrete Mathematics": {

        // =====================================================
        // QUIZ 1 — BINARY RELATIONS & PROPERTIES
        // =====================================================

        "Binary Relations & Properties": [

            {
                question: "A binary relation R from a set A to a set B is defined as:",
                options: ["A subset of A × B", "A subset of A ∪ B", "A function from A to B", "A subset of B × A only"],
                answer: 0,
                explanation: "A binary relation from A to B is any subset of the Cartesian product A × B."
            },

            {
                question: "If A = {1,2,3}, then the universal relation on A contains:",
                options: ["3 ordered pairs", "6 ordered pairs", "9 ordered pairs", "27 ordered pairs"],
                answer: 2,
                explanation: "The universal relation is A × A. Since |A| = 3, it contains 3² = 9 ordered pairs."
            },

            {
                question: "A relation R on A is reflexive if:",
                options: ["(a,a) ∈ R for every a ∈ A", "(a,b) ∈ R implies (b,a) ∈ R", "(a,b) and (b,c) imply (a,c)", "No element is related to itself"],
                answer: 0,
                explanation: "Reflexivity requires every element of A to be related to itself."
            },

            {
                question: "A relation R is symmetric if:",
                options: ["(a,a) belongs to R", "(a,b) ∈ R implies (b,a) ∈ R", "(a,b) and (b,c) imply (a,c)", "(a,b) ∈ R implies a = b"],
                answer: 1,
                explanation: "In a symmetric relation, reversing every related ordered pair must also produce a pair in R."
            },

            {
                question: "A relation R is antisymmetric if:",
                options: ["(a,b) ∈ R always implies (b,a) ∈ R", "(a,b) ∈ R and (b,a) ∈ R imply a = b", "(a,a) is not in R", "R contains only one ordered pair"],
                answer: 1,
                explanation: "Antisymmetry allows both (a,b) and (b,a) only when a and b are the same element."
            },

            {
                question: "A relation R is transitive if:",
                options: ["aRb implies bRa", "aRa for every a", "aRb and bRc imply aRc", "aRb implies a = b"],
                answer: 2,
                explanation: "Transitivity means the relation can be chained: aRb and bRc imply aRc."
            },

            {
                question: "The relation R = {(1,1),(2,2),(3,3)} on {1,2,3} is:",
                options: ["Only symmetric", "Only transitive", "Reflexive, symmetric and transitive", "Only antisymmetric"],
                answer: 2,
                explanation: "The identity relation on a set is reflexive, symmetric and transitive."
            },

            {
                question: "The relation ≤ on integers is:",
                options: ["Reflexive, antisymmetric and transitive", "Symmetric and transitive only", "Reflexive and symmetric only", "Only reflexive"],
                answer: 0,
                explanation: "≤ is reflexive, antisymmetric and transitive, making it a partial order."
            },

            {
                question: "Which property is NOT satisfied by the relation < on integers?",
                options: ["Transitivity", "Irreflexivity", "Symmetry", "Antisymmetry"],
                answer: 2,
                explanation: "If a < b, generally b < a is false, so < is not symmetric."
            },

            {
                question: "The domain of a relation R consists of:",
                options: ["All second components appearing in R", "All first components appearing in R", "All elements of the codomain only", "Only elements related to themselves"],
                answer: 1,
                explanation: "The domain contains all elements that occur as first components of ordered pairs."
            },

            {
                question: "The range of a relation R consists of:",
                options: ["All first components", "All second components", "Only common components", "The Cartesian product"],
                answer: 1,
                explanation: "The range contains all elements that occur as second components."
            },

            {
                question: "The relation R = {(1,2),(2,1)} on {1,2} is:",
                options: ["Reflexive only", "Symmetric but not reflexive", "Transitive and reflexive", "Antisymmetric"],
                answer: 1,
                explanation: "It is symmetric because reversing pairs gives pairs in R, but (1,1) and (2,2) are missing."
            },

            {
                question: "If a relation is both symmetric and antisymmetric, then:",
                options: ["Every pair must contain distinct elements", "Only pairs of the form (a,a) can occur", "It must be non-reflexive", "It cannot be transitive"],
                answer: 1,
                explanation: "For distinct a and b, symmetry gives both directions while antisymmetry would force a = b. Thus only diagonal pairs may occur."
            },

            {
                question: "The empty relation on a non-empty set is:",
                options: ["Reflexive", "Symmetric and transitive", "Only antisymmetric", "Reflexive and symmetric"],
                answer: 1,
                explanation: "Symmetric and transitive conditions are vacuously true, but reflexivity fails because no (a,a) pairs exist."
            }

        ],


        // =====================================================
        // QUIZ 2 — COMPOSITION OF RELATIONS
        // =====================================================

        "Composition of Relations": [

            {
                question: "If R is a relation from A to B and S is a relation from B to C, then S ∘ R is a relation from:",
                options: ["A to C", "C to A", "B to A", "A to B"],
                answer: 0,
                explanation: "Composition first applies R from A to B and then S from B to C."
            },

            {
                question: "(a,c) belongs to S ∘ R when:",
                options: ["There exists b such that (a,b) ∈ R and (b,c) ∈ S", "(a,c) belongs to both R and S", "(c,a) ∈ R", "a = c"],
                answer: 0,
                explanation: "The middle element b connects the two relations."
            },

            {
                question: "In general, composition of relations is:",
                options: ["Commutative", "Not necessarily commutative", "Always symmetric", "Always reflexive"],
                answer: 1,
                explanation: "Usually S ∘ R is not equal to R ∘ S."
            },

            {
                question: "Let R = {(1,2),(2,3)} and S = {(2,4),(3,5)}. Then S ∘ R is:",
                options: ["{(1,4),(2,5)}", "{(2,4),(3,5)}", "{(1,2),(2,3)}", "{(4,1),(5,2)}"],
                answer: 0,
                explanation: "1R2 and 2S4 gives (1,4); 2R3 and 3S5 gives (2,5)."
            },

            {
                question: "Composition of relations is associative because:",
                options: ["R ∘ S = S ∘ R", "(T ∘ S) ∘ R = T ∘ (S ∘ R)", "Every relation has an inverse", "Every relation is transitive"],
                answer: 1,
                explanation: "Relation composition is associative, although it is generally not commutative."
            },

            {
                question: "The identity relation I on A satisfies:",
                options: ["R ∘ I = I", "I ∘ R = R and R ∘ I = R where defined", "I ∘ R is always empty", "I has no ordered pairs"],
                answer: 1,
                explanation: "The identity relation acts as an identity element under composition."
            },

            {
                question: "Which condition is necessary to compose S ∘ R?",
                options: ["The range-side set of R must match the domain-side set of S", "R and S must be equal", "Both relations must be symmetric", "Both relations must be functions"],
                answer: 0,
                explanation: "The output set of R must connect to the input set of S."
            },

            {
                question: "If R maps a to b and S maps b to c, then under S ∘ R:",
                options: ["a maps to c", "c maps to a", "b maps to a", "a maps to b only"],
                answer: 0,
                explanation: "Composition follows the chain a → b → c."
            },

            {
                question: "Which statement about composition of relations is correct?",
                options: ["It is always commutative", "It is associative but generally not commutative", "It is neither associative nor commutative", "It is always commutative and associative"],
                answer: 1,
                explanation: "Associativity always holds, but commutativity generally does not."
            }

        ],


        // =====================================================
        // QUIZ 3 — EQUIVALENCE RELATIONS & PARTITIONS
        // =====================================================

        "Equivalence Relations & Partitions": [

            {
                question: "An equivalence relation must be:",
                options: ["Reflexive, symmetric and transitive", "Reflexive, antisymmetric and transitive", "Symmetric and antisymmetric only", "Irreflexive and transitive"],
                answer: 0,
                explanation: "These three properties define an equivalence relation."
            },

            {
                question: "If ~ is an equivalence relation on A, the equivalence class of a is:",
                options: ["{x ∈ A | x ~ a}", "{x ∈ A | x = a only}", "The complement of a", "A Cartesian product"],
                answer: 0,
                explanation: "An equivalence class contains all elements equivalent to a."
            },

            {
                question: "If two equivalence classes have at least one common element, then:",
                options: ["They are disjoint", "They are equal", "One must be empty", "They cannot exist"],
                answer: 1,
                explanation: "Equivalence classes are either disjoint or exactly equal."
            },

            {
                question: "Equivalence classes of an equivalence relation on A:",
                options: ["Always overlap partially", "Form a partition of A", "Always contain one element", "Never cover A"],
                answer: 1,
                explanation: "Equivalence classes divide the set into non-empty disjoint subsets whose union is A."
            },

            {
                question: "A partition of a set A consists of:",
                options: ["Overlapping subsets only", "Non-empty disjoint subsets whose union is A", "Only singleton subsets", "All possible subsets of A"],
                answer: 1,
                explanation: "This is the formal definition of a partition."
            },

            {
                question: "Which relation on integers is an equivalence relation?",
                options: ["a < b", "a ≤ b", "a ≡ b (mod n)", "a > b"],
                answer: 2,
                explanation: "Congruence modulo n is reflexive, symmetric and transitive."
            },

            {
                question: "The relation aRb on integers defined by a − b being even is:",
                options: ["Only symmetric", "An equivalence relation", "A partial order", "Not transitive"],
                answer: 1,
                explanation: "Same parity is reflexive, symmetric and transitive."
            },

            {
                question: "For an equivalence relation, every element of the set:",
                options: ["Belongs to exactly one equivalence class", "Belongs to no class", "Belongs to infinitely many different classes", "Must form a singleton class"],
                answer: 0,
                explanation: "The equivalence classes form a partition, so every element belongs to exactly one class."
            },

            {
                question: "If [a] = [b] for an equivalence relation, then:",
                options: ["a is not related to b", "a ~ b", "a and b must be numerically equal", "The relation is not symmetric"],
                answer: 1,
                explanation: "Two elements have the same equivalence class exactly when they are equivalent."
            },

            {
                question: "A relation that is reflexive and transitive but not necessarily symmetric is generally called:",
                options: ["An equivalence relation", "A preorder", "A bijection", "A partition"],
                answer: 1,
                explanation: "Reflexive + transitive relations are commonly called preorders."
            },

            {
                question: "If A = {1,2,3,4} and a relation divides A into {1,3} and {2,4}, these subsets represent:",
                options: ["A partition of A", "A Cartesian product", "A non-reflexive relation only", "A function"],
                answer: 0,
                explanation: "They are non-empty, disjoint and their union is A."
            }

        ],


        // =====================================================
        // QUIZ 4 — POSETS & PARTIAL ORDERS
        // =====================================================

        "Posets & Partial Orders": [

            {
                question: "A partial order relation must be:",
                options: ["Reflexive, symmetric and transitive", "Reflexive, antisymmetric and transitive", "Symmetric and antisymmetric only", "Irreflexive and transitive"],
                answer: 1,
                explanation: "These three properties define a partial order."
            },

            {
                question: "A set together with a partial order relation is called:",
                options: ["A lattice", "A poset", "An equivalence class", "A permutation"],
                answer: 1,
                explanation: "A partially ordered set is called a poset."
            },

            {
                question: "Two elements a and b in a poset are comparable if:",
                options: ["a ≤ b or b ≤ a", "a = b only", "Neither is related to the other", "They belong to different sets"],
                answer: 0,
                explanation: "Comparability means at least one of the two elements precedes the other."
            },

            {
                question: "A partial order is called total if:",
                options: ["Every pair of elements is comparable", "No elements are comparable", "It is symmetric", "It has no maximal element"],
                answer: 0,
                explanation: "A total order compares every pair of elements."
            },

            {
                question: "A minimal element of a poset is an element:",
                options: ["Smaller than every element", "Having no distinct element strictly below it", "Larger than every element", "Equal to the least element always"],
                answer: 1,
                explanation: "A minimal element has no smaller distinct element in the poset."
            },

            {
                question: "A least element of a poset:",
                options: ["Is less than or equal to every element", "May be incomparable with some elements", "Is always one of many least elements", "Need not be minimal"],
                answer: 0,
                explanation: "A least element is below every element and is unique if it exists."
            },

            {
                question: "Which statement is correct?",
                options: ["Every minimal element is necessarily the least element", "Every least element is minimal", "A poset can have several least elements", "Minimal and maximal mean the same thing"],
                answer: 1,
                explanation: "A least element must be minimal, but a minimal element need not be least."
            },

            {
                question: "A poset can have:",
                options: ["At most one minimal element", "Several minimal elements", "Several least elements", "No maximal elements ever"],
                answer: 1,
                explanation: "Multiple incomparable minimal elements may exist, but a least element is unique."
            },

            {
                question: "An upper bound of a subset S of a poset is an element u such that:",
                options: ["u ≤ s for every s ∈ S", "s ≤ u for every s ∈ S", "u is always in S", "u is always the greatest element"],
                answer: 1,
                explanation: "An upper bound lies above every element of the subset."
            },

            {
                question: "A lower bound of a subset S is an element l such that:",
                options: ["l ≤ s for every s ∈ S", "l ≥ s for every s ∈ S", "l must be outside the poset", "l must be maximal"],
                answer: 0,
                explanation: "A lower bound lies below every element of the subset."
            },

            {
                question: "The divisibility relation | on positive integers is:",
                options: ["A partial order", "An equivalence relation", "Symmetric", "A bijection"],
                answer: 0,
                explanation: "Divisibility is reflexive, antisymmetric and transitive."
            }

        ],


        // =====================================================
        // QUIZ 5 — HASSE DIAGRAMS & LATTICES
        // =====================================================

        "Hasse Diagrams & Lattices": [

            {
                question: "A Hasse diagram is used to represent:",
                options: ["Equivalence relations", "Partially ordered sets", "Only functions", "Probability distributions"],
                answer: 1,
                explanation: "Hasse diagrams visually represent finite posets."
            },

            {
                question: "In a Hasse diagram, reflexive loops are:",
                options: ["Always drawn", "Usually omitted", "Drawn twice", "Mandatory at every vertex"],
                answer: 1,
                explanation: "Reflexive relations are understood and therefore not explicitly drawn."
            },

            {
                question: "In a Hasse diagram, edges implied by transitivity are:",
                options: ["Always added", "Usually omitted", "Drawn as loops", "Replaced by arrows"],
                answer: 1,
                explanation: "Only cover relations are generally shown."
            },

            {
                question: "In a standard Hasse diagram, if x is drawn above y, it generally means:",
                options: ["x is below y in the order", "y ≤ x", "x and y are incomparable", "x = y"],
                answer: 1,
                explanation: "Higher elements represent greater elements under the partial order."
            },

            {
                question: "A lattice is a poset in which every pair of elements has:",
                options: ["Only a greatest element", "Only a least element", "A unique least upper bound and greatest lower bound", "No comparable elements"],
                answer: 2,
                explanation: "Every pair must have both join (LUB) and meet (GLB)."
            },

            {
                question: "The least upper bound of two elements is also called:",
                options: ["Meet", "Join", "Minimal element", "Lower bound"],
                answer: 1,
                explanation: "The least upper bound is called the join."
            },

            {
                question: "The greatest lower bound of two elements is also called:",
                options: ["Join", "Meet", "Maximum", "Upper bound"],
                answer: 1,
                explanation: "The greatest lower bound is called the meet."
            },

            {
                question: "A greatest element in a poset, if it exists:",
                options: ["Need not be unique", "Is unique", "Must be incomparable", "Cannot be maximal"],
                answer: 1,
                explanation: "A greatest element is unique and is also maximal."
            },

            {
                question: "If two elements of a poset have no least upper bound, then:",
                options: ["The poset cannot be a lattice", "They must be equal", "The poset is an equivalence relation", "The relation becomes symmetric"],
                answer: 0,
                explanation: "A lattice requires every pair to have both LUB and GLB."
            },

            {
                question: "In a lattice, the join of elements a and b is denoted by:",
                options: ["a ∧ b", "a ∨ b", "a × b", "a ∘ b"],
                answer: 1,
                explanation: "∨ denotes join, while ∧ denotes meet."
            },

            {
                question: "In a lattice, the meet of a and b is denoted by:",
                options: ["a ∨ b", "a ∧ b", "a + b", "a ∘ b"],
                answer: 1,
                explanation: "∧ represents the greatest lower bound."
            }

        ],


        // =====================================================
        // QUIZ 6 — FUNCTIONS FUNDAMENTALS
        // =====================================================

        "Functions Fundamentals": [

            {
                question: "A function f from A to B assigns:",
                options: ["Exactly one element of B to each element of A", "At least two outputs to every input", "Every element of B to every element of A", "Only some elements of A an output"],
                answer: 0,
                explanation: "Every input in the domain must have exactly one output."
            },

            {
                question: "The set A in f: A → B is called:",
                options: ["Range", "Domain", "Codomain", "Image only"],
                answer: 1,
                explanation: "A is the domain, the set of allowed inputs."
            },

            {
                question: "The set B in f: A → B is called:",
                options: ["Domain", "Range", "Codomain", "Preimage"],
                answer: 2,
                explanation: "B is the codomain, the target set."
            },

            {
                question: "The range of a function is:",
                options: ["Always equal to the domain", "The set of actual output values", "Always equal to the codomain", "The Cartesian product"],
                answer: 1,
                explanation: "The range is the subset of the codomain actually produced by the function."
            },

            {
                question: "Which relation cannot represent a function?",
                options: ["Each input has exactly one output", "One input has two different outputs", "Different inputs have the same output", "Every domain element has an image"],
                answer: 1,
                explanation: "A function cannot assign two different outputs to the same input."
            },

            {
                question: "Different elements of the domain mapping to the same output:",
                options: ["Always violates the definition of a function", "Is allowed for a function", "Makes the relation symmetric", "Makes the function impossible"],
                answer: 1,
                explanation: "Many-to-one mappings are allowed; one-to-many mappings are not."
            },

            {
                question: "For f: A → B, the range is:",
                options: ["Always a subset of B", "Always larger than B", "Always equal to A", "Always empty"],
                answer: 0,
                explanation: "Every output lies in the codomain B, so the range is a subset of B."
            },

            {
                question: "The function f(x) = x² from real numbers to real numbers is:",
                options: ["One-to-one", "Onto", "Neither one-to-one nor onto", "Bijective"],
                answer: 2,
                explanation: "f(1)=f(-1), so not injective; negative real numbers are not outputs, so not onto R."
            }

        ],


        // =====================================================
        // QUIZ 7 — INJECTION, SURJECTION & BIJECTION
        // =====================================================

        "Injection, Surjection & Bijection": [

            {
                question: "A function f: A → B is injective if:",
                options: ["Every element of B has a preimage", "Different inputs have different outputs", "Every input has two outputs", "Range is empty"],
                answer: 1,
                explanation: "Injective means f(a)=f(b) implies a=b."
            },

            {
                question: "A function f: A → B is surjective if:",
                options: ["Every element of B is the image of at least one element of A", "Different inputs must have different outputs", "A = B always", "The domain is empty"],
                answer: 0,
                explanation: "An onto function covers every element of its codomain."
            },

            {
                question: "A bijective function is:",
                options: ["Only injective", "Only surjective", "Both injective and surjective", "Neither injective nor surjective"],
                answer: 2,
                explanation: "A bijection establishes a one-to-one correspondence between domain and codomain."
            },

            {
                question: "For a finite set A and B with |A| > |B|, a function A → B:",
                options: ["Can always be injective", "Cannot be injective", "Must be bijective", "Must be one-to-one"],
                answer: 1,
                explanation: "By the pigeonhole principle, more domain elements than codomain elements prevent injectivity."
            },

            {
                question: "For finite sets A and B with |A| < |B|, a function A → B:",
                options: ["Can be onto", "Cannot be onto", "Must be bijective", "Must be many-to-one"],
                answer: 1,
                explanation: "There are not enough domain elements to cover every codomain element."
            },

            {
                question: "A function from a finite set A to itself is injective if and only if it is:",
                options: ["Constant", "Surjective", "Undefined", "Many-to-one"],
                answer: 1,
                explanation: "For finite sets of equal size, injectivity and surjectivity are equivalent."
            },

            {
                question: "The function f(x)=2x+1 from R to R is:",
                options: ["Bijective", "Only injective", "Only surjective", "Neither"],
                answer: 0,
                explanation: "It is injective and every real y has x=(y−1)/2, so it is onto."
            },

            {
                question: "The function f(x)=x² from R to R is not injective because:",
                options: ["f(x) is always negative", "f(1)=f(-1)", "Its range is all real numbers", "It has no outputs"],
                answer: 1,
                explanation: "Different inputs 1 and −1 produce the same output."
            },

            {
                question: "Which property is necessary for a function to have an inverse function from its codomain?",
                options: ["It must be bijective", "It must be symmetric", "It must be constant", "It must be many-to-one"],
                answer: 0,
                explanation: "A two-sided inverse exists when the function is bijective."
            }

        ],


        // =====================================================
        // QUIZ 8 — COMPOSITION & INVERSE FUNCTIONS
        // =====================================================

        "Composition & Inverse Functions": [

            {
                question: "The composition (g ∘ f)(x) means:",
                options: ["f(g(x))", "g(f(x))", "f(x)+g(x)", "f(x)g(x)"],
                answer: 1,
                explanation: "g ∘ f means apply f first and then apply g."
            },

            {
                question: "Function composition is generally:",
                options: ["Commutative", "Not commutative", "Always symmetric", "Always equal to addition"],
                answer: 1,
                explanation: "Usually f ∘ g is not equal to g ∘ f."
            },

            {
                question: "If f(x)=x+1 and g(x)=2x, then (g ∘ f)(x) is:",
                options: ["2x+1", "2x+2", "x+2", "x+1"],
                answer: 1,
                explanation: "First f(x)=x+1, then g(f(x))=2(x+1)=2x+2."
            },

            {
                question: "If f(x)=2x+3, then f⁻¹(x) is:",
                options: ["2x−3", "(x−3)/2", "(x+3)/2", "1/(2x+3)"],
                answer: 1,
                explanation: "Set y=2x+3 and solve for x: x=(y−3)/2."
            },

            {
                question: "For a function f and its inverse f⁻¹:",
                options: ["f ∘ f = I", "f⁻¹ ∘ f = I and f ∘ f⁻¹ = I", "f⁻¹ = f always", "They cannot be composed"],
                answer: 1,
                explanation: "Composing a bijection with its inverse gives the identity function."
            },

            {
                question: "A function has an inverse function if it is:",
                options: ["Bijective", "Only symmetric", "Only transitive", "Constant"],
                answer: 0,
                explanation: "The function must be both one-to-one and onto."
            },

            {
                question: "If f(x)=x+2 and g(x)=x², then (f ∘ g)(x) is:",
                options: ["(x+2)²", "x²+2", "x²+4", "2x²"],
                answer: 1,
                explanation: "First apply g: x², then apply f: x²+2."
            },

            {
                question: "Which statement about inverse functions is true?",
                options: ["Every function has an inverse", "Only bijective functions have inverses as functions on the full codomain", "Constant functions are always invertible", "Many-to-one functions are always invertible"],
                answer: 1,
                explanation: "Non-bijective functions fail uniqueness or full coverage required for an inverse."
            }

        ],


        // =====================================================
        // QUIZ 9 — RECURRENCE RELATIONS
        // =====================================================

        "Recurrence Relations": [

            {
                question: "A recurrence relation defines:",
                options: ["A sequence using previous terms", "A set with no elements", "Only a function graph", "A binary relation only"],
                answer: 0,
                explanation: "A recurrence relation expresses terms of a sequence in terms of earlier terms."
            },

            {
                question: "In a recurrence relation a_n = a_(n−1) + 2, the recurrence is of:",
                options: ["First order", "Second order", "Third order", "Infinite order"],
                answer: 0,
                explanation: "The current term depends only on the immediately preceding term."
            },

            {
                question: "The Fibonacci recurrence is:",
                options: ["F_n = F_(n−1)+F_(n−2)", "F_n = 2F_(n−1)", "F_n = n²", "F_n = F_(n+1)"],
                answer: 0,
                explanation: "Each Fibonacci term is the sum of the previous two terms."
            },

            {
                question: "Initial conditions in a recurrence relation are needed to:",
                options: ["Make the sequence unique", "Remove all previous terms", "Make the relation symmetric", "Convert it into a set"],
                answer: 0,
                explanation: "A recurrence alone may describe many sequences; initial conditions determine one specific sequence."
            },

            {
                question: "A linear homogeneous recurrence relation has:",
                options: ["No products or nonlinear powers of sequence terms and zero non-recurrence part", "Only squares of a_n", "Only constants", "No previous terms"],
                answer: 0,
                explanation: "Linear homogeneous recurrences are linear combinations of earlier terms equal to zero."
            },

            {
                question: "For a_n = 3a_(n−1), the characteristic equation is:",
                options: ["r = 3", "r² = 3", "r+3=0 only", "r=0"],
                answer: 0,
                explanation: "Assuming a_n=r^n gives r^n=3r^(n−1), so r=3."
            },

            {
                question: "If a_n = 2a_(n−1) and a_0=1, then a_3 equals:",
                options: ["4", "6", "8", "16"],
                answer: 2,
                explanation: "The sequence is 1,2,4,8."
            },

            {
                question: "The recurrence a_n = a_(n−1)+5 generates:",
                options: ["An arithmetic sequence", "A geometric sequence", "A constant sequence only", "A periodic sequence necessarily"],
                answer: 0,
                explanation: "Each term differs from the previous one by the constant 5."
            },

            {
                question: "The recurrence a_n = 2a_(n−1) generates a sequence that is:",
                options: ["Arithmetic", "Geometric", "Always constant", "Always decreasing"],
                answer: 1,
                explanation: "Each term is obtained by multiplying the previous term by 2."
            },

            {
                question: "A recurrence involving a_n, a_(n−1), and a_(n−2) has order:",
                options: ["1", "2", "3", "0"],
                answer: 1,
                explanation: "The farthest previous term is two positions back."
            },

            {
                question: "For a_n − 5a_(n−1) + 6a_(n−2)=0, the characteristic equation is:",
                options: ["r²−5r+6=0", "r−5+6=0", "r²+5r+6=0", "5r²−6=0"],
                answer: 0,
                explanation: "Replace a_n by r^n and divide by r^(n−2)."
            },

            {
                question: "The roots of r²−5r+6=0 are:",
                options: ["1 and 6", "2 and 3", "-2 and -3", "5 and 6"],
                answer: 1,
                explanation: "(r−2)(r−3)=0."
            },

            {
                question: "For distinct roots r1 and r2 of a second-order homogeneous recurrence, the general solution has the form:",
                options: ["C1r1^n + C2r2^n", "C1+C2 only", "r1+r2", "n² only"],
                answer: 0,
                explanation: "Each distinct characteristic root contributes an independent exponential term."
            },

            {
                question: "The main purpose of the characteristic equation method is to:",
                options: ["Solve suitable linear recurrence relations", "Construct Hasse diagrams", "Find set partitions", "Test symmetry"],
                answer: 0,
                explanation: "Characteristic roots help form closed-form solutions."
            }

        ],


        // =====================================================
        // QUIZ 10 — GENERATING FUNCTIONS
        // =====================================================

        "Generating Functions": [

            {
                question: "The ordinary generating function of a sequence a₀,a₁,a₂,... is:",
                options: ["Σ a_n x^n", "Σ x/a_n", "Σ a_n/n", "Σ n^x"],
                answer: 0,
                explanation: "The ordinary generating function is G(x)=a₀+a₁x+a₂x²+...=Σa_nx^n."
            },

            {
                question: "The coefficient of x^n in a generating function represents:",
                options: ["The nth term of the represented sequence", "Always the sum of all terms", "The derivative", "The inverse relation"],
                answer: 0,
                explanation: "The coefficient of x^n corresponds to a_n."
            },

            {
                question: "The generating function for the sequence 1,1,1,1,... is:",
                options: ["1/(1−x)", "1/(1+x)", "x/(1−x)", "1+x"],
                answer: 0,
                explanation: "1+x+x²+...=1/(1−x) for |x|<1."
            },

            {
                question: "The generating function for the sequence 1,0,0,0,... is:",
                options: ["1", "x", "1/(1−x)", "x/(1+x)"],
                answer: 0,
                explanation: "Only the constant coefficient is 1."
            },

            {
                question: "The generating function for 0,1,0,0,... is:",
                options: ["1", "x", "x²", "1/(1−x)"],
                answer: 1,
                explanation: "The coefficient of x is 1 and all other coefficients are zero."
            },

            {
                question: "The generating function for the sequence 0,0,1,0,... is:",
                options: ["x", "x²", "1+x", "1/(1−x)"],
                answer: 1,
                explanation: "The coefficient of x² is 1."
            },

            {
                question: "The generating function 1+x+x²+x³+... can be written as:",
                options: ["1/(1−x)", "1/(1+x)", "x/(1−x)", "(1−x)"],
                answer: 0,
                explanation: "It is the infinite geometric series with common ratio x."
            },

            {
                question: "If G(x)=3+2x+5x², then the represented sequence begins with:",
                options: ["3,2,5", "2,3,5", "5,2,3", "3,5,2"],
                answer: 0,
                explanation: "Coefficients correspond in order to a₀,a₁,a₂."
            },

            {
                question: "Multiplying a generating function G(x) by x shifts the sequence:",
                options: ["One position to the right, inserting 0 at the beginning", "One position to the left always", "Without changing coefficients", "Into an inverse function"],
                answer: 0,
                explanation: "xG(x) changes a₀+a₁x+... into 0+a₀x+a₁x²+...."
            },

            {
                question: "Generating functions are particularly useful for:",
                options: ["Studying sequences and solving combinatorial/recurrence problems", "Only drawing graphs", "Only checking symmetry", "Replacing all functions"],
                answer: 0,
                explanation: "Generating functions encode sequences algebraically and are powerful in counting and recurrence problems."
            },

            {
                question: "The generating function x/(1−x) represents the sequence:",
                options: ["1,1,1,...", "0,1,1,1,...", "1,0,1,0,...", "0,0,1,1,..."],
                answer: 1,
                explanation: "x/(1−x)=x+x²+x³+..., so coefficients are 0,1,1,1,..."
            }

        ]

    },

    "Computer System and Architecture": {

      "Half Adder and Full Adder":[

        { question:"What are the two outputs of a Half Adder?", options:["Sum and Carry","Input and Output","Sum and Difference","Carry and Borrow"], answer:0, explanation:"A Half Adder produces two outputs: Sum and Carry." },

        { question:"The Sum output of a Half Adder is represented by?", options:["A AND B","A OR B","A XOR B","A XNOR B"], answer:2, explanation:"The Sum of a Half Adder is S = A XOR B." },

        { question:"The Carry output of a Half Adder is represented by?", options:["A AND B","A XOR B","A OR B","A XNOR B"], answer:0, explanation:"The Carry output is C = A AND B." },

        { question:"What is the Sum output of a Half Adder when A=1 and B=1?", options:["0","1","2","Undefined"], answer:0, explanation:"1 XOR 1 = 0, so the Sum is 0." },

        { question:"What is the Carry output of a Half Adder when A=1 and B=1?", options:["0","1","2","Undefined"], answer:1, explanation:"1 AND 1 = 1, so Carry is 1." },

        { question:"A Full Adder has how many input bits?", options:["1","2","3","4"], answer:2, explanation:"A Full Adder has three inputs: A, B and Carry-in." },

        { question:"Which additional input does a Full Adder have compared with a Half Adder?", options:["Borrow","Carry-in","Enable","Clock"], answer:1, explanation:"A Full Adder includes a Carry-in input." },

        { question:"The Sum expression of a Full Adder is?", options:["A+B+Cin","A XOR B XOR Cin","AB+Cin","A AND B AND Cin"], answer:1, explanation:"The Full Adder Sum is S = A XOR B XOR Cin." },

        { question:"The Carry-out expression of a Full Adder is?", options:["AB + BCin + ACin","A XOR B XOR Cin","A+B+Cin","ABCin"], answer:0, explanation:"Carry-out is generated when at least two of the three inputs are 1: Cout = AB + BCin + ACin." },

        { question:"How can a Full Adder be implemented using Half Adders?", options:["Using one Half Adder","Using two Half Adders and one OR gate","Using three Half Adders","Using only OR gates"], answer:1, explanation:"Two Half Adders generate intermediate sums and carries, and an OR gate combines the carries." }

        ],


      "Multiplexer and Demultiplexer":[

        { question:"A Multiplexer is commonly called a?", options:["Data distributor","Data selector","Code converter","Memory device"], answer:1, explanation:"A Multiplexer selects one input from many inputs and sends it to a single output." },

        { question:"A 4-to-1 Multiplexer has how many select lines?", options:["1","2","3","4"], answer:1, explanation:"For n inputs, select lines = log₂(n). Therefore log₂4 = 2." },

        { question:"An 8-to-1 Multiplexer requires how many select lines?", options:["2","3","4","8"], answer:1, explanation:"log₂8 = 3 select lines are required." },

        { question:"A 16-to-1 Multiplexer requires how many select lines?", options:["2","3","4","5"], answer:2, explanation:"log₂16 = 4 select lines." },

        { question:"A Multiplexer generally has?", options:["Many inputs and one output","One input and many outputs","Many inputs and many outputs","One input and one output"], answer:0, explanation:"A Multiplexer selects one of many inputs and connects it to a single output." },

        { question:"A Demultiplexer generally has?", options:["Many inputs and one output","One input and many outputs","Many inputs and many outputs","No input"], answer:1, explanation:"A Demultiplexer routes one input to one of several outputs." },

        { question:"A 1-to-8 Demultiplexer requires how many select lines?", options:["1","2","3","8"], answer:2, explanation:"log₂8 = 3 select lines are needed." },

        { question:"The main function of a Demultiplexer is?", options:["Add binary numbers","Route one input to one of many outputs","Store data","Convert analog to digital"], answer:1, explanation:"A Demultiplexer distributes a single input to a selected output." },

        { question:"Which device can be used to implement Boolean functions efficiently?", options:["Multiplexer","Register","Flip-Flop","Counter"], answer:0, explanation:"Multiplexers can implement Boolean functions by connecting variables and constants to data inputs." },

        { question:"If a Multiplexer has 32 input lines, how many select lines are required?", options:["4","5","6","32"], answer:1, explanation:"log₂32 = 5 select lines." }

        ],


      "Encoder and Decoder":[

        { question:"A Decoder converts?", options:["Binary code into one active output","One input into many inputs","Analog into digital","Digital into analog"], answer:0, explanation:"A Decoder activates one output corresponding to the binary input combination." },

        { question:"A 2-to-4 Decoder has?", options:["2 inputs and 4 outputs","4 inputs and 2 outputs","2 inputs and 2 outputs","4 inputs and 4 outputs"], answer:0, explanation:"A 2-to-4 Decoder accepts 2 binary inputs and activates one of 4 outputs." },

        { question:"How many outputs does a 3-to-8 Decoder have?", options:["3","6","8","16"], answer:2, explanation:"For n input lines, a decoder has 2ⁿ outputs. Therefore 2³ = 8." },

        { question:"How many outputs does a 4-to-16 Decoder have?", options:["4","8","12","16"], answer:3, explanation:"A 4-to-16 Decoder has 2⁴ = 16 outputs." },

        { question:"An Encoder performs the reverse operation of a?", options:["Multiplexer","Decoder","Register","Flip-Flop"], answer:1, explanation:"An Encoder converts an active input into a binary code, the reverse of decoding." },

        { question:"An 8-to-3 Encoder converts?", options:["3 inputs into 8 outputs","8 input lines into a 3-bit binary code","8 bits into 3 outputs","3 inputs into 3 outputs"], answer:1, explanation:"An 8-to-3 Encoder produces a 3-bit code representing the active input." },

        { question:"A major problem with a simple Encoder occurs when?", options:["No input is active","More than one input is active","Clock is absent","Output is zero"], answer:1, explanation:"A simple Encoder assumes only one input is active; multiple active inputs cause ambiguity." },

        { question:"Which Encoder solves the multiple-active-input problem?", options:["Half Encoder","Priority Encoder","Binary Decoder","Multiplexer"], answer:1, explanation:"A Priority Encoder assigns priority to inputs and encodes the highest-priority active input." },

        { question:"The Enable input of a Decoder is used to?", options:["Store data permanently","Control whether the decoder operates","Increase number of inputs","Add binary numbers"], answer:1, explanation:"The Enable input activates or disables decoder operation." }

        ],


      "Flip Flops":[

        { question:"A Flip-Flop is primarily used to?", options:["Add numbers","Store one bit of information","Convert analog signals","Amplify signals"], answer:1, explanation:"A Flip-Flop is a bistable memory element capable of storing one binary bit." },

        { question:"Which Flip-Flop has S and R inputs?", options:["JK Flip-Flop","D Flip-Flop","SR Flip-Flop","T Flip-Flop"], answer:2, explanation:"The SR Flip-Flop uses Set and Reset inputs." },

        { question:"What is the invalid state of a NOR-based SR Flip-Flop?", options:["S=0, R=0","S=0, R=1","S=1, R=0","S=1, R=1"], answer:3, explanation:"For a NOR SR latch, S=R=1 produces an invalid condition." },

        { question:"The JK Flip-Flop eliminates which problem?", options:["Clock problem","Invalid SR state","Storage problem","Power problem"], answer:1, explanation:"The JK Flip-Flop removes the invalid state present in the SR Flip-Flop." },

        { question:"What happens in a JK Flip-Flop when J=K=1?", options:["No change","Set","Reset","Toggle"], answer:3, explanation:"When J=K=1, the JK Flip-Flop toggles its current state." },

        { question:"The D Flip-Flop is also known as?", options:["Toggle Flip-Flop","Delay Flip-Flop","Reset Flip-Flop","Clock Flip-Flop"], answer:1, explanation:"D stands for Delay; the output follows the input at the triggering clock edge." },

        { question:"The next state equation of a D Flip-Flop is?", options:["Q(next)=Q","Q(next)=D","Q(next)=NOT D","Q(next)=J"], answer:1, explanation:"For a D Flip-Flop, the next state equals the D input." },

        { question:"A T Flip-Flop toggles when T is?", options:["0","1","Both 0 and 1","Undefined"], answer:1, explanation:"When T=1, the output toggles. When T=0, the state remains unchanged." },

        { question:"Which Flip-Flop is most directly used for binary counters?", options:["SR","JK","D","T"], answer:3, explanation:"T Flip-Flops naturally toggle and are widely used in binary counters." },

        { question:"Race-around condition is associated mainly with?", options:["SR Flip-Flop","JK Flip-Flop","D Flip-Flop","T Flip-Flop"], answer:1, explanation:"Race-around occurs in level-triggered JK Flip-Flops when J=K=1 and the clock pulse is too long." },

        { question:"Race-around can be reduced using?", options:["Longer clock pulse","Master-Slave Flip-Flop","Removing clock","Increasing inputs"], answer:1, explanation:"A Master-Slave JK Flip-Flop prevents repeated toggling during one clock pulse." }

        ],


      "Registers":[

        { question:"A Register is made up of a group of?", options:["Logic gates only","Flip-Flops","Multiplexers only","Encoders"], answer:1, explanation:"A Register is a collection of Flip-Flops used to store multiple bits." },

        { question:"How many Flip-Flops are required for an 8-bit Register?", options:["2","4","8","16"], answer:2, explanation:"Each Flip-Flop stores one bit, so an 8-bit Register requires 8 Flip-Flops." },

        { question:"The main purpose of a Register is?", options:["Long-term storage","Temporary storage of binary information","Analog conversion","Arithmetic multiplication"], answer:1, explanation:"Registers provide fast temporary storage inside digital systems." },

        { question:"A Shift Register is used to?", options:["Only add numbers","Shift stored binary data","Convert analog signals","Decode instructions only"], answer:1, explanation:"Shift Registers move stored bits left or right with clock pulses." },

        { question:"In a Serial-In Serial-Out Register, data is?", options:["Entered and read serially","Entered parallel and read serially","Entered serial and read parallel","Entered parallel and read parallel"], answer:0, explanation:"SISO registers accept and output data one bit at a time." },

        { question:"In a Serial-In Parallel-Out Register, data is?", options:["Entered parallel and read parallel","Entered serially and read simultaneously from parallel outputs","Entered parallel and read serially","Never shifted"], answer:1, explanation:"Bits enter serially but become available simultaneously at parallel outputs." },

        { question:"A Parallel-In Parallel-Out Register transfers data?", options:["One bit at a time","All bits simultaneously","Only right to left","Only left to right"], answer:1, explanation:"PIPO registers load and output all bits in parallel." },

        { question:"Which Register operation moves every bit one position?", options:["Decoding","Shifting","Encoding","Complementing"], answer:1, explanation:"Shifting moves each stored bit left or right." },

        { question:"A Register containing n Flip-Flops can store?", options:["n bytes","n bits","2n bits","n² bits"], answer:1, explanation:"Each Flip-Flop stores one bit." }

        ],


      "Register Transfer Language":[

        { question:"RTL stands for?", options:["Real Time Logic","Register Transfer Language","Register Timing Logic","Random Transfer Language"], answer:1, explanation:"RTL stands for Register Transfer Language." },

        { question:"RTL is used to describe?", options:["Web pages","Data transfers and micro-operations between registers","Only programming algorithms","Database operations"], answer:1, explanation:"RTL describes how binary information moves between registers and what micro-operations are performed." },

        { question:"The RTL statement R2 ← R1 means?", options:["R1 is added to R2","Contents of R1 are transferred to R2","R2 is deleted","R1 and R2 are swapped"], answer:1, explanation:"The contents of source register R1 are transferred to destination register R2." },

        { question:"In the operation R2 ← R1, which register is the source?", options:["R1","R2","Both","Neither"], answer:0, explanation:"R1 supplies the data, so it is the source register." },

        { question:"In the operation R2 ← R1, which register is the destination?", options:["R1","R2","Both","Neither"], answer:1, explanation:"R2 receives the data, so it is the destination register." },

        { question:"A Register Transfer generally occurs under control of?", options:["A control signal","A random signal","Only power supply","Output display"], answer:0, explanation:"A control signal determines when a register transfer is allowed." },

        { question:"The expression P: R2 ← R1 means?", options:["Transfer occurs only when P=1","Transfer occurs only when P=0","P is stored in R2","R1 is deleted"], answer:0, explanation:"The control function P enables the transfer when P is equal to 1." },

        { question:"A Micro-operation is?", options:["An operation performed on data stored in registers","A large program","A type of operating system","A network protocol"], answer:0, explanation:"Micro-operations are elementary operations performed on information stored in registers." },

        { question:"Which of the following is NOT generally a micro-operation category?", options:["Arithmetic","Logic","Shift","Internet"], answer:3, explanation:"Arithmetic, logic and shift operations are micro-operation categories; Internet is unrelated." }

        ],


      "Arithmetic and Logic Micro Operations":[

        { question:"Arithmetic Micro-operations include?", options:["Addition and subtraction","Only shifting","Only encoding","Only storage"], answer:0, explanation:"Arithmetic micro-operations perform arithmetic on register contents, such as addition and subtraction." },

        { question:"Which operation is commonly used to perform subtraction in digital systems?", options:["AND operation","2's complement addition","OR operation","Shift operation only"], answer:1, explanation:"A − B can be performed as A + (2's complement of B)." },

        { question:"The 2's complement of a binary number is obtained by?", options:["Adding 1 directly","Complementing all bits and adding 1","Only reversing bits","Performing XOR with 0"], answer:1, explanation:"First find the 1's complement, then add 1." },

        { question:"Which is a logic micro-operation?", options:["Addition","Subtraction","AND","Increment"], answer:2, explanation:"AND is a bitwise logic micro-operation." },

        { question:"The OR micro-operation produces 1 when?", options:["Both inputs are 0","At least one input is 1","Both inputs are 1 only","Inputs are different only"], answer:1, explanation:"OR gives 1 if one or both corresponding input bits are 1." },

        { question:"The XOR operation produces 1 when two corresponding bits are?", options:["Both 0","Both 1","Different","Always 1"], answer:2, explanation:"XOR outputs 1 when the two input bits are different." },

        { question:"The NOT micro-operation?", options:["Adds 1","Complements every bit","Shifts bits right","Stores data"], answer:1, explanation:"NOT changes every 0 to 1 and every 1 to 0." },

        { question:"The operation R ← R + 1 is called?", options:["Decrement","Increment","Complement","Shift"], answer:1, explanation:"Adding 1 to a register is an increment micro-operation." },

        { question:"The operation R ← R − 1 is called?", options:["Increment","Decrement","Transfer","OR operation"], answer:1, explanation:"Subtracting 1 from a register is decrementing." },

        { question:"Which hardware unit commonly performs arithmetic and logic micro-operations?", options:["ALU","Keyboard","Monitor","Encoder only"], answer:0, explanation:"The Arithmetic Logic Unit performs arithmetic and logical operations." }

        ],


      "Shift Micro Operations":[

        { question:"A Shift Micro-operation moves bits?", options:["Between memory devices only","To adjacent positions within a register","Only to the ALU","Outside the computer"], answer:1, explanation:"Shift operations move register bits left or right." },

        { question:"A Logical Shift Right usually inserts?", options:["1 at MSB","0 at MSB","Previous LSB at MSB","Random bit"], answer:1, explanation:"Logical right shift inserts 0 into the most significant position." },

        { question:"A Logical Shift Left usually inserts?", options:["0 at LSB","1 at LSB","Previous MSB at LSB","Random bit"], answer:0, explanation:"Logical left shift inserts 0 into the least significant position." },

        { question:"A logical left shift of an unsigned binary number is approximately equivalent to?", options:["Division by 2","Multiplication by 2","Addition of 1","Complement"], answer:1, explanation:"Each left shift multiplies an unsigned binary value by 2 if overflow does not occur." },

        { question:"A logical right shift of an unsigned binary number is approximately equivalent to?", options:["Multiplication by 2","Division by 2","Addition by 2","Complement"], answer:1, explanation:"Each right shift divides an unsigned binary value by 2, discarding the remainder." },

        { question:"An Arithmetic Shift Right preserves?", options:["The least significant bit","The sign bit","All carry bits","Only zero bits"], answer:1, explanation:"Arithmetic right shift preserves the sign of a signed number by extending the sign bit." },

        { question:"A Circular Shift is also called?", options:["Arithmetic shift","Rotate operation","Logical complement","Register transfer"], answer:1, explanation:"Circular shifting rotates bits so a shifted-out bit re-enters at the opposite end." },

        { question:"In a Circular Shift Left, the bit shifted out from the MSB moves to?", options:["MSB again","LSB","Carry is always zero","Memory"], answer:1, explanation:"During a rotate-left operation, the MSB wraps around to the LSB." },

        { question:"Which shift is most suitable for preserving the sign of a signed binary number?", options:["Logical Shift Left","Logical Shift Right","Arithmetic Shift Right","Circular Shift"], answer:2, explanation:"Arithmetic Shift Right extends the sign bit." },

        { question:"Which micro-operation category is especially useful for multiplication and division by powers of 2?", options:["Shift micro-operation","Decoder operation","Encoding operation","Register transfer only"], answer:0, explanation:"Binary shifts efficiently implement multiplication or division by powers of 2." }

        ],

      "Instruction Codes and Computer Registers":[

        { question:"An instruction code generally consists of?", options:["Only an operand","Only an opcode","Opcode and operand/address fields","Only a memory address"], answer:2, explanation:"An instruction usually contains an opcode specifying the operation and one or more operand or address fields." },

        { question:"The opcode of an instruction specifies?", options:["Where data is stored","Which operation is to be performed","The size of memory","The clock frequency"], answer:1, explanation:"The opcode identifies the operation to be performed by the processor." },

        { question:"The operand field of an instruction generally specifies?", options:["The operation only","The data or location of data","The clock pulse","The ALU type"], answer:1, explanation:"The operand field provides the data or information needed to perform the operation." },

        { question:"Which register stores the address of the next instruction to be fetched?", options:["IR","PC","AC","DR"], answer:1, explanation:"The Program Counter contains the address of the next instruction." },

        { question:"Which register stores the currently executing instruction?", options:["PC","AR","IR","DR"], answer:2, explanation:"The Instruction Register stores the current instruction being decoded or executed." },

        { question:"Which register is commonly used to store arithmetic and logic results in a basic computer?", options:["AC","PC","IR","AR"], answer:0, explanation:"The Accumulator stores intermediate and final results of arithmetic and logic operations." },

        { question:"AR usually stands for?", options:["Arithmetic Register","Address Register","Accumulator Register","Automatic Register"], answer:1, explanation:"AR stands for Address Register and stores memory addresses." },

        { question:"DR usually stands for?", options:["Data Register","Decimal Register","Destination Register","Direct Register"], answer:0, explanation:"The Data Register temporarily stores data transferred to or from memory." },

        { question:"The Program Counter is updated mainly to?", options:["Store arithmetic results","Point to the next instruction","Decode an instruction","Store input data"], answer:1, explanation:"After instruction execution, PC is updated to locate the next instruction." },

        { question:"Which register is most directly involved in instruction decoding?", options:["IR","PC","AC","TR"], answer:0, explanation:"The Instruction Register holds the instruction whose opcode is decoded by the control unit." }

        ],


      "Common Bus System":[

        { question:"A common bus system is used primarily to?", options:["Increase the number of memory locations","Transfer data between registers","Perform only arithmetic operations","Store programs permanently"], answer:1, explanation:"A common bus provides a shared path for transferring binary information between registers." },

        { question:"A bus is best described as?", options:["A single memory cell","A group of communication lines","A type of flip-flop","An arithmetic circuit"], answer:1, explanation:"A bus consists of multiple lines used for transferring binary information." },

        { question:"The main advantage of a common bus system is?", options:["It eliminates all registers","It reduces the number of required data transfer connections","It increases instruction size","It removes the need for memory"], answer:1, explanation:"A common bus reduces the large number of individual connections required between every pair of registers." },

        { question:"Which device is commonly used to select one register's data onto a common bus?", options:["Multiplexer","Decoder only","Flip-Flop","Counter"], answer:0, explanation:"Multiplexers can select one of several register outputs to place onto the bus." },

        { question:"If there are n registers connected to a common bus, the bus allows?", options:["All registers to drive the bus simultaneously","One selected register to place data on the bus at a time","No data transfer","Only memory access"], answer:1, explanation:"Normally only one source register should place data on a common bus at a time." },

        { question:"Simultaneous outputs from multiple registers onto the same bus can cause?", options:["Faster execution","Bus contention","More storage","Automatic decoding"], answer:1, explanation:"Multiple devices driving conflicting values on a bus cause bus contention." },

        { question:"A register transfer through a common bus generally requires?", options:["A source selection and destination control","Only a memory address","Only an opcode","No control signals"], answer:0, explanation:"The source must be selected onto the bus and the destination register must be enabled to load the data." },

        { question:"A 16-bit common bus can transfer?", options:["1 bit at a time only","8 bits at a time","16 bits simultaneously","32 bits simultaneously"], answer:2, explanation:"The width of the bus determines how many bits can be transferred simultaneously." },

        { question:"Which statement about a common bus is correct?", options:["It can only connect memory","It provides a shared path for data transfer","It replaces the ALU","It stores instructions permanently"], answer:1, explanation:"A common bus is a shared communication path among digital components." }

        ],


      "Computer Instructions and Instruction Cycle":[

        { question:"A computer instruction is?", options:["A physical component","A binary code specifying an operation","A memory chip","A clock pulse"], answer:1, explanation:"An instruction is a binary-coded command that tells the computer which operation to perform." },

        { question:"The first major step of an instruction cycle is generally?", options:["Execute","Fetch","Interrupt","Store result"], answer:1, explanation:"The processor first fetches the instruction from memory." },

        { question:"During the fetch cycle, the instruction is transferred from memory to?", options:["PC","IR","AC","ALU"], answer:1, explanation:"The fetched instruction is loaded into the Instruction Register." },

        { question:"Which register supplies the address of the instruction during the fetch cycle?", options:["AC","IR","PC","DR"], answer:2, explanation:"The Program Counter contains the address of the instruction to fetch." },

        { question:"After an instruction is fetched, the next major operation is usually?", options:["Decode","Shutdown","Clear memory","Interrupt immediately"], answer:0, explanation:"The control unit decodes the instruction to determine the required operation." },

        { question:"The instruction cycle generally includes?", options:["Fetch, Decode and Execute","Only Fetch","Only Decode","Only Execute"], answer:0, explanation:"The basic instruction cycle consists of fetching, decoding and executing an instruction." },

        { question:"During the decode phase, the control unit determines?", options:["Only memory size","Which operation the instruction specifies","Only CPU temperature","The user's input language"], answer:1, explanation:"The opcode is decoded to determine the operation and required control signals." },

        { question:"The execution phase of an instruction cycle?", options:["Fetches the next instruction only","Performs the operation specified by the instruction","Deletes the instruction","Stops the processor"], answer:1, explanation:"Execution carries out the operation indicated by the instruction." },

        { question:"Why is the Program Counter usually incremented during instruction processing?", options:["To increase memory size","To point to the next instruction","To decode the opcode","To reset the ALU"], answer:1, explanation:"The PC is normally advanced so the processor can fetch the next sequential instruction." },

        { question:"An instruction cycle is repeated?", options:["Only once after startup","For each instruction executed by the processor","Only during input operations","Only when interrupts occur"], answer:1, explanation:"The CPU repeatedly performs instruction cycles while executing a program." }

        ],


      "Memory Reference Instructions":[

        { question:"A memory reference instruction generally accesses?", options:["Only CPU registers","A memory location","Only input devices","The clock generator"], answer:1, explanation:"Memory reference instructions use an address field to access a memory location." },

        { question:"Which of the following is a common memory reference operation?", options:["AND","INPUT","HALT","CLEAR SCREEN"], answer:0, explanation:"AND is a common operation performed using data stored in memory." },

        { question:"The instruction LDA generally means?", options:["Load Address","Load Accumulator","Logical Data Addition","Link Data Address"], answer:1, explanation:"LDA loads data from a specified memory location into the Accumulator." },

        { question:"The instruction STA generally means?", options:["Store Accumulator","Start Arithmetic","Set Address","Store Address"], answer:0, explanation:"STA stores the contents of the Accumulator into a specified memory location." },

        { question:"The instruction ADD in a basic computer generally?", options:["Adds a memory operand to AC","Adds PC to IR","Adds two memory addresses only","Clears the accumulator"], answer:0, explanation:"ADD typically adds the operand from memory to the contents of the Accumulator." },

        { question:"The instruction BUN is primarily used for?", options:["Addition","Unconditional branching","Input","Logical complement"], answer:1, explanation:"BUN transfers program control unconditionally to a specified address." },

        { question:"Which operation is performed by an AND memory reference instruction?", options:["Arithmetic addition","Bitwise AND between AC and memory data","Shift operation","Input operation"], answer:1, explanation:"The contents of AC are ANDed bit by bit with the operand from memory." },

        { question:"The instruction ISZ generally performs?", options:["Increment memory word and skip next instruction if result becomes zero","Input a zero","Initialize stack","Shift accumulator right"], answer:0, explanation:"ISZ increments a memory word and skips the next instruction when the result is zero." },

        { question:"Direct addressing means?", options:["The address field directly specifies the operand address","The operand is inside the opcode","No address is used","The address is obtained only from input"], answer:0, explanation:"In direct addressing, the instruction address field is the actual address of the operand." },

        { question:"Indirect addressing means?", options:["No memory access occurs","The address field points to a location containing the effective address","The operand is always in AC","Only registers are used"], answer:1, explanation:"Indirect addressing requires an additional memory reference to obtain the effective address." }

        ],


      "Input Output and Interrupts":[

        { question:"Input devices are used to?", options:["Enter data and instructions into the computer","Only store programs permanently","Perform arithmetic operations","Generate clock signals"], answer:0, explanation:"Input devices provide data and instructions to the computer system." },

        { question:"Output devices are used to?", options:["Enter data into memory","Present processed information","Decode instructions","Generate interrupts only"], answer:1, explanation:"Output devices present the results of computer processing." },

        { question:"An interrupt is?", options:["A permanent shutdown","A signal requiring processor attention","A memory location","A type of register"], answer:1, explanation:"An interrupt temporarily changes the normal flow of execution so the CPU can handle an event." },

        { question:"When an interrupt occurs, the processor generally?", options:["Forgets the current program permanently","Temporarily suspends the current program and services the interrupt","Deletes memory","Stops forever"], answer:1, explanation:"The CPU saves the necessary state, services the interrupt, and later resumes the interrupted program." },

        { question:"An Interrupt Service Routine is commonly abbreviated as?", options:["ISR","IR","ICR","IS"], answer:0, explanation:"ISR stands for Interrupt Service Routine." },

        { question:"The main purpose of an ISR is to?", options:["Increase RAM size","Handle the event that caused the interrupt","Decode every instruction","Store all programs"], answer:1, explanation:"An ISR contains the instructions required to service a particular interrupt." },

        { question:"After servicing an interrupt, the processor normally?", options:["Restarts the computer","Returns to the interrupted program","Deletes the program","Stops execution"], answer:1, explanation:"After completing the ISR, the processor restores execution of the interrupted program." },

        { question:"Which is an example of an I/O operation?", options:["Reading keyboard input","Incrementing PC","Decoding opcode","Adding two registers"], answer:0, explanation:"Reading data from a keyboard is an input operation." },

        { question:"An interrupt can improve CPU efficiency because?", options:["The CPU must continuously poll devices","The CPU can perform other work until attention is required","Memory is eliminated","Instructions are no longer fetched"], answer:1, explanation:"Interrupts allow the CPU to continue useful work instead of continuously checking device status." },

        { question:"Polling differs from interrupts because polling?", options:["Allows devices to interrupt the CPU","Requires the CPU to repeatedly check device status","Never uses input devices","Stops the clock"], answer:1, explanation:"Polling repeatedly checks whether a device needs service, while interrupts notify the CPU when service is needed." }

        ],


      "Design of Basic Computer":[

        { question:"A basic computer organization mainly consists of?", options:["CPU, memory and input/output components","Only memory","Only ALU","Only registers"], answer:0, explanation:"A computer system requires processing, storage and communication with input/output devices." },

        { question:"The CPU primarily contains?", options:["ALU, control unit and registers","Only hard disk","Only monitor","Only keyboard"], answer:0, explanation:"The CPU consists mainly of the ALU, control unit and processor registers." },

        { question:"The ALU is responsible for?", options:["Only storing programs","Arithmetic and logical operations","Only fetching instructions","Displaying output"], answer:1, explanation:"The Arithmetic Logic Unit performs arithmetic and logical processing." },

        { question:"The Control Unit primarily?", options:["Stores user files permanently","Generates control signals for computer operations","Performs all arithmetic itself","Acts as an input device"], answer:1, explanation:"The Control Unit coordinates operations by generating appropriate control signals." },

        { question:"Registers are used mainly for?", options:["Slow permanent storage","Fast temporary storage inside the CPU","Printing output","Internet communication"], answer:1, explanation:"Registers provide very fast storage for data, addresses and instructions during processing." },

        { question:"The system bus can include?", options:["Data, address and control buses","Only a data bus","Only an address bus","Only an internet bus"], answer:0, explanation:"Computer systems commonly use data, address and control buses." },

        { question:"The data bus transfers?", options:["Only memory addresses","Actual data and instructions","Only control signals","Only clock pulses"], answer:1, explanation:"The data bus carries binary data and instructions between components." },

        { question:"The address bus is primarily used to?", options:["Transfer arithmetic results only","Specify locations in memory or I/O","Store instructions permanently","Generate output"], answer:1, explanation:"Addresses identify memory locations or I/O devices involved in an operation." },

        { question:"The control bus carries?", options:["Only numerical data","Control and timing signals","Only memory addresses","Only program instructions"], answer:1, explanation:"Control lines carry signals such as read, write, interrupt and timing signals." }

        ],


      "Hardwired and Microprogrammed Control":[

        { question:"A Hardwired Control Unit generates control signals using?", options:["Fixed hardware logic circuits","Only software programs","Hard disk storage","Input devices"], answer:0, explanation:"Hardwired control uses combinational and sequential logic circuits to generate control signals." },

        { question:"A Microprogrammed Control Unit generates control signals using?", options:["Microinstructions stored in control memory","Only external input","Only ALU operations","Mechanical switches"], answer:0, explanation:"Microinstructions stored in control memory specify the required control signals." },

        { question:"Which control unit is generally faster?", options:["Hardwired control","Microprogrammed control","Both are always identical","Neither"], answer:0, explanation:"Hardwired control is generally faster because control signals are generated directly by hardware logic." },

        { question:"Which control approach is generally easier to modify?", options:["Hardwired control","Microprogrammed control","Neither","Only register control"], answer:1, explanation:"Microprogrammed control can be modified by changing microinstructions in control memory." },

        { question:"Hardwired control is generally more suitable for?", options:["Simple instruction sets requiring high speed","Frequent instruction set modification","Only input devices","Web applications"], answer:0, explanation:"Hardwired control is fast and commonly associated with simpler instruction sets." },

        { question:"Microprogrammed control is generally advantageous when?", options:["Flexibility is important","No control memory is available","The CPU has no instructions","Only one operation exists"], answer:0, explanation:"Microprogramming makes complex control sequences easier to design and modify." },

        { question:"A major disadvantage of hardwired control is?", options:["It is too flexible","It is difficult to modify","It cannot generate signals","It has no speed advantage"], answer:1, explanation:"Changing a hardwired control unit often requires redesigning hardware circuitry." },

        { question:"A major disadvantage of microprogrammed control is generally?", options:["It is less flexible","It may be slower than hardwired control","It cannot use memory","It has no instructions"], answer:1, explanation:"Fetching and executing microinstructions can make microprogrammed control slower." },

        { question:"Microprogrammed control is based on?", options:["A sequence of microinstructions","A single opcode only","A keyboard command","A hard disk sector"], answer:0, explanation:"A microprogram is an ordered sequence of microinstructions controlling processor operations." }

        ],


      "Control Memory and Address Sequencing":[

        { question:"Control memory stores?", options:["User documents","Microinstructions","Only arithmetic data","Output images"], answer:1, explanation:"Control memory stores the microinstructions used by a microprogrammed control unit." },

        { question:"A microinstruction contains?", options:["Control information for micro-operations","Only a user password","Only a memory address","Only input data"], answer:0, explanation:"Microinstructions specify control signals and may contain sequencing information." },

        { question:"The purpose of address sequencing is to?", options:["Determine the address of the next microinstruction","Increase RAM capacity","Store output","Decode keyboard input"], answer:0, explanation:"Address sequencing determines which microinstruction will be executed next." },

        { question:"The Control Address Register usually contains?", options:["The address of the current or next microinstruction","The user's memory address only","The accumulator value","The opcode result only"], answer:0, explanation:"The control address register selects a location in control memory." },

        { question:"Sequential microinstruction execution means?", options:["The next address is normally the next consecutive control memory location","Addresses are random","The CPU stops after each microinstruction","Only one microinstruction exists"], answer:0, explanation:"Normally the control address advances sequentially unless branching occurs." },

        { question:"A microprogram branch is used to?", options:["Select a different next microinstruction address","Delete control memory","Stop the ALU permanently","Increase register size"], answer:0, explanation:"Branching changes the normal sequential flow of microinstruction execution." },

        { question:"Conditional branching in a microprogram depends on?", options:["A specified condition or status bit","Only the monitor","The keyboard layout","The number of users"], answer:0, explanation:"Conditions such as flags or status bits can determine the next microinstruction address." },

        { question:"Mapping from an instruction opcode to a control memory address is used to?", options:["Begin the appropriate microprogram","Delete the instruction","Store the opcode in RAM only","Increase clock speed"], answer:0, explanation:"The opcode can select the starting address of the microprogram for that instruction." },

        { question:"Control memory is mainly associated with?", options:["Hardwired control","Microprogrammed control","Only input systems","External storage"], answer:1, explanation:"Microprogrammed control relies on control memory to store microinstructions." }

        ],


      "Design of Control Unit":[

        { question:"The primary responsibility of a Control Unit is to?", options:["Generate control signals and coordinate operations","Store all user files","Display graphics","Perform only multiplication"], answer:0, explanation:"The Control Unit coordinates processor operations by issuing appropriate control signals." },

        { question:"The Control Unit coordinates?", options:["Data movement and micro-operations","Only monitor brightness","Only keyboard input","Only file storage"], answer:0, explanation:"Control signals coordinate transfers between registers, memory operations and ALU micro-operations." },

        { question:"Control signals determine?", options:["When and how hardware components perform operations","Only memory size","The user's password","The monitor resolution"], answer:0, explanation:"Control signals specify the timing and execution of hardware operations." },

        { question:"The design of a control unit depends heavily on?", options:["Instruction set architecture","Screen size","Keyboard color","Internet speed"], answer:0, explanation:"The instruction set and processor organization determine required control sequences." },

        { question:"A complex instruction may require?", options:["Multiple micro-operations","No control signals","No registers","Only one memory bit"], answer:0, explanation:"Complex instructions are executed through a sequence of elementary micro-operations." },

        { question:"The timing of micro-operations is generally synchronized using?", options:["Clock signals","Monitor signals","Mouse signals","Internet signals"], answer:0, explanation:"Clock pulses provide timing and synchronization for sequential operations." },

        { question:"The Control Unit directly performs arithmetic calculations?", options:["Yes, always","No, arithmetic is mainly performed by the ALU","Only during interrupts","Only in RISC"], answer:1, explanation:"The Control Unit controls operations while the ALU performs arithmetic and logic." },

        { question:"An effective control unit design should aim for?", options:["Correct sequencing and efficient generation of control signals","Maximum screen brightness","Minimum memory addresses","Only input operations"], answer:0, explanation:"The control unit must generate correctly timed control signals for reliable execution." }

        ],


      "RISC vs CISC":[

        { question:"RISC stands for?", options:["Reduced Instruction Set Computer","Random Instruction System Computer","Register Instruction System Control","Real Integrated System Computer"], answer:0, explanation:"RISC stands for Reduced Instruction Set Computer." },

        { question:"CISC stands for?", options:["Complex Instruction Set Computer","Central Instruction System Computer","Computer Integrated System Control","Compact Instruction Set Computer"], answer:0, explanation:"CISC stands for Complex Instruction Set Computer." },

        { question:"RISC architectures generally have?", options:["A relatively small and simple instruction set","Only one instruction","A very large number of highly complex instructions","No registers"], answer:0, explanation:"RISC focuses on simpler instructions that can often execute efficiently." },

        { question:"CISC architectures generally provide?", options:["A larger and more complex instruction set","No memory instructions","Only load instructions","Only one addressing mode"], answer:0, explanation:"CISC architectures typically support many complex instructions and addressing modes." },

        { question:"RISC instructions are often designed to?", options:["Execute efficiently and use simpler formats","Require many different hardware stages","Always access memory multiple times","Never use registers"], answer:0, explanation:"RISC emphasizes simple instructions and efficient execution." },

        { question:"Which architecture commonly emphasizes a load/store design?", options:["RISC","CISC only","Neither","Analog computer"], answer:0, explanation:"RISC architectures commonly restrict memory access primarily to explicit load and store instructions." },

        { question:"Which architecture generally has more complex instruction decoding?", options:["RISC","CISC","Both always equal","Neither"], answer:1, explanation:"CISC instructions are generally more varied and complex, requiring more complex decoding." },

        { question:"Microprogrammed control is historically associated more strongly with?", options:["Complex instruction architectures","Only simple RISC instructions","No instruction sets","Input devices"], answer:0, explanation:"Microprogramming is particularly useful for implementing complex instruction sets." },

        { question:"Which statement is generally correct?", options:["RISC focuses on simpler instructions while CISC provides more complex instructions","RISC has no registers","CISC has no control unit","Both have identical instruction philosophies"], answer:0, explanation:"RISC and CISC differ mainly in their instruction set design philosophy." },

        { question:"The main objective of RISC design is generally?", options:["Efficient execution of simpler instructions","Maximum instruction complexity","Elimination of registers","Removal of the control unit"], answer:0, explanation:"RISC emphasizes simplified instructions and efficient processor implementation." }

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

    "Data Structures": {

        "Basic Terminology & Elementary Data Organization": [

            { question:"What is a data structure?", options:["A programming language","A way of organizing and storing data","A computer hardware device","A type of operating system"], answer:1, explanation:"A data structure is a systematic way of organizing and storing data so that it can be accessed and modified efficiently." },

            { question:"The main purpose of a data structure is to?", options:["Increase program size","Organize data for efficient operations","Replace algorithms","Remove all memory usage"], answer:1, explanation:"Data structures organize data so operations such as searching, insertion and deletion can be performed efficiently." },

            { question:"Which of the following is an example of a linear data structure?", options:["Tree","Graph","Array","Heap"], answer:2, explanation:"An array is a linear data structure because its elements are arranged sequentially." },

            { question:"Which of the following is a non-linear data structure?", options:["Array","Stack","Queue","Tree"], answer:3, explanation:"A tree is a non-linear data structure because its elements are organized hierarchically." },

            { question:"Data structures are mainly classified into?", options:["Simple and difficult","Linear and non-linear","Fast and slow","Hardware and software"], answer:1, explanation:"Data structures are commonly classified as linear and non-linear." },

            { question:"In a linear data structure, elements are generally arranged?", options:["Hierarchically","Sequentially","Randomly without relationships","Only in two dimensions"], answer:1, explanation:"Linear data structures arrange elements in a sequential order." },

            { question:"Which of the following is NOT a linear data structure?", options:["Array","Stack","Queue","Graph"], answer:3, explanation:"A graph is a non-linear data structure." },

            { question:"Which data structure follows the Last In First Out principle?", options:["Queue","Stack","Array","Graph"], answer:1, explanation:"A stack follows the LIFO principle where the last inserted element is removed first." },

            { question:"Which data structure follows the First In First Out principle?", options:["Stack","Queue","Tree","Array"], answer:1, explanation:"A queue follows the FIFO principle where the first inserted element is removed first." },

            { question:"A collection of related data items is called?", options:["Data structure","Algorithm","Compiler","Program"], answer:0, explanation:"A data structure is a collection of related data items organized in a particular way." },

            { question:"Which operation adds a new element into a data structure?", options:["Deletion","Insertion","Traversal","Searching"], answer:1, explanation:"Insertion is the operation of adding a new element to a data structure." },

            { question:"Which operation removes an existing element from a data structure?", options:["Insertion","Traversal","Deletion","Searching"], answer:2, explanation:"Deletion removes an existing element from a data structure." },

            { question:"Which operation visits each element of a data structure?", options:["Searching","Traversal","Insertion","Sorting"], answer:1, explanation:"Traversal means visiting or processing the elements of a data structure." },

            { question:"Which operation is used to locate a particular element?", options:["Traversal","Searching","Insertion","Deletion"], answer:1, explanation:"Searching is used to locate a required element in a collection of data." },

            { question:"Which operation arranges data in a particular order?", options:["Searching","Sorting","Deletion","Traversal"], answer:1, explanation:"Sorting arranges elements according to a specified order such as ascending or descending." },

            { question:"An array generally stores elements?", options:["Without any order","In contiguous memory locations","Only in different computers","Only as characters"], answer:1, explanation:"Array elements are typically stored in contiguous memory locations." },

            { question:"Which data structure represents a hierarchical relationship?", options:["Array","Queue","Tree","Stack"], answer:2, explanation:"Trees represent hierarchical relationships between elements." },

            { question:"Which data structure consists of vertices and edges?", options:["Stack","Queue","Graph","Array"], answer:2, explanation:"A graph consists of vertices, also called nodes, and edges connecting them." },

            { question:"A node is commonly associated with?", options:["Linked structures such as linked lists and trees","Only arrays","Only integers","Only operating systems"], answer:0, explanation:"Nodes are fundamental elements in linked lists, trees and other linked data structures." },

            { question:"A data item is?", options:["A single unit of information","A complete algorithm","A programming language","A computer network"], answer:0, explanation:"A data item represents a single unit of information." },

            { question:"A data type defines?", options:["Only the memory address","The kind of values and operations allowed","Only program execution time","Only the operating system"], answer:1, explanation:"A data type specifies the kind of values that can be stored and the operations that can be performed on them." },

            { question:"Which of the following is a primitive data type?", options:["Integer","Linked list","Tree","Graph"], answer:0, explanation:"Integer is a primitive data type, while linked lists, trees and graphs are more complex data structures." },

            { question:"Which of the following is a basic operation performed on data structures?", options:["Searching","Compiling only","Booting the computer","Installing an operating system"], answer:0, explanation:"Searching is one of the common operations performed on data structures." },

            { question:"Which data structure can dynamically grow or shrink by linking nodes?", options:["Static array","Linked list","Fixed table","Constant variable"], answer:1, explanation:"A linked list uses nodes connected through links and can dynamically grow or shrink." },

            { question:"Elementary data organization mainly focuses on?", options:["How data is represented and organized","Only computer hardware","Only network communication","Only graphics processing"], answer:0, explanation:"Elementary data organization deals with how data items are represented, stored and organized." }

        ],

        "Algorithms & Algorithm Efficiency": [

            { question:"An algorithm is?", options:["A programming language","A finite sequence of well-defined steps to solve a problem","A computer hardware component","A data type"], answer:1, explanation:"An algorithm is a finite and well-defined sequence of steps used to solve a problem." },

            { question:"An algorithm should have?", options:["Infinite steps","A finite number of steps","No input","No output"], answer:1, explanation:"An algorithm must terminate after a finite number of steps." },

            { question:"The property that every algorithm step must be clearly defined is called?", options:["Ambiguity","Definiteness","Recursion","Complexity"], answer:1, explanation:"Definiteness means every step of an algorithm must be clear and unambiguous." },

            { question:"An algorithm should produce?", options:["Only input","At least one output","Only errors","No result"], answer:1, explanation:"An algorithm should produce one or more outputs corresponding to the given input." },

            { question:"The data supplied to an algorithm before processing is called?", options:["Output","Input","Complexity","Efficiency"], answer:1, explanation:"Input is the data provided to an algorithm for processing." },

            { question:"The result produced after an algorithm completes is called?", options:["Input","Output","Loop","Memory"], answer:1, explanation:"Output is the result generated by the algorithm after processing input." },

            { question:"An algorithm must terminate after?", options:["Infinite time","A finite number of steps","Exactly one step","Only recursion"], answer:1, explanation:"Finiteness is a fundamental property requiring an algorithm to terminate after a finite number of steps." },

            { question:"Which of the following is NOT generally a characteristic of a good algorithm?", options:["Definiteness","Finiteness","Ambiguous instructions","Correct output"], answer:2, explanation:"An algorithm should contain clear and unambiguous instructions." },

            { question:"Algorithm efficiency refers to?", options:["How efficiently an algorithm uses resources","The color of the program","The programming language name","The number of comments"], answer:0, explanation:"Algorithm efficiency measures the resources such as time and memory required by an algorithm." },

            { question:"The two major measures of algorithm efficiency are?", options:["Input and output","Time and space complexity","Loops and functions","Hardware and software"], answer:1, explanation:"Algorithm efficiency is commonly evaluated using time complexity and space complexity." },

            { question:"Time complexity measures?", options:["Amount of memory used only","Growth of execution time with input size","Program file size","Number of variables only"], answer:1, explanation:"Time complexity describes how the running time of an algorithm grows as input size increases." },

            { question:"Space complexity measures?", options:["Execution speed","Memory required by an algorithm","Number of outputs","Number of loops only"], answer:1, explanation:"Space complexity describes the amount of memory required as input size grows." },

            { question:"Algorithm efficiency is generally analyzed in terms of?", options:["Input size","Screen resolution","Keyboard type","Programming font"], answer:0, explanation:"The performance of algorithms is generally analyzed according to input size, usually represented by n." },

            { question:"Which algorithm is generally more efficient for large input sizes?", options:["One with slower growth in running time","One with more instructions regardless of input","One with the largest memory use","One with infinite execution"], answer:0, explanation:"For large inputs, algorithms with slower growth rates are generally more efficient." },

            { question:"Why is algorithm analysis important?", options:["To compare efficiency of different solutions","To remove all programming languages","To avoid writing code","To eliminate input data"], answer:0, explanation:"Algorithm analysis helps compare different approaches for solving the same problem." },

            { question:"The performance of an algorithm is commonly studied before?", options:["Writing any problem statement","Actual implementation on a specific machine","Defining input","Understanding the problem"], answer:1, explanation:"Theoretical analysis allows algorithms to be evaluated without depending on a particular machine or implementation." },

            { question:"Which factor is generally ignored during asymptotic algorithm analysis?", options:["Growth rate for large input","Hardware-specific execution speed","Input size","Number of basic operations"], answer:1, explanation:"Asymptotic analysis focuses on growth with input size rather than machine-specific factors." },

            { question:"An algorithm that performs a fixed number of operations regardless of input size has complexity?", options:["O(n)","O(n²)","O(1)","O(log n)"], answer:2, explanation:"Constant-time algorithms have complexity O(1) because their work does not grow with input size." },

            { question:"If the number of operations grows directly with n, the complexity is generally?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:2, explanation:"Linear complexity means the number of operations grows proportionally with input size." },

            { question:"Nested loops each running n times commonly produce?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:3, explanation:"Two nested loops each running approximately n times produce roughly n × n operations." },

            { question:"Which approach is useful for comparing algorithms independently of hardware?", options:["Asymptotic analysis","Screen testing","Keyboard testing","Font analysis"], answer:0, explanation:"Asymptotic analysis compares algorithms based on growth rates rather than specific hardware." },

            { question:"The efficiency of an algorithm can depend on?", options:["Input size","Algorithm design","Required operations","All of these"], answer:3, explanation:"Algorithm efficiency depends on input size, the operations performed and the algorithm design." },

            { question:"An algorithm with lower time complexity is always?", options:["Guaranteed to be faster for every tiny input","Generally more scalable for large inputs","Impossible to implement","Guaranteed to use less memory"], answer:1, explanation:"Lower asymptotic time complexity generally provides better scalability for large input sizes." }

        ],

        "Complexity, Asymptotic Notations & Time-Space Trade-off": [

            { question:"What does Big-O notation generally represent?", options:["Exact running time","An asymptotic upper bound on growth","Only best-case complexity","Memory address"], answer:1, explanation:"Big-O notation describes an asymptotic upper bound on the growth rate of an algorithm." },

            { question:"Big-O notation is mainly used to describe?", options:["Hardware cost","Growth rate of algorithm resource usage","Variable names","Programming syntax"], answer:1, explanation:"Big-O describes how time or space requirements grow as input size increases." },

            { question:"Which notation is commonly associated with an upper bound?", options:["Big-O","Big-Omega only","Theta only","Constant notation"], answer:0, explanation:"Big-O notation gives an asymptotic upper bound." },

            { question:"Which complexity represents constant time?", options:["O(n)","O(log n)","O(1)","O(n²)"], answer:2, explanation:"O(1) means the amount of work remains constant regardless of input size." },

            { question:"Which complexity generally grows logarithmically?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:1, explanation:"O(log n) represents logarithmic growth." },

            { question:"Which complexity represents linear growth?", options:["O(n)","O(1)","O(log n)","O(n²)"], answer:0, explanation:"O(n) means the work grows approximately proportionally to input size." },

            { question:"Which complexity grows faster for large n?", options:["O(log n)","O(n)","O(n²)","O(1)"], answer:2, explanation:"Quadratic growth O(n²) grows faster than linear, logarithmic and constant growth." },

            { question:"Which complexity is generally considered most efficient for very large input sizes?", options:["O(n²)","O(n)","O(log n)","O(1)"], answer:3, explanation:"Constant complexity O(1) does not grow with input size and is generally the most efficient asymptotically." },

            { question:"What is the dominant term of 3n² + 5n + 2 for large n?", options:["3n²","5n","2","n²"], answer:3, explanation:"In asymptotic analysis, constant factors are ignored and the highest-growth term dominates, giving O(n²)." },

            { question:"What is the Big-O complexity of 7n + 10?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:2, explanation:"The linear term dominates for large n, so the complexity is O(n)." },

            { question:"What is the Big-O complexity of a constant number of operations?", options:["O(n)","O(n²)","O(log n)","O(1)"], answer:3, explanation:"A fixed amount of work is represented by O(1)." },

            { question:"What is the Big-O complexity of two consecutive loops each running n times?", options:["O(n²)","O(n)","O(log n)","O(1)"], answer:1, explanation:"Consecutive loops add their operations, producing approximately 2n operations, which simplifies to O(n)." },

            { question:"What is the Big-O complexity of two nested loops each running n times?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:3, explanation:"Nested loops multiply their iteration counts, giving approximately n² operations." },

            { question:"Why are constant multipliers ignored in Big-O notation?", options:["They never exist","Growth rate is more important for large input sizes","They cause syntax errors","They only affect memory"], answer:1, explanation:"Asymptotic analysis focuses on how rapidly the function grows for large input sizes." },

            { question:"Which complexity grows slowest as n becomes very large?", options:["O(n²)","O(n)","O(log n)","O(2ⁿ)"], answer:2, explanation:"Logarithmic growth increases more slowly than linear, quadratic and exponential growth." },

            { question:"Which complexity generally grows fastest?", options:["O(log n)","O(n)","O(n²)","O(2ⁿ)"], answer:3, explanation:"Exponential complexity grows extremely rapidly as input size increases." },

            { question:"Space complexity refers to?", options:["Execution time","Memory required by an algorithm","Number of loops","CPU frequency"], answer:1, explanation:"Space complexity measures memory usage as a function of input size." },

            { question:"Auxiliary space refers to?", options:["Input storage only","Extra memory used by an algorithm excluding input storage","Only output memory","Computer disk space"], answer:1, explanation:"Auxiliary space is the additional memory required during algorithm execution, apart from the input itself." },

            { question:"An algorithm using only a fixed number of extra variables generally has auxiliary space?", options:["O(1)","O(n)","O(n²)","O(log n²)"], answer:0, explanation:"A fixed number of variables requires constant auxiliary space." },

            { question:"If an algorithm creates an additional array of size n, its extra space is generally?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:2, explanation:"An additional array proportional to input size requires O(n) auxiliary space." },

            { question:"A time-space trade-off means?", options:["Reducing both time and space always","Using more memory to reduce execution time or vice versa","Ignoring memory completely","Only changing programming languages"], answer:1, explanation:"A time-space trade-off occurs when additional memory can be used to improve speed, or additional time can reduce memory requirements." },

            { question:"Which situation is an example of a time-space trade-off?", options:["Using extra memory to store previously computed results","Deleting all data","Avoiding algorithms","Increasing program comments"], answer:0, explanation:"Storing previously computed results can use extra memory while reducing repeated computation time." },

            { question:"Using a lookup table can often?", options:["Increase time and reduce memory","Reduce time by using additional memory","Remove all input","Make an algorithm infinite"], answer:1, explanation:"Lookup tables trade additional memory for faster retrieval and reduced computation time." },

            { question:"What is the main purpose of asymptotic notation?", options:["To calculate exact execution time in seconds","To describe algorithm growth for large input sizes","To measure screen resolution","To count comments"], answer:1, explanation:"Asymptotic notation describes the growth behavior of algorithms as input size becomes large." },

            { question:"Which factor is most important when comparing asymptotic complexity?", options:["Growth rate as input size increases","Variable name length","Code indentation only","Computer monitor size"], answer:0, explanation:"Asymptotic analysis focuses primarily on how resource requirements grow with increasing input size." },

            { question:"If one algorithm is O(n) and another is O(n²), which is generally more scalable for large n?", options:["O(n²)","O(n)","Both are always identical","Neither can run"], answer:1, explanation:"Linear growth increases much more slowly than quadratic growth for large inputs." },

            { question:"What does Time-Space trade-off help a programmer do?", options:["Balance execution speed and memory usage","Avoid all data structures","Remove algorithms","Guarantee O(1) complexity"], answer:0, explanation:"The time-space trade-off helps choose an appropriate balance between running time and memory consumption." }

        ],

        "Arrays": [

            { question:"An array is best described as?", options:["A collection of elements stored in contiguous memory locations","A collection of unrelated files","A hierarchical structure","A set of random memory locations"], answer:0, explanation:"An array stores elements of the same type in contiguous memory locations." },

            { question:"Array elements are generally accessed using?", options:["Pointers only","Indexes","Edges","Keys only"], answer:1, explanation:"Array elements are accessed using their index positions." },

            { question:"What is the index of the first element in most programming languages?", options:["0","1","-1","Depends on memory"], answer:0, explanation:"Most common programming languages such as C++ use zero-based indexing." },

            { question:"Which of the following is a major advantage of arrays?", options:["Fast random access using indexes","No memory requirement","Unlimited size always","Elements stored randomly"], answer:0, explanation:"Arrays provide efficient direct access to elements using their indexes." },

            { question:"Accessing an array element using its index generally takes?", options:["O(1)","O(n)","O(n²)","O(log n)"], answer:0, explanation:"Array indexing provides direct access, which generally takes constant time." },

            { question:"Inserting an element at the beginning of a normal array generally requires?", options:["No operation","Shifting existing elements","Deleting all elements","Sorting the array"], answer:1, explanation:"Elements usually need to be shifted to create space at the beginning." },

            { question:"Insertion at the beginning of an array generally has complexity?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:2, explanation:"Up to n elements may need to be shifted, resulting in O(n) time." },

            { question:"Deleting an element from the middle of an array may require?", options:["Shifting elements","Creating a tree","Adding a stack","Changing the data type"], answer:0, explanation:"Elements after the deleted position may need to be shifted." },

            { question:"Which operation is generally efficient in an array?", options:["Accessing an element by index","Insertion at the beginning","Deletion from the beginning","Insertion in the middle without shifting"], answer:0, explanation:"Direct indexed access is one of the main advantages of arrays." },

            { question:"An array generally stores elements?", options:["Of the same data type","Only strings","Only objects","Of unlimited unrelated types"], answer:0, explanation:"Traditional arrays generally store homogeneous elements of the same data type." },

            { question:"A two-dimensional array is commonly used to represent?", options:["A matrix","A queue only","A single variable","A linked list"], answer:0, explanation:"A two-dimensional array is commonly used to represent rows and columns of a matrix." },

            { question:"Which of the following is a limitation of a static array?", options:["Fixed size","Fast access","Contiguous storage","Indexed elements"], answer:0, explanation:"A static array generally has a fixed size that cannot easily change during execution." },

            { question:"Array traversal means?", options:["Visiting array elements sequentially","Deleting the array","Changing its data type","Sorting automatically"], answer:0, explanation:"Traversal means visiting or processing each element of an array." },

            { question:"Searching for an element sequentially in an unsorted array generally takes?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:2, explanation:"In the worst case, every element may need to be checked." },

            { question:"Which memory arrangement is generally used by arrays?", options:["Contiguous memory allocation","Random allocation only","Hierarchical allocation","Circular allocation only"], answer:0, explanation:"Array elements are generally stored in contiguous memory locations." },

            { question:"What happens when an array index is outside its valid range?", options:["It accesses a valid next element","It may cause an out-of-bounds error or undefined behavior","The array automatically doubles","The array becomes circular"], answer:1, explanation:"Accessing an invalid index can cause errors or undefined behavior depending on the language." },

            { question:"Which operation usually requires the least time in an array?", options:["Access by index","Insertion at beginning","Deletion at beginning","Insertion in middle"], answer:0, explanation:"Direct indexing generally takes constant time O(1)." },

            { question:"An array with n elements generally has valid indexes?", options:["0 to n","1 to n","0 to n-1","1 to n-1 only"], answer:2, explanation:"For zero-based indexing, an array of size n has indexes from 0 through n-1." },

            { question:"Which data structure provides direct random access?", options:["Array","Singly linked list","Queue only","Stack only"], answer:0, explanation:"Arrays provide direct access to elements using indexes." },

            { question:"Which operation can require shifting many elements in an array?", options:["Insertion","Reading an indexed element","Checking array size","Accessing first element"], answer:0, explanation:"Insertion at many positions may require shifting existing elements." }

        ],

        "Strings & String Processing": [

            { question:"A string is generally a?", options:["Collection of characters","Collection of integers only","Tree structure","Graph structure"], answer:0, explanation:"A string is a sequence or collection of characters." },

            { question:"In C and C++, a string can commonly be represented using?", options:["Character arrays","Only integers","Only floating-point variables","Graphs"], answer:0, explanation:"Strings can be represented using arrays of characters." },

            { question:"A C-style string is generally terminated by?", options:["A space character","A null character '\\0'","A newline only","A comma"], answer:1, explanation:"C-style strings use the null character '\\0' to mark the end of the string." },

            { question:"String processing refers to?", options:["Operations performed on strings","Only storing integers","Creating trees","Managing hardware"], answer:0, explanation:"String processing includes operations such as searching, comparing and manipulating strings." },

            { question:"Which operation joins two strings?", options:["Concatenation","Traversal","Deletion","Indexing"], answer:0, explanation:"Concatenation combines two strings into one." },

            { question:"Finding the number of characters in a string is called?", options:["Length calculation","Traversal only","Sorting","Deletion"], answer:0, explanation:"The length of a string represents the number of characters it contains." },

            { question:"Which operation checks whether two strings contain the same characters in the same order?", options:["Comparison","Insertion","Traversal","Deletion"], answer:0, explanation:"String comparison determines whether strings are equal or how they differ." },

            { question:"Searching for a pattern inside a string is called?", options:["String searching","String deletion","Array resizing","Stack processing"], answer:0, explanation:"String searching finds a character or sequence of characters inside another string." },

            { question:"Which operation changes one string by adding another string to its end?", options:["Concatenation","Traversal","Searching","Sorting"], answer:0, explanation:"Concatenation combines strings by appending one sequence to another." },

            { question:"Visiting every character of a string is called?", options:["Traversal","Deletion","Allocation","Rotation only"], answer:0, explanation:"Traversal processes the characters of a string one by one." },

            { question:"Which of the following is an example of string processing?", options:["Searching for a word in a sentence","Adding two matrices only","Traversing a tree only","Changing CPU speed"], answer:0, explanation:"Searching for a word or pattern is a common string processing operation." },

            { question:"What is substring?", options:["A contiguous part of a string","A complete linked list","A type of array memory","A graph edge"], answer:0, explanation:"A substring is a sequence of consecutive characters taken from a larger string." },

            { question:"Which operation reverses the order of characters?", options:["String reversal","Concatenation","Comparison","Searching"], answer:0, explanation:"String reversal rearranges characters in the opposite order." },

            { question:"String matching is mainly concerned with?", options:["Finding whether a pattern occurs in text","Allocating array memory","Creating queues","Deleting trees"], answer:0, explanation:"String matching determines whether and where a pattern occurs within a text." },

            { question:"Which is commonly used to access an individual character in a string?", options:["Index","Edge","Node pointer only","Root"], answer:0, explanation:"Characters in indexed string representations can be accessed using positions or indexes." },

            { question:"A string of length n contains how many characters?", options:["n","n-1","n+1 always","0"], answer:0, explanation:"A string of length n contains n actual characters." },

            { question:"Which operation removes characters from a string?", options:["Deletion","Concatenation","Comparison","Traversal"], answer:0, explanation:"Deletion removes one or more characters from a string." },

            { question:"Which operation adds characters into a string?", options:["Insertion","Traversal","Searching","Sorting only"], answer:0, explanation:"Insertion adds new characters at a specified position." },

            { question:"Which operation determines whether a particular character exists in a string?", options:["Searching","Concatenation","Deletion","Copying only"], answer:0, explanation:"Searching is used to locate characters or patterns." },

            { question:"A string is commonly considered a linear data structure because?", options:["Characters are arranged sequentially","It always forms a tree","It contains edges","It has no order"], answer:0, explanation:"Characters in a string occur in a sequential order." }

        ],

        "Linked Lists - Singly, Doubly, Circular & Header": [

            { question:"A linked list is best described as?", options:["A collection of nodes connected through links","A fixed-size contiguous array","A tree only","A set of unrelated variables"], answer:0, explanation:"A linked list consists of nodes connected using links or pointers." },

            { question:"A node in a linked list generally contains?", options:["Data and link(s)","Only data","Only an index","Only a function"], answer:0, explanation:"A linked list node generally stores data along with one or more links to other nodes." },

            { question:"Linked list nodes are generally stored?", options:["In contiguous memory locations","At arbitrary memory locations connected by pointers","Only in registers","Only on disk"], answer:1, explanation:"Linked list nodes can exist at different memory locations and are connected using pointers." },

            { question:"Which is an advantage of linked lists over fixed arrays?", options:["Dynamic size","Always faster random access","Contiguous memory required","No pointers required"], answer:0, explanation:"Linked lists can dynamically grow or shrink during program execution." },

            { question:"Which operation is generally inefficient in a singly linked list?", options:["Random access by index","Insertion at beginning","Deletion at beginning","Accessing head node"], answer:0, explanation:"A singly linked list does not provide direct indexed access and nodes must be traversed sequentially." },

            { question:"Accessing the nth element of a singly linked list generally takes?", options:["O(1)","O(log n)","O(n)","O(n²)"], answer:2, explanation:"Nodes generally must be traversed from the beginning to reach the nth node." },

            { question:"A singly linked list node generally contains?", options:["Data and one next pointer","Data and two pointers always","Only previous pointer","Only data"], answer:0, explanation:"Each singly linked list node generally contains data and a pointer to the next node." },

            { question:"The last node of a singly linked list generally points to?", options:["NULL","The first node always","The previous node","Random memory"], answer:0, explanation:"In a standard singly linked list, the last node's next pointer is NULL." },

            { question:"Which pointer identifies the first node of a linked list?", options:["Head pointer","Tail pointer only","Next pointer","Previous pointer"], answer:0, explanation:"The head pointer generally stores the address of the first node." },

            { question:"Insertion at the beginning of a singly linked list generally takes?", options:["O(1)","O(n)","O(n²)","O(log n)"], answer:0, explanation:"A new node can be linked directly before the current head in constant time." },

            { question:"A doubly linked list node generally contains?", options:["Data, previous pointer and next pointer","Only data and next pointer","Only previous pointer","Only an index"], answer:0, explanation:"Each doubly linked list node generally has links to both the previous and next nodes." },

            { question:"A major advantage of a doubly linked list is?", options:["Traversal in both directions","No memory usage","Constant random indexing","No pointers needed"], answer:0, explanation:"Doubly linked lists allow forward and backward traversal." },

            { question:"Compared with a singly linked list, a doubly linked list generally requires?", options:["More memory per node","Less memory always","No memory for links","Only one pointer"], answer:0, explanation:"Doubly linked list nodes store an additional previous pointer." },

            { question:"In a doubly linked list, the first node's previous pointer generally is?", options:["NULL","The last node always","The second node","Random"], answer:0, explanation:"In a standard doubly linked list, the first node has no previous node." },

            { question:"A circular linked list is characterized by?", options:["The last node links back to another node, usually the first","All nodes are stored contiguously","It has no nodes","Every node contains an array"], answer:0, explanation:"In a circular linked list, the last node links back to the first node instead of NULL." },

            { question:"In a circular singly linked list, the last node generally points to?", options:["The first node","NULL","The previous node","A random node"], answer:0, explanation:"The last node links back to the first node, forming a circular structure." },

            { question:"Which linked list structure has no NULL link at the end in a typical circular implementation?", options:["Circular linked list","Singly linked list","Linear array","Normal stack"], answer:0, explanation:"Circular linked lists connect the last node back into the list rather than ending with NULL." },

            { question:"A header linked list contains?", options:["A special header node at the beginning","Only a tail node","No first node","Only circular pointers"], answer:0, explanation:"A header linked list uses an additional special node before the actual data nodes." },

            { question:"The header node in a header linked list may contain?", options:["List information or a link to the first node","Only the last node data","No link at all","Only an array index"], answer:0, explanation:"A header node can store metadata or simplify list operations by linking to the actual first node." },

            { question:"One advantage of using a header node is?", options:["Simplifying insertion and deletion operations","Providing constant random access","Removing all memory requirements","Eliminating nodes"], answer:0, explanation:"Header nodes can simplify operations by providing a consistent starting node." },

            { question:"Which linked list allows traversal both forward and backward?", options:["Doubly linked list","Singly linked list","Simple array","Stack"], answer:0, explanation:"Doubly linked lists contain both next and previous links." },

            { question:"Which linked list uses one link per node in its basic form?", options:["Singly linked list","Doubly linked list","Circular doubly linked list always","Header doubly list only"], answer:0, explanation:"A basic singly linked list node has one link pointing to the next node." },

            { question:"Which linked list can repeatedly traverse from the last node back to the first without reaching NULL?", options:["Circular linked list","Standard singly linked list","Static array","Stack"], answer:0, explanation:"Circular linked lists connect the last node back to the beginning." },

            { question:"Which operation can generally be efficient in a linked list when the node position is already known?", options:["Insertion","Random indexed access","Binary search directly","Direct array indexing"], answer:0, explanation:"If the relevant node is already known, insertion can often be performed by changing links." },

            { question:"Which operation is a major disadvantage of linked lists compared with arrays?", options:["Direct indexed access","Dynamic growth","Insertion using pointers","Deletion using links"], answer:0, explanation:"Linked lists do not support direct random access like arrays." },

            { question:"Which data structure requires pointer links between nodes?", options:["Linked list","Simple array","Primitive integer","Static constant"], answer:0, explanation:"Linked lists use pointers or references to connect nodes." },

            { question:"What is traversal in a linked list?", options:["Moving through nodes sequentially","Directly accessing any node by index","Deleting the entire list","Sorting automatically"], answer:0, explanation:"Traversal visits linked list nodes one after another using their links." },

            { question:"Which linked list is most suitable when backward traversal is required?", options:["Doubly linked list","Singly linked list","Simple array only","Stack"], answer:0, explanation:"Doubly linked lists provide previous links that allow backward traversal." },

            { question:"What distinguishes a circular linked list from a normal singly linked list?", options:["The final node links back into the list","Nodes are stored contiguously","It has no pointers","It cannot be traversed"], answer:0, explanation:"The last node links back to the first node or another earlier node, creating a cycle." },

            { question:"In a standard singly linked list, traversal normally ends when?", options:["The next pointer becomes NULL","The first node is reached again","The array becomes full","The stack is empty"], answer:0, explanation:"A standard linear singly linked list ends when the next pointer is NULL." }

        ],

        "Linear Search and Binary Search": [

            { question: "Linear search checks elements?", options: ["In random order", "Sequentially one by one", "Only from the middle", "Using recursion only"], answer: 1, explanation: "Linear search examines elements sequentially until the required element is found or the list ends." },

            { question: "What is the worst-case time complexity of linear search?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 2, explanation: "In the worst case, linear search may examine all n elements." },

            { question: "What is the best-case time complexity of linear search?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 0, explanation: "The best case occurs when the required element is found at the first position." },

            { question: "Linear search can be applied to?", options: ["Only sorted arrays", "Only linked lists", "Both sorted and unsorted data", "Only binary trees"], answer: 2, explanation: "Linear search does not require the data to be sorted." },

            { question: "Binary search requires the data to be?", options: ["Random", "Sorted", "Duplicated", "Stored in a linked list only"], answer: 1, explanation: "Binary search works by repeatedly dividing a sorted search space." },

            { question: "Binary search compares the target element with?", options: ["The first element only", "The last element only", "The middle element", "Every element"], answer: 2, explanation: "Binary search compares the target with the middle element of the current search range." },

            { question: "What is the worst-case time complexity of binary search?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 1, explanation: "Binary search halves the search space repeatedly, giving logarithmic complexity." },

            { question: "What is the best-case time complexity of binary search?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: 0, explanation: "The best case occurs when the target is immediately found at the middle position." },

            { question: "Which search algorithm is generally faster for a large sorted array?", options: ["Linear search", "Binary search", "Bubble search", "Selection search"], answer: 1, explanation: "Binary search is generally faster because it eliminates half of the remaining elements in each comparison." },

            { question: "After comparing the target with the middle element in binary search, the algorithm?", options: ["Checks every remaining element", "Discards half of the search range", "Sorts the array again", "Stops immediately"], answer: 1, explanation: "Binary search eliminates the half in which the target cannot exist." },

            { question: "Binary search is most naturally efficient on?", options: ["Arrays with random access", "Unsorted files only", "Stacks only", "Queues only"], answer: 0, explanation: "Arrays provide efficient direct access to the middle element required by binary search." },

            { question: "If an array is not sorted, which search should generally be used without sorting first?", options: ["Binary search", "Linear search", "Quick search", "Merge search"], answer: 1, explanation: "Linear search can directly search unsorted data." }

        ],


        "Internal and External Sorting": [

            { question: "Internal sorting is performed when?", options: ["All data fits in main memory", "Data is only on the internet", "Data cannot fit in memory", "Only one element exists"], answer: 0, explanation: "Internal sorting is used when the complete data set can be stored in main memory during sorting." },

            { question: "External sorting is mainly used when?", options: ["Data is very small", "All data fits easily in RAM", "Data is too large to fit in main memory", "The data is already sorted"], answer: 2, explanation: "External sorting is required when the data set is too large to be processed entirely in main memory." },

            { question: "Which storage is commonly involved in external sorting?", options: ["Only CPU registers", "Secondary storage such as disks", "Only cache memory", "Only ROM"], answer: 1, explanation: "External sorting uses secondary storage because the complete data cannot fit into main memory." },

            { question: "Which of the following is commonly an internal sorting algorithm?", options: ["Bubble sort", "External merge process only", "Disk-only sorting", "Tape sorting only"], answer: 0, explanation: "Bubble sort is normally considered an internal sorting algorithm." },

            { question: "External sorting is important mainly because?", options: ["CPU cannot compare values", "Main memory capacity is limited", "Arrays cannot be sorted", "Algorithms cannot use loops"], answer: 1, explanation: "Large data sets may exceed available RAM, requiring external storage." },

            { question: "External merge sort is commonly associated with?", options: ["Small in-memory data only", "Large files stored externally", "Searching strings only", "Stack operations"], answer: 1, explanation: "Merge-based techniques are commonly used for sorting very large external files." },

            { question: "The main difference between internal and external sorting depends on?", options: ["Programming language", "Memory availability for the data", "Variable names", "Operating system color theme"], answer: 1, explanation: "The classification depends on whether the complete data set fits into main memory." },

            { question: "Disk I/O performance is especially important in?", options: ["Internal sorting only", "External sorting", "Linear search only", "Recursion only"], answer: 1, explanation: "External sorting involves reading and writing large amounts of data to secondary storage." }

        ],


        "Bubble, Selection and Insertion Sort": [

            { question: "Bubble sort works by repeatedly comparing?", options: ["Random elements", "Adjacent elements", "Only first and last elements", "Middle elements only"], answer: 1, explanation: "Bubble sort repeatedly compares adjacent elements and swaps them when they are in the wrong order." },

            { question: "In ascending bubble sort, after one complete pass, which element reaches its correct final position?", options: ["Smallest element", "Largest remaining element", "Middle element", "Random element"], answer: 1, explanation: "The largest unsorted element moves toward the end during a complete bubble sort pass." },

            { question: "What is the worst-case time complexity of bubble sort?", options: ["O(log n)", "O(n)", "O(n²)", "O(n log n)"], answer: 2, explanation: "Bubble sort may perform a quadratic number of comparisons and swaps." },

            { question: "Bubble sort is based mainly on?", options: ["Partitioning", "Adjacent swapping", "Merging arrays", "Digit processing"], answer: 1, explanation: "Bubble sort repeatedly swaps incorrectly ordered adjacent elements." },

            { question: "Selection sort works by repeatedly selecting?", options: ["The largest file", "The minimum or maximum element", "A random element", "Two middle elements"], answer: 1, explanation: "Selection sort repeatedly finds the minimum or maximum element from the unsorted portion." },

            { question: "In ascending selection sort, the selected minimum element is usually placed?", options: ["At the beginning of the unsorted portion", "At the end of the array always", "Randomly", "In a separate file"], answer: 0, explanation: "The minimum element is placed into the next position of the sorted portion." },

            { question: "What is the worst-case time complexity of selection sort?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 3, explanation: "Selection sort performs approximately n² comparisons in the general case." },

            { question: "Selection sort generally performs?", options: ["Many swaps for every comparison", "At most one main swap per pass", "No comparisons", "Only recursive calls"], answer: 1, explanation: "Selection sort finds the required element and usually performs one swap at the end of each pass." },

            { question: "Insertion sort builds?", options: ["A sorted portion of the array", "A binary tree", "A hash table", "A file system"], answer: 0, explanation: "Insertion sort gradually expands a sorted portion by inserting each new element into its correct position." },

            { question: "Insertion sort is conceptually similar to?", options: ["Choosing cards and inserting them into the correct position", "Dividing arrays into halves only", "Using a queue", "Hashing values"], answer: 0, explanation: "Insertion sort resembles arranging playing cards by inserting each card into the correct position." },

            { question: "Insertion sort is generally efficient for?", options: ["Very large random data only", "Small or nearly sorted data", "Only external files", "Graphs only"], answer: 1, explanation: "Insertion sort performs well for small arrays and arrays that are already nearly sorted." },

            { question: "What is the worst-case time complexity of insertion sort?", options: ["O(log n)", "O(n)", "O(n²)", "O(n log n)"], answer: 2, explanation: "In the worst case, each new element may need to be compared and shifted across the sorted portion." },

            { question: "Which sorting algorithm repeatedly swaps adjacent elements?", options: ["Selection sort", "Bubble sort", "Merge sort", "Radix sort"], answer: 1, explanation: "Bubble sort is based on comparisons and swaps between adjacent elements." },

            { question: "Which sorting algorithm repeatedly selects the minimum element?", options: ["Bubble sort", "Selection sort", "Insertion sort", "Quick sort"], answer: 1, explanation: "Selection sort repeatedly selects the smallest remaining element in ascending order." },

            { question: "Which sorting algorithm inserts each element into a sorted portion?", options: ["Bubble sort", "Selection sort", "Insertion sort", "Radix sort"], answer: 2, explanation: "Insertion sort places each element into its correct position within the already sorted portion." }

        ],


        "Shell Sort": [

            { question: "Shell sort is an improvement of?", options: ["Bubble sort", "Insertion sort", "Merge sort", "Radix sort"], answer: 1, explanation: "Shell sort improves insertion sort by allowing exchanges between elements that are initially far apart." },

            { question: "Shell sort primarily uses?", options: ["A gap between compared elements", "A pivot only", "A queue", "A hash function"], answer: 0, explanation: "Shell sort performs insertion-like sorting using elements separated by a gap." },

            { question: "During Shell sort, the gap generally?", options: ["Remains constant forever", "Gradually decreases", "Always increases", "Is always zero"], answer: 1, explanation: "The gap is progressively reduced until it eventually becomes 1." },

            { question: "When the gap becomes 1, Shell sort behaves similarly to?", options: ["Linear search", "Insertion sort", "Merge sort", "Binary search"], answer: 1, explanation: "The final pass with gap 1 is essentially an insertion sort pass." },

            { question: "The main purpose of Shell sort is to?", options: ["Move distant elements faster toward correct positions", "Avoid all comparisons", "Use external storage", "Search for an element"], answer: 0, explanation: "Using larger gaps helps move elements long distances before the final insertion-sort stage." },

            { question: "Shell sort is generally classified as?", options: ["A comparison-based sorting algorithm", "A searching algorithm", "A graph algorithm", "A hashing technique"], answer: 0, explanation: "Shell sort sorts data by comparing elements and performing shifts." },

            { question: "Shell sort usually performs better than basic insertion sort because?", options: ["It never compares elements", "It initially compares elements far apart", "It uses no memory", "It always has O(log n) complexity"], answer: 1, explanation: "Long-distance comparisons reduce disorder before the final insertion-sort pass." },

            { question: "The performance of Shell sort depends significantly on?", options: ["The chosen gap sequence", "The programming language only", "The variable names", "The file extension"], answer: 0, explanation: "Different gap sequences can significantly affect Shell sort performance." }

        ],


        "Quick Sort and Merge Sort": [

            { question: "Quick sort is based on?", options: ["Adjacent swapping only", "Partitioning around a pivot", "Digit-by-digit processing", "Sequential searching"], answer: 1, explanation: "Quick sort selects a pivot and partitions elements around it." },

            { question: "The pivot in quick sort is used to?", options: ["Store the entire array", "Partition elements into groups", "Create a linked list", "Search a file"], answer: 1, explanation: "The pivot divides elements into groups based on whether they are smaller or larger." },

            { question: "Quick sort generally uses which technique?", options: ["Divide and conquer", "Dynamic programming only", "Greedy searching", "Hashing"], answer: 0, explanation: "Quick sort divides the array into partitions and recursively sorts them." },

            { question: "What is the average time complexity of quick sort?", options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"], answer: 2, explanation: "Quick sort has average-case time complexity of O(n log n)." },

            { question: "What is the worst-case time complexity of quick sort?", options: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"], answer: 3, explanation: "Poor pivot choices can produce highly unbalanced partitions, resulting in O(n²) time." },

            { question: "Merge sort is based on?", options: ["Divide and conquer", "Adjacent swapping only", "Linear searching", "Hashing"], answer: 0, explanation: "Merge sort repeatedly divides data into smaller parts and then merges sorted parts." },

            { question: "Merge sort divides an array until?", options: ["Each subarray contains one element", "Only two elements remain", "The array is reversed", "A pivot is found"], answer: 0, explanation: "Single-element arrays are already sorted, forming the base case of merge sort." },

            { question: "The merge step combines?", options: ["Two sorted subarrays", "Two unsorted random arrays only", "Two files without comparison", "A stack and queue"], answer: 0, explanation: "Merge sort combines sorted subarrays into a larger sorted sequence." },

            { question: "What is the worst-case time complexity of merge sort?", options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"], answer: 2, explanation: "Merge sort consistently divides and merges data in O(n log n) time." },

            { question: "Which sorting algorithm generally requires additional memory for merging?", options: ["Selection sort", "Bubble sort", "Merge sort", "Insertion sort"], answer: 2, explanation: "Standard merge sort generally requires auxiliary storage during merging." },

            { question: "Which algorithm uses a pivot?", options: ["Merge sort", "Quick sort", "Bubble sort", "Radix sort"], answer: 1, explanation: "Quick sort partitions the data around a selected pivot." },

            { question: "Which algorithm guarantees O(n log n) worst-case time complexity?", options: ["Quick sort", "Merge sort", "Bubble sort", "Selection sort"], answer: 1, explanation: "Merge sort has O(n log n) complexity even in the worst case." },

            { question: "Quick sort is often faster in practice because?", options: ["It performs no comparisons", "It can have good cache performance and low overhead", "It never uses recursion", "It always uses external storage"], answer: 1, explanation: "Quick sort is often efficient in practice because partitioning can have good memory locality and low overhead." }

        ],


        "Radix Sort": [

            { question: "Radix sort is generally classified as?", options: ["A comparison sort only", "A non-comparison sorting algorithm", "A searching algorithm", "A graph traversal"], answer: 1, explanation: "Radix sort sorts values according to digits or positions rather than directly comparing every pair of elements." },

            { question: "Radix sort processes numbers based on?", options: ["Digits or positions", "Only adjacent elements", "A pivot", "A middle element"], answer: 0, explanation: "Radix sort groups and processes numbers according to their digits." },

            { question: "LSD radix sort begins sorting from?", options: ["The most significant digit", "The least significant digit", "The middle digit", "A random digit"], answer: 1, explanation: "LSD radix sort processes digits starting from the least significant digit." },

            { question: "MSD radix sort begins sorting from?", options: ["The least significant digit", "The most significant digit", "The middle digit", "The decimal point only"], answer: 1, explanation: "MSD radix sort starts processing from the most significant digit." },

            { question: "Radix sort commonly uses which stable sorting method internally?", options: ["Counting sort", "Binary search", "Linear search", "Quick search"], answer: 0, explanation: "Counting sort is commonly used as the stable subroutine for processing each digit." },

            { question: "Radix sort is especially suitable for?", options: ["Data with fixed-length integer or digit representations", "Only linked lists", "Random text paragraphs only", "Graphs"], answer: 0, explanation: "Radix sort works particularly well for integers or keys that can be processed digit by digit." },

            { question: "A stable sorting algorithm means?", options: ["It never changes memory", "Equal elements keep their relative order", "It always uses O(1) time", "It cannot sort duplicates"], answer: 1, explanation: "Stability means equal keys retain their original relative ordering." },

            { question: "Why is stability important in LSD radix sort?", options: ["To preserve the ordering established by previous digit passes", "To avoid recursion", "To remove duplicates", "To make arrays immutable"], answer: 0, explanation: "Each digit pass must preserve the ordering created by earlier digit passes." },

            { question: "Radix sort compares elements directly with operators such as < and > for every ordering decision?", options: ["Always", "Generally no", "Only for strings", "Only in binary search"], answer: 1, explanation: "Radix sort primarily distributes elements according to digit values rather than direct pairwise comparison." },

            { question: "Which of the following is NOT normally a comparison-based sorting algorithm?", options: ["Bubble sort", "Selection sort", "Merge sort", "Radix sort"], answer: 3, explanation: "Radix sort is generally categorized as a non-comparison sorting algorithm." }

        ],

        "Abstract Data Types (ADT)": [

            { question: "An Abstract Data Type (ADT) is primarily defined by?", options: ["Its implementation details", "Its behavior and operations", "Its memory address only", "Its programming language"], answer: 1, explanation: "An ADT specifies what operations can be performed and their behavior without necessarily specifying the implementation." },

            { question: "Which of the following best describes an ADT?", options: ["A specific CPU instruction", "A logical model of a data structure", "Only an array implementation", "A compiler feature"], answer: 1, explanation: "An ADT describes data and the operations allowed on that data at a logical level." },

            { question: "Which of the following can be used to implement a Stack ADT?", options: ["Only arrays", "Only linked lists", "Arrays or linked lists", "Only trees"], answer: 2, explanation: "A stack can be implemented using different physical data structures such as arrays or linked lists." },

            { question: "An ADT hides?", options: ["The operations it supports", "The implementation details", "The data completely", "The program output"], answer: 1, explanation: "ADT focuses on what operations are available while hiding how they are implemented." },

            { question: "Stack, Queue and List are examples of?", options: ["Algorithms", "Abstract Data Types", "Operating systems", "Programming languages"], answer: 1, explanation: "Stack, Queue and List describe logical collections and operations and are common ADTs." },

            { question: "The implementation of an ADT refers to?", options: ["How the ADT is physically represented", "Only its name", "Only its applications", "Its time complexity only"], answer: 0, explanation: "Implementation specifies how the ADT and its operations are physically realized using structures such as arrays or linked lists." },

            { question: "The interface of an ADT specifies?", options: ["Only memory allocation", "The operations available to users", "Only the internal variables", "Only CPU instructions"], answer: 1, explanation: "The ADT interface defines the operations that can be performed on the data." },

            { question: "One advantage of using ADTs is?", options: ["No memory is required", "Separation of interface and implementation", "Programs need no algorithms", "All operations become O(1)"], answer: 1, explanation: "ADTs separate what an operation does from how it is implemented." },

            { question: "Changing the implementation of an ADT while keeping its interface unchanged mainly improves?", options: ["Encapsulation and flexibility", "Syntax errors", "File size only", "CPU clock speed"], answer: 0, explanation: "Different implementations can be substituted without changing code that uses the ADT interface." },

            { question: "Which is NOT necessarily part of an ADT definition?", options: ["Allowed operations", "Behavior of operations", "Implementation details", "Data organization concept"], answer: 2, explanation: "An ADT specifies logical behavior rather than requiring a particular implementation." }

        ],


        "Stacks - Concepts and Array Implementation": [

            { question: "A stack follows which principle?", options: ["FIFO", "LIFO", "Random access only", "Priority first"], answer: 1, explanation: "Stack follows Last In First Out (LIFO)." },

            { question: "LIFO stands for?", options: ["Last In First Out", "Last Input Final Output", "Linked In First Out", "Linear Input First Output"], answer: 0, explanation: "In a stack, the last inserted element is removed first." },

            { question: "The insertion operation in a stack is called?", options: ["Enqueue", "Push", "Pop", "Delete"], answer: 1, explanation: "Push adds an element to the top of a stack." },

            { question: "The deletion operation in a stack is called?", options: ["Push", "Pop", "Enqueue", "Insert"], answer: 1, explanation: "Pop removes the element from the top of the stack." },

            { question: "The element that can be directly accessed in a stack is?", options: ["First inserted element", "Middle element", "Top element", "Any random element"], answer: 2, explanation: "Stack operations are performed at the top." },

            { question: "Which variable is commonly used to represent the top of an array stack?", options: ["front", "rear", "top", "head"], answer: 2, explanation: "The top variable usually stores the index of the current top element." },

            { question: "An empty array-based stack commonly has top equal to?", options: ["0", "-1", "1", "MAX"], answer: 1, explanation: "A common convention initializes top to -1 to indicate that no element exists." },

            { question: "Stack overflow occurs when?", options: ["Pop is performed on an empty stack", "Push is performed on a full stack", "The top becomes -1", "A queue is created"], answer: 1, explanation: "Overflow occurs when an attempt is made to insert an element into a full stack." },

            { question: "Stack underflow occurs when?", options: ["Push is performed", "Pop is performed on an empty stack", "Stack becomes full", "Two stacks are merged"], answer: 1, explanation: "Underflow occurs when deletion is attempted from an empty stack." },

            { question: "In an array stack of size MAX, the stack is full when?", options: ["top == -1", "top == MAX", "top == MAX - 1", "top == 0"], answer: 2, explanation: "With zero-based indexing, the last valid position is MAX - 1." },

            { question: "Push operation on an array stack generally takes?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 0, explanation: "Push modifies the top index and inserts one element, requiring constant time." },

            { question: "Pop operation on an array stack generally takes?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 0, explanation: "Pop removes the current top element and updates the top index in constant time." },

            { question: "Which operation returns the top element without removing it?", options: ["Push", "Pop", "Peek", "Enqueue"], answer: 2, explanation: "Peek or top returns the top element without deleting it." }

        ],


        "Stacks using Linked Lists": [

            { question: "A stack implemented using a linked list usually performs push and pop at?", options: ["The beginning only", "The end only", "The middle", "Different random positions"], answer: 0, explanation: "Using the head as the stack top allows efficient O(1) insertion and deletion." },

            { question: "In a linked-list implementation of a stack, the top usually points to?", options: ["The first node", "The last node only", "A random node", "The middle node"], answer: 0, explanation: "The head node is commonly treated as the top of the stack." },

            { question: "The main advantage of a linked-list stack over a fixed-size array stack is?", options: ["No memory usage", "Dynamic size", "No pointers required", "No operations required"], answer: 1, explanation: "Linked-list stacks can grow dynamically as long as memory is available." },

            { question: "Stack overflow in a linked-list implementation mainly occurs when?", options: ["The array becomes full", "Dynamic memory allocation fails", "Top becomes zero", "Pop is called"], answer: 1, explanation: "A linked-list stack can grow until system memory is unavailable." },

            { question: "Push in a linked-list stack generally involves?", options: ["Adding a node at the top", "Sorting all nodes", "Traversing the entire list", "Deleting the last node"], answer: 0, explanation: "A new node is inserted at the head and becomes the new top." },

            { question: "Pop in a linked-list stack generally involves?", options: ["Deleting the top node", "Deleting every node", "Adding a node", "Sorting the list"], answer: 0, explanation: "The current head node is removed and the next node becomes the top." },

            { question: "What is the time complexity of push in a linked-list stack?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 0, explanation: "Adding a node at the beginning requires only constant-time pointer updates." },

            { question: "What is the time complexity of pop in a linked-list stack?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 0, explanation: "Removing the head node requires constant-time pointer updates." },

            { question: "Which data structure is required internally for a linked-list stack?", options: ["Nodes and pointers", "Only indexes", "Only matrices", "Only files"], answer: 0, explanation: "Linked lists store elements in nodes connected through links or pointers." }

        ],


        "Stack Applications and Prefix/Postfix Expressions": [

            { question: "Which of the following is a common application of stacks?", options: ["Function call management", "Only file storage", "Only printing", "Only networking"], answer: 0, explanation: "Stacks are used internally for managing function calls and return addresses." },

            { question: "Which application commonly uses a stack?", options: ["Undo operations", "Sorting without algorithms", "Replacing RAM", "Network routing only"], answer: 0, explanation: "Undo operations can be implemented by storing previous states on a stack." },

            { question: "Parentheses matching is commonly solved using?", options: ["Queue", "Stack", "Binary search", "Heap only"], answer: 1, explanation: "Opening symbols are pushed and matching closing symbols pop them from the stack." },

            { question: "In an infix expression, an operator is placed?", options: ["Before operands", "Between operands", "After operands", "Only at the end"], answer: 1, explanation: "Infix notation places operators between operands, such as A + B." },

            { question: "In prefix notation, an operator is placed?", options: ["Before its operands", "Between operands", "After its operands", "At a random position"], answer: 0, explanation: "Prefix notation places the operator before its operands, such as +AB." },

            { question: "In postfix notation, an operator is placed?", options: ["Before operands", "Between operands", "After operands", "Only at the beginning"], answer: 2, explanation: "Postfix notation places the operator after its operands, such as AB+." },

            { question: "The postfix form of A + B is?", options: ["+AB", "AB+", "A+B", "BA+"], answer: 1, explanation: "In postfix notation, operands come first followed by the operator." },

            { question: "The prefix form of A + B is?", options: ["AB+", "+AB", "A+B", "BA+"], answer: 1, explanation: "In prefix notation, the operator appears before both operands." },

            { question: "Which expression notation usually eliminates the need for parentheses?", options: ["Postfix", "Prefix", "Both prefix and postfix", "Only infix"], answer: 2, explanation: "Prefix and postfix notation specify evaluation order without requiring parentheses." },

            { question: "Stacks are commonly used for conversion between?", options: ["Different expression notations", "Only arrays and lists", "Files and folders", "Integers and memory"], answer: 0, explanation: "Stacks are widely used for infix, prefix and postfix expression conversion." },

            { question: "The postfix expression for A * (B + C) is?", options: ["ABC+*", "*A+BC", "AB*C+", "A*BC+"], answer: 0, explanation: "B+C becomes BC+, then multiplying by A gives ABC+*." },

            { question: "The prefix expression for A * (B + C) is?", options: ["*A+BC", "ABC+*", "+*ABC", "A*BC+"], answer: 0, explanation: "The multiplication operator comes first, followed by A and the prefix form of B+C." }

        ],


        "Postfix Expression Evaluation": [

            { question: "Which data structure is mainly used to evaluate a postfix expression?", options: ["Stack", "Queue", "Linked list only", "Binary search tree"], answer: 0, explanation: "Operands are stored on a stack until an operator is encountered." },

            { question: "While evaluating postfix notation, when an operand is encountered it is?", options: ["Pushed onto the stack", "Immediately deleted", "Sent to a queue", "Used as a pivot"], answer: 0, explanation: "Operands are pushed onto the stack for later operations." },

            { question: "When an operator is encountered during postfix evaluation, the required operands are?", options: ["Pushed onto the stack", "Popped from the stack", "Ignored", "Sorted"], answer: 1, explanation: "Operands are popped from the stack and the operation is performed." },

            { question: "For a binary operator, how many operands are generally popped?", options: ["One", "Two", "Three", "Four"], answer: 1, explanation: "Binary operators such as +, -, * and / require two operands." },

            { question: "For postfix expression AB+, the result represents?", options: ["A + B", "A - B", "B - A", "A * B"], answer: 0, explanation: "A and B are pushed, then + combines them as A + B." },

            { question: "During postfix evaluation, operand order is important for?", options: ["Addition only", "Multiplication only", "Subtraction and division", "None of the operations"], answer: 2, explanation: "For subtraction and division, reversing operand order changes the result." },

            { question: "If operands are popped as right then left for operator -, the calculation is?", options: ["right - left", "left - right", "left + right", "right / left"], answer: 1, explanation: "The first popped value is the right operand and the second popped value is the left operand." },

            { question: "After evaluating a valid postfix expression, the final result should normally be?", options: ["One value on the stack", "An empty queue", "Many unsorted values", "A linked list"], answer: 0, explanation: "A valid complete postfix expression normally leaves one final result on the stack." },

            { question: "The postfix expression 23+ evaluates to?", options: ["5", "6", "23", "1"], answer: 0, explanation: "2 and 3 are added, giving 5." },

            { question: "The postfix expression 23* evaluates to?", options: ["5", "6", "8", "1"], answer: 1, explanation: "2 multiplied by 3 equals 6." },

            { question: "The postfix expression 82/ evaluates to?", options: ["16", "4", "6", "10"], answer: 1, explanation: "8 divided by 2 equals 4." },

            { question: "What is the postfix evaluation result of 23+4*?", options: ["20", "14", "10", "9"], answer: 0, explanation: "First 2+3 = 5, then 5×4 = 20." }

        ],


        "Recursion and Simulating Recursion": [

            { question: "Recursion occurs when?", options: ["A function calls itself", "A loop stops", "An array is sorted", "A queue is created"], answer: 0, explanation: "Recursion is a programming technique in which a function calls itself directly or indirectly." },

            { question: "Every recursive function must have?", options: ["A base case", "A queue", "A file", "A linked list"], answer: 0, explanation: "A base case stops the recursive calls and prevents infinite recursion." },

            { question: "The recursive case usually?", options: ["Moves the problem toward the base case", "Stops all programs immediately", "Creates an infinite loop intentionally", "Deletes the stack"], answer: 0, explanation: "Each recursive call should reduce or transform the problem toward a terminating base case." },

            { question: "Recursive function calls are generally managed using?", options: ["A stack", "A queue", "A set", "A file"], answer: 0, explanation: "Each function call creates a stack frame that is managed using the call stack." },

            { question: "What can happen if a recursive function has no reachable base case?", options: ["Infinite recursion or stack overflow", "Automatic sorting", "Queue underflow", "Binary search"], answer: 0, explanation: "Calls continue until the system call stack is exhausted." },

            { question: "The memory used for recursive calls is generally?", options: ["Call stack memory", "Only disk memory", "Queue memory", "Set memory"], answer: 0, explanation: "Each active recursive call has its own activation record or stack frame." },

            { question: "Simulating recursion usually involves explicitly using a?", options: ["Stack", "Queue only", "Binary tree", "Hash table"], answer: 0, explanation: "An explicit stack can store the states that the system call stack would normally manage." },

            { question: "Which data structure best simulates recursive function calls?", options: ["Stack", "Queue", "Deque only", "Priority queue"], answer: 0, explanation: "The LIFO behavior of a stack matches nested function calls and returns." },

            { question: "Recursion is naturally suitable for problems that can be?", options: ["Defined in terms of smaller similar subproblems", "Solved only by arrays", "Solved without conditions", "Stored only in files"], answer: 0, explanation: "Recursive solutions work well when a problem can be reduced into smaller instances of the same problem." },

            { question: "The return from recursive calls generally occurs in?", options: ["Reverse order of calls", "Same order as calls", "Random order", "Priority order"], answer: 0, explanation: "Because the call stack is LIFO, the most recent call returns first." },

            { question: "Which is a major disadvantage of deep recursion?", options: ["It may consume large stack memory", "It cannot use functions", "It cannot have a base case", "It never performs calculations"], answer: 0, explanation: "Each recursive call consumes stack space, so very deep recursion can cause stack overflow." }

        ],


        "Tower of Hanoi": [

            { question: "Tower of Hanoi is a classic example of?", options: ["Recursion", "Binary search", "Hashing", "Priority queue"], answer: 0, explanation: "Tower of Hanoi is commonly solved using a recursive divide-and-conquer approach." },

            { question: "How many pegs are used in the classic Tower of Hanoi problem?", options: ["2", "3", "4", "5"], answer: 1, explanation: "The classic problem uses source, auxiliary and destination pegs." },

            { question: "The main objective of Tower of Hanoi is to?", options: ["Move all disks from source to destination", "Sort disks randomly", "Delete the disks", "Search for a disk"], answer: 0, explanation: "The objective is to move the complete stack from one peg to another." },

            { question: "A larger disk can be placed on?", options: ["A smaller disk", "Only another larger disk", "An empty peg or larger disk", "Any disk"], answer: 2, explanation: "A larger disk must never be placed on top of a smaller disk." },

            { question: "How many disks can be moved at one time in Tower of Hanoi?", options: ["One", "Two", "All", "Depends on disk size"], answer: 0, explanation: "Only one disk may be moved in each individual operation." },

            { question: "The minimum number of moves for n disks in Tower of Hanoi is?", options: ["n", "n²", "2ⁿ - 1", "n!"], answer: 2, explanation: "The recursive solution requires 2ⁿ - 1 minimum moves." },

            { question: "The minimum number of moves for 3 disks is?", options: ["3", "5", "7", "9"], answer: 2, explanation: "2³ - 1 = 7 moves." },

            { question: "The minimum number of moves for 4 disks is?", options: ["8", "12", "15", "16"], answer: 2, explanation: "2⁴ - 1 = 15 moves." },

            { question: "To move n disks recursively, the first major step is to?", options: ["Move n-1 disks to the auxiliary peg", "Move all disks directly", "Delete the largest disk", "Sort the disks"], answer: 0, explanation: "The smaller n-1 disks must first be moved away so the largest disk can be moved." },

            { question: "The largest disk is moved?", options: ["First", "After moving n-1 disks away", "Never", "Randomly"], answer: 1, explanation: "The largest disk is moved after the smaller disks have been moved to the auxiliary peg." },

            { question: "The time complexity of Tower of Hanoi is?", options: ["O(log n)", "O(n)", "O(n²)", "O(2ⁿ)"], answer: 3, explanation: "The number of required moves grows exponentially as 2ⁿ - 1." }

        ],


        "Queues - Concepts, Operations and Array Implementation": [

            { question: "A queue follows which principle?", options: ["LIFO", "FIFO", "Random access", "Priority first always"], answer: 1, explanation: "Queue follows First In First Out (FIFO)." },

            { question: "FIFO stands for?", options: ["First In First Out", "Final Input First Output", "First Input Final Operation", "File In File Out"], answer: 0, explanation: "The first element inserted into a queue is removed first." },

            { question: "Insertion into a queue is called?", options: ["Push", "Pop", "Enqueue", "Peek"], answer: 2, explanation: "Enqueue adds an element at the rear of a queue." },

            { question: "Deletion from a queue is called?", options: ["Push", "Pop", "Dequeue", "Insert"], answer: 2, explanation: "Dequeue removes an element from the front of the queue." },

            { question: "In a queue, insertion normally occurs at?", options: ["Front", "Rear", "Middle", "Random position"], answer: 1, explanation: "New elements are added at the rear." },

            { question: "In a queue, deletion normally occurs at?", options: ["Rear", "Front", "Middle", "Any position"], answer: 1, explanation: "The oldest element is removed from the front." },

            { question: "Which variables are commonly used in an array queue?", options: ["top and bottom", "front and rear", "left and right", "head and tail only"], answer: 1, explanation: "Front and rear indexes track the positions of elements in a queue." },

            { question: "A queue is empty when?", options: ["No elements are stored", "Rear reaches maximum", "Front is always zero", "All values are sorted"], answer: 0, explanation: "An empty queue contains no elements available for deletion." },

            { question: "Queue overflow occurs when?", options: ["Insertion is attempted into a full fixed-size queue", "Deletion occurs from a full queue", "The queue is empty", "Front equals rear always"], answer: 0, explanation: "Overflow occurs when enqueue is attempted but no space is available." },

            { question: "Queue underflow occurs when?", options: ["Insertion into a full queue", "Deletion from an empty queue", "Rear moves forward", "A queue becomes circular"], answer: 1, explanation: "Underflow occurs when dequeue is attempted on an empty queue." },

            { question: "The create operation for a queue generally initializes?", options: ["Front and rear state", "All data as sorted", "Only a stack", "A binary tree"], answer: 0, explanation: "Creating a queue initializes the front and rear indicators to represent an empty queue." },

            { question: "The Add operation in a queue is another name for?", options: ["Dequeue", "Enqueue", "Pop", "Peek"], answer: 1, explanation: "Adding an element to a queue means enqueuing it at the rear." },

            { question: "The Delete operation in a queue is another name for?", options: ["Push", "Enqueue", "Dequeue", "Insert"], answer: 2, explanation: "Deleting an element from a queue means removing it from the front." },

            { question: "Queue applications commonly include?", options: ["CPU scheduling", "Only recursion", "Only postfix evaluation", "Only sorting arrays"], answer: 0, explanation: "Queues are used in scheduling, buffering, printing and other FIFO processes." }

        ],


        "Queues using Linked Lists": [

            { question: "A linked-list queue generally uses pointers to?", options: ["Front and rear", "Top only", "Pivot and middle", "Root only"], answer: 0, explanation: "Front and rear pointers allow efficient queue operations." },

            { question: "In a linked-list queue, insertion is generally performed at?", options: ["Front", "Rear", "Middle", "Random position"], answer: 1, explanation: "New nodes are added at the rear of the queue." },

            { question: "In a linked-list queue, deletion is generally performed at?", options: ["Rear", "Front", "Middle", "Random position"], answer: 1, explanation: "The front node is removed to maintain FIFO order." },

            { question: "What is the main advantage of a linked-list queue over a fixed-size array queue?", options: ["Dynamic size", "No memory required", "No pointers required", "No operations required"], answer: 0, explanation: "A linked-list queue can grow dynamically while memory is available." },

            { question: "Enqueue in a linked-list queue generally takes?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 0, explanation: "With a rear pointer, insertion at the rear requires constant time." },

            { question: "Dequeue in a linked-list queue generally takes?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 0, explanation: "Removing the front node requires constant-time pointer updates." },

            { question: "When the last node is removed from a linked-list queue?", options: ["Both front and rear should represent empty state", "Only rear is changed", "Only front remains unchanged", "The queue becomes circular automatically"], answer: 0, explanation: "When the final element is removed, both front and rear should indicate that the queue is empty." },

            { question: "Linked-list queue overflow can occur when?", options: ["The array reaches MAX", "Memory allocation fails", "Front equals rear", "Queue is sorted"], answer: 1, explanation: "A dynamically allocated queue can grow until system memory is exhausted." }

        ],


        "Circular Queues": [

            { question: "A circular queue is designed to?", options: ["Reuse empty positions in an array queue", "Remove all elements automatically", "Sort elements", "Replace linked lists"], answer: 0, explanation: "Circular queues wrap around to reuse positions that become free after deletions." },

            { question: "In a circular queue, after the last array position, the next position is?", options: ["The first position", "Always an error", "The middle position", "Deleted"], answer: 0, explanation: "The queue wraps around to index 0." },

            { question: "Circular queues are commonly implemented using?", options: ["Modulo arithmetic", "Binary search", "Recursion only", "Hashing"], answer: 0, explanation: "Modulo arithmetic is used to wrap front and rear indexes around the array." },

            { question: "Which expression is commonly used to move an index forward circularly in an array of size MAX?", options: ["index + 1", "(index + 1) % MAX", "index % 1", "MAX - index"], answer: 1, explanation: "Modulo MAX causes the index to return to 0 after reaching MAX - 1." },

            { question: "The main problem solved by a circular queue is?", options: ["Wasted unused positions in a linear queue", "Stack overflow", "Recursion", "Sorting"], answer: 0, explanation: "Circular queues reuse positions freed at the front instead of wasting them." },

            { question: "A circular queue still follows?", options: ["FIFO", "LIFO", "Random order", "Priority order only"], answer: 0, explanation: "The circular structure changes index movement but the logical order remains FIFO." },

            { question: "Which operation adds an element in a circular queue?", options: ["Push", "Enqueue", "Pop", "Merge"], answer: 1, explanation: "Elements are still inserted using enqueue at the rear." },

            { question: "Which operation removes an element from a circular queue?", options: ["Pop", "Dequeue", "Push", "Partition"], answer: 1, explanation: "Elements are removed from the front using dequeue." },

            { question: "Circular queues are useful for?", options: ["Buffers and cyclic resource management", "Only postfix evaluation", "Only binary search", "Only recursion"], answer: 0, explanation: "Circular queues are commonly used in circular buffers and cyclic scheduling systems." }

        ],


        "Deque (Double Ended Queue)": [

            { question: "Deque stands for?", options: ["Double Ended Queue", "Deleted Queue", "Dynamic Equal Queue", "Double Entry Query"], answer: 0, explanation: "Deque means Double Ended Queue." },

            { question: "A deque allows insertion at?", options: ["Front only", "Rear only", "Both front and rear", "Middle only"], answer: 2, explanation: "Deque allows insertion at both ends." },

            { question: "A deque allows deletion at?", options: ["Front only", "Rear only", "Both front and rear", "Middle only"], answer: 2, explanation: "Elements can be removed from either end of a deque." },

            { question: "A deque is more flexible than a normal queue because?", options: ["It allows operations at both ends", "It has no elements", "It cannot overflow", "It always sorts data"], answer: 0, explanation: "Normal queues restrict insertion and deletion to different ends, while deques allow both ends." },

            { question: "Which is NOT a standard deque operation?", options: ["InsertFront", "InsertRear", "DeleteFront", "BinarySearch"], answer: 3, explanation: "Binary search is not a deque operation." },

            { question: "An input-restricted deque allows?", options: ["Insertion at one end and deletion at both ends", "Insertion at both ends only", "Deletion at one end only", "No deletion"], answer: 0, explanation: "Input-restricted deque restricts insertion to one end but allows deletion from both ends." },

            { question: "An output-restricted deque allows?", options: ["Insertion at both ends and deletion at one end", "Insertion at one end only", "Deletion at both ends", "No insertion"], answer: 0, explanation: "Output-restricted deque allows insertion at both ends but restricts deletion to one end." },

            { question: "A deque can be implemented using?", options: ["Arrays or linked lists", "Only binary trees", "Only recursion", "Only files"], answer: 0, explanation: "Both arrays and linked lists can be used to implement deques." }

        ],


        "Priority Queue": [

            { question: "In a priority queue, elements are removed based primarily on?", options: ["Insertion order only", "Priority", "Random order", "Memory address"], answer: 1, explanation: "A priority queue removes elements according to their assigned priority." },

            { question: "A priority queue differs from a normal queue because?", options: ["Removal may depend on priority rather than only FIFO order", "It has no insertion operation", "It cannot contain elements", "It uses only arrays"], answer: 0, explanation: "Priority determines which element is served first." },

            { question: "If two elements have the same priority, they are commonly processed according to?", options: ["FIFO order", "LIFO order always", "Random order only", "No rule is possible"], answer: 0, explanation: "Many priority queue implementations preserve FIFO order among elements with equal priority." },

            { question: "Which application commonly uses priority queues?", options: ["CPU scheduling", "Simple stack pop only", "String concatenation only", "File naming"], answer: 0, explanation: "Priority queues are widely used in scheduling and systems where important tasks must be handled first." },

            { question: "A priority queue can be implemented using?", options: ["Arrays, linked lists or heaps", "Only stacks", "Only recursion", "Only strings"], answer: 0, explanation: "Priority queues can have multiple implementations, with heaps being particularly efficient." },

            { question: "In a highest-priority-first queue, which element is removed first?", options: ["The oldest element regardless of priority", "The element with highest priority", "The newest element", "A random element"], answer: 1, explanation: "Priority determines removal order in such a priority queue." },

            { question: "Priority queues are useful when?", options: ["Some tasks must be handled before others", "All elements must always remain in insertion order", "No deletion is required", "Sorting is impossible"], answer: 0, explanation: "Priority queues are designed for situations where urgency or importance affects processing order." },

            { question: "Which of the following is NOT the main defining principle of a priority queue?", options: ["Priority-based removal", "FIFO for every element regardless of priority", "Different elements can have different priorities", "Important tasks can be processed first"], answer: 1, explanation: "Unlike a normal queue, a priority queue does not necessarily process every element strictly in FIFO order." }

        ],

  },

},

semester4: {

},

semester5: {

},

semester6: {

},

semester7: {

}

};

// ============================================
// RANDOMIZE OPTIONS AND UPDATE ANSWER INDEX
// ============================================

function shuffleQuizOptions(quizData) {

    for (const semester in quizData) {

        for (const subject in quizData[semester]) {

            for (const topic in quizData[semester][subject]) {

                quizData[semester][subject][topic].forEach(question => {

                    // Store correct answer text BEFORE shuffling
                    const correctAnswer =
                        question.options[question.answer];

                    // Fisher-Yates shuffle
                    for (
                        let i = question.options.length - 1;
                        i > 0;
                        i--
                    ) {

                        const j = Math.floor(
                            Math.random() * (i + 1)
                        );

                        // Swap options
                        [
                            question.options[i],
                            question.options[j]
                        ] = [
                            question.options[j],
                            question.options[i]
                        ];
                    }

                    // Update correct answer index
                    question.answer =
                        question.options.indexOf(correctAnswer);
                });
            }
        }
    }
}

// ===================================
// CALL IT HERE 🔥
// ===================================

shuffleQuizOptions(quizData);

// ===================================
// THEN START YOUR QUIZ CODE
// ===================================

loadSubjects();