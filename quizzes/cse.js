const quizData = {

semester1: {

    "Applied Mathematics - I": {

        "Complex Numbers": [
            {
                question: "What is the value of i²?",
                options: [
                    "1",
                    "-1",
                    "0",
                    "i"
                ],

                answer: 1,

                explanation:
                "By definition of the imaginary unit, i² = -1."
            },

            {
                question: "What is the modulus of the complex number 3 + 4i?",

                options: [
                    "5",
                    "7",
                    "1",
                    "25"
                ],

                answer: 0,

                explanation:
                "The modulus is √(3² + 4²) = √25 = 5."
            },

            {
                question: "What is the conjugate of 5 - 3i?",

                options: [
                    "5 - 3i",
                    "-5 + 3i",
                    "5 + 3i",
                    "-5 - 3i"
                ],

                answer: 2,

                explanation:
                "The conjugate of a + bi is a - bi. Therefore, the conjugate of 5 - 3i is 5 + 3i."
            },

            {
                question: "What is the real part of the complex number 7 + 2i?",

                options: [
                    "2",
                    "7",
                    "9",
                    "i"
                ],

                answer: 1,

                explanation:
                "In a complex number a + bi, a is the real part. Therefore, the real part is 7."
            },

            {
                question: "What is (1 + i)(1 - i)?",

                options: [
                    "0",
                    "1",
                    "2",
                    "2i"
                ],

                answer: 2,

                explanation:
                "(1 + i)(1 - i) = 1 - i² = 1 - (-1) = 2."
            }

        ],


        "Differentiation": [

            {
                question: "What is the derivative of x²?",

                options: [
                    "x",
                    "2x",
                    "x²",
                    "2"
                ],

                answer: 1,

                explanation:
                "Using the power rule, d/dx(x²) = 2x."
            },

            {
                question: "What is the derivative of x³?",

                options: [
                    "3x²",
                    "x²",
                    "3x",
                    "x³"
                ],

                answer: 0,

                explanation:
                "Using the power rule, d/dx(x³) = 3x²."
            },

            {
                question: "What is the derivative of sin(x)?",

                options: [
                    "-sin(x)",
                    "cos(x)",
                    "-cos(x)",
                    "tan(x)"
                ],

                answer: 1,

                explanation:
                "The derivative of sin(x) with respect to x is cos(x)."
            },

            {
                question: "What is the derivative of cos(x)?",

                options: [
                    "sin(x)",
                    "-sin(x)",
                    "cos(x)",
                    "-cos(x)"
                ],

                answer: 1,

                explanation:
                "The derivative of cos(x) with respect to x is -sin(x)."
            },

            {
                question: "What is the derivative of eˣ?",

                options: [
                    "x eˣ",
                    "eˣ",
                    "1",
                    "ln(x)"
                ],

                answer: 1,

                explanation:
                "The exponential function eˣ is its own derivative."
            }

        ]

    },

},

semester2: {

        "Applied Physics": {

        "Optics": [

            {
                question: "Which phenomenon explains the bending of light when it passes from one medium to another?",

                options: [
                    "Reflection",
                    "Refraction",
                    "Diffraction",
                    "Interference"
                ],

                answer: 1,

                explanation:
                "Refraction is the bending of light due to a change in its speed when it enters another medium."
            },

            {
                question: "The angle of reflection is always equal to which angle?",

                options: [
                    "Angle of refraction",
                    "Angle of incidence",
                    "Critical angle",
                    "Deviation angle"
                ],

                answer: 1,

                explanation:
                "According to the law of reflection, the angle of reflection equals the angle of incidence."
            },

            {
                question: "What happens when light passes through a convex lens?",

                options: [
                    "It always diverges",
                    "It converges parallel rays",
                    "It is completely absorbed",
                    "It stops moving"
                ],

                answer: 1,

                explanation:
                "A convex lens is a converging lens and brings parallel rays toward a focus."
            },

            {
                question: "Which optical phenomenon is responsible for the formation of a rainbow?",

                options: [
                    "Only reflection",
                    "Only diffraction",
                    "Dispersion of light",
                    "Polarization"
                ],

                answer: 2,

                explanation:
                "A rainbow is formed due to dispersion, refraction and internal reflection of sunlight in water droplets."
            },

            {
                question: "What is the SI unit of focal length?",

                options: [
                    "Dioptre",
                    "Metre",
                    "Newton",
                    "Watt"
                ],

                answer: 1,

                explanation:
                "Focal length is a length, so its SI unit is metre (m)."
            }

        ]

    },

},

semester3: {

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