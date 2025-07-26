const planICCData = {
  "codigo": "UCHIF600",
  "nombre": "Ingenieria en Ciencias de la Computacion",
  "bloques": [
    {
      "codigo": "I",
      "asignaturas": [
        {
          "codigo": "ES101",
          "nombre": "Español",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "MT101",
          "nombre": "Matematicas",
          "creditos": 4,
          "requisitos": []
        },
        {
          "codigo": "IF112",
          "nombre": "Introduccion a Ciencias de la Computacion",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "SC101",
          "nombre": "Sociologia",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "FI101",
          "nombre": "Filosofia",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IDIN1",
          "nombre": "Ingles Modulo I (Principiante)",
          "creditos": 6,
          "requisitos": []
        },
        {
          "codigo": "ESVU1",
          "nombre": "Seminario de Inicio",
          "creditos": 0,
          "requisitos": []
        },
        {
         "codigo":"cp1",
         "Nombre":"copogramatica I",
         "Creditos":0,
         "requisitos":[]

        }
        
      ]
    },
    {
      "codigo": "II",
      "asignaturas": [
        {
          "codigo": "ES201",
          "nombre": "Expresion Oral y Escrita",
          "creditos": 3,
          "requisitos": [
            "ES101"
          ]
        },
        {
          "codigo": "MT201",
          "nombre": "Precalculo",
          "creditos": 4,
          "requisitos": [
            "MT101"
          ]
        },
        {
          "codigo": "IF214",
          "nombre": "Fundamentos y Logica de Programacion",
          "creditos": 3,
          "requisitos": [
            "IF112"
          ]
        },
        {
          "codigo": "HS101",
          "nombre": "Historia de Honduras",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "CR201",
          "nombre": "El Hombre Frente a la Vida",
          "creditos": 3,
          "requisitos": [
            "FI101"
          ]
        },
        {
          "codigo": "IDIN2",
          "nombre": "Ingles Modulo II (Intermedio Bajo)",
          "creditos": 6,
          "requisitos": [
            "IDIN1"
          ]
        },

        {
          "codigo": "ESPF1",
          "nombre": "Seminario de Padres",
          "creditos": 0,
          "requisitos": []
        },
        {
         "codigo":"0",
         "Nombre":"copogramatica II",
         "Creditos":0,
         "requisitos":[]

        }
      ]
    },
    {
      "codigo": "III",
      "asignaturas": [
        {
          "codigo": "MT202",
          "nombre": "Estadistica I",
          "creditos": 4,
          "requisitos": [
            "MT101"
          ]
        },
        {
          "codigo": "MT303",
          "nombre": "Calculo I",
          "creditos": 4,
          "requisitos": [
            "MT201"
          ]
        },
        {
          "codigo": "IF301",
          "nombre": "Programacion Estructurada I",
          "creditos": 3,
          "requisitos": [
            "IF214"
          ]
        },
        {
          "codigo": "IF213",
          "nombre": "Estructuras Discretas",
          "creditos": 3,
          "requisitos": [
            "IF214"
          ]
        },
        {
          "codigo": "IDIN3",
          "nombre": "Ingles Modulo III (Intermedio Alto)",
          "creditos": 6,
          "requisitos": [
            "IDIN2"]
        },
        {
         "codigo":"CNFS1",
         "Nombre":"Laboratorio de fisica 1",
         "Creditos":"2",
         "requisitos":[]

        },
        {
         "codigo":"0",
         "Nombre":"copogramatica III",
         "Creditos":0,
         "requisitos":[]

        }

      ] 
    },
    {
      "codigo": "IV",
      "asignaturas": [
        {
          "codigo": "CT201",
          "nombre": "Contabilidad",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF322",
          "nombre": "Base de Datos I",
          "creditos": 3,
          "requisitos": [
            
          ]
        },
        {
          "codigo": "IF325",
          "nombre": "Programacion en Entornos de Desarrollo Visual",
          "creditos": 3,
          "requisitos": [
            "IF214"
          ]
        },
        {
          "codigo": "BG205",
          "nombre": "Ecologia",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF394",
          "nombre": "Diseño Grafico",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IDIN4",
          "nombre": "Ingles Modulo IV (Avanzado)",
          "creditos": 6,
          "requisitos": [
            "IDIN3"
          ]
        }
      ]
    },
    {
      "codigo": "V",
      "asignaturas": [
        {
          "codigo": "IF303",
          "nombre": "Programacion Estructurada II",
          "creditos": 3,
          "requisitos": [
            "IF301"
          ]
        },
        {
          "codigo": "IF319",
          "nombre": "Principios de Electronica",
          "creditos": 2,
          "requisitos": []
        },
        {
          "codigo": "FS201",
          "nombre": "Fisica I",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "MT204",
          "nombre": "Matematica Financiera",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IDIN5",
          "nombre": "Ingles Modulo V (Vocabulario y Lectura Tecnica)",
          "creditos": 6,
          "requisitos": [
            "IDIN4"
          ]
        },
        {
          "codigo": "ESVU2",
          "nombre": "Seminario de Madurez en la Vida Universitaria",
          "creditos": 0,
          "requisitos": []
        },
        {
          "codigo": "CNFS1",
          "nombre": "Laboratorio de Fisica I",
          "creditos": 2,
          "requisitos": []
        }
      ]
    },
    {
      "codigo": "VI",
      "asignaturas": [
        {
          "codigo": "MT401",
          "nombre": "Calculo II",
          "creditos": 4,
          "requisitos": [
            "MT303"
          ]
        },
        {
          "codigo": "IF324",
          "nombre": "Circuitos Logicos",
          "creditos": 3,
          "requisitos": [
            "IF319"
          ]
        },
        {
          "codigo": "IF212",
          "nombre": "Analisis y Diseño de Sistemas",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF327",
          "nombre": "Base de Datos II",
          "creditos": 3,
          "requisitos": [
            "IF322"
          ]
        },
        {
          "codigo": "IF323",
          "nombre": "Redes I",
          "creditos": 4,
          "requisitos": []
        },
        {
          "codigo": "IDIN6",
          "nombre": "Ingles Modulo VI (Composicion y Conversacion)",
          "creditos": 6,
          "requisitos": [
            "IDIN5"
          ]
        }
      ]
    },
    {
      "codigo": "VII",
      "asignaturas": [
        {
          "codigo": "IF342",
          "nombre": "Base de Datos Multidimensional",
          "creditos": 3,
          "requisitos": [
            "IF327"
          ]
        },
        {
          "codigo": "IF391",
          "nombre": "Sistemas Inteligentes para Negocios",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF353",
          "nombre": "Desarrollo de Portales Web I",
          "creditos": 3,
          "requisitos": [
            "IF325"
          ]
        },
        {
          "codigo": "IF351",
          "nombre": "Programacion Movil I",
          "creditos": 3,
          "requisitos": [
            "IF325"
          ]
        },
        {
          "codigo": "AD104",
          "nombre": "Gestion de la Calidad",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "TES",
          "nombre": "Trabajo Educativo Social",
          "creditos": 0,
          "requisitos": []
        }
      ]
    },
    {
      "codigo": "VIII",
      "asignaturas": [
        {
          "codigo": "IF352",
          "nombre": "Sistemas Operativos II",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "MT304",
          "nombre": "Control Estadistico de la Calidad",
          "creditos": 3,
          "requisitos": [
            "MT202"
          ]
        },
        {
          "codigo": "AD302",
          "nombre": "Metodos y Tecnicas de Investigacion",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF345",
          "nombre": "Sistemas Operativos I",
          "creditos": 3,
          "requisitos": []
        }
      ]
    },
    {
      "codigo": "IX",
      "asignaturas": [
        {
          "codigo": "IF355",
          "nombre": "Programacion Movil II",
          "creditos": 3,
          "requisitos": [
            "IF351"
          ]
        },
        {
          "codigo": "IF357",
          "nombre": "Desarrollo de Portales Web II",
          "creditos": 3,
          "requisitos": [
            "IF353"
          ]
        },
        {
          "codigo": "IF362",
          "nombre": "Negocios Web",
          "creditos": 3,
          "requisitos": []
        }
      ]
    },
    {
      "codigo": "X",
      "asignaturas": [
        {
          "codigo": "IF361",
          "nombre": "Seminario - Taller de Software",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF392",
          "nombre": "Gestion de Proyectos Informaticos",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF350",
          "nombre": "Big Data",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF347",
          "nombre": "Programacion de Negocios",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF329",
          "nombre": "Sistemas Automatizados",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF314",
          "nombre": "Desarrollo de Software",
          "creditos": 4,
          "requisitos": []
        },
        {
          "codigo": "IF328",
          "nombre": "Redes II",
          "creditos": 4,
          "requisitos": [
            "IF323"
          ]
        },
        {
          "codigo": "IF370",
          "nombre": "Microcontroladores",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF346",
          "nombre": "Implementacion de Sistemas de Software",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "ELEC01",
          "nombre": "Electiva Profesional I",
          "creditos": 3,
          "requisitos": []
        }
      ]
    },
    {
      "codigo": "XI",
      "asignaturas": [
        {
          "codigo": "IF380",
          "nombre": "Auditoria de Sistemas de Informacion",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF393",
          "nombre": "Excel Avanzado para Ingenieria",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF381",
          "nombre": "Seminario de Hardware y Electricidad",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF358",
          "nombre": "Administracion de Centros de Computo",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF360",
          "nombre": "Seguridad Informatica y Gestion de Riesgos",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "AD402",
          "nombre": "Planeacion y Diseño de un Modelo de Calidad",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "IF356",
          "nombre": "Gestion y Estandares de Tecnologias de Informacion",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "CR501",
          "nombre": "Doctrina Social de la Iglesia",
          "creditos": 3,
          "requisitos": []
        },
        {
          "codigo": "ESVU3",
          "nombre": "Seminario de Preparacion a la Vida Profesional",
          "creditos": 0,
          "requisitos": []
        },
        {
          "codigo": "ELEC02",
          "nombre": "Electiva Profesional II",
          "creditos": 3,
          "requisitos": []
        }
      ]
    },
    {
      "codigo": "XII",
      "asignaturas": [
        {
          "codigo": "IF400",
          "nombre": "Practica Profesional Supervisada",
          "creditos": 0,
          "requisitos": []
        }
      ]
    }
  ]
};

document.addEventListener("DOMContentLoaded", ()=>{
    const contenedorPlan = document.getElementById("plan-container");
    const planEstudio = new PlanEstudio(contenedorPlan, planICCData);
    planEstudio.generarHTML();
})

class PlanEstudio{
    constructor(container, data){
        this.container = container;
        this.data = data;
        this.nodes = {};
    }

    generarHTML(){
        this.generarEncabezado();
        this.generarBloques();
    }

    generarEncabezado(){
        this.contenedor = document.createElement("SECTION");
        this.contenedor.classList.add("plan");
        const h1 = document.createElement("H1");
        h1.innerHTML = `(${this.data.codigo}) ${this.data.nombre}`;
        this.container.appendChild(h1);
        this.container.appendChild(this.contenedor);
    }
    generarBloques(){
        this.data.bloques.forEach(
            (bloque, i)=> {
                const bloqueHtml = document.createElement("SECTION");
                bloqueHtml.id = `blq_${bloque.codigo}`;
                bloqueHtml.classList.add("bloque");
                ///
                const h2 = document.createElement("H2");
                h2.innerHTML = bloque.codigo;
                bloqueHtml.appendChild(h2);

                const asignaturas = this.generarAsignaturas(bloque);
                bloqueHtml.appendChild(asignaturas);
                this.contenedor.appendChild(bloqueHtml);
            }
        );
    }
    generarAsignaturas( bloque ){
        const asignaturasHtml = document.createElement("DIV");
        asignaturasHtml.classList.add("asignaturas");
        bloque.asignaturas.forEach( (asignatura,i)=>{
            const asignaturaHTML = document.createElement("DIV");
            asignaturaHTML.classList.add("asignatura");
            const codigo = document.createElement("DIV");
            const label = document.createElement("DIV");
            const creditos = document.createElement("DIV");

            codigo.innerHTML = asignatura.codigo;
            label.innerHTML = asignatura.nombre;
            creditos.innerHTML = `Créditos: ${asignatura.creditos}`;

            asignaturaHTML.appendChild(codigo);
            asignaturaHTML.appendChild(label);
            asignaturaHTML.appendChild(creditos);

            this.nodes[asignatura.codigo] = {}
            this.nodes[asignatura.codigo]["node"] = asignaturaHTML;
            this.nodes[asignatura.codigo]["requisitos"] = asignatura.requisitos;
            this.nodes[asignatura.codigo]["apertura"] = [];
            asignatura.requisitos.forEach( req => {
                if (this.nodes[req]) {
                    if (!this.nodes[req]["apertura"].includes(req)){
                        this.nodes[req]["apertura"].push(req);
                    }
                }
            });
            this.nodes[asignatura.codigo]["node"].addEventListener("mouseover", (e) => {
    this.nodes[asignatura.codigo]["requisitos"].forEach(req => {
        this.nodes[req]["node"].classList.add("requisito");
    });

    this.nodes[asignatura.codigo]["apertura"].forEach(req => {
        this.nodes[req]["node"].classList.add("apertura");
    });

    this.nodes[asignatura.codigo]["node"].classList.add("focused");
});

this.nodes[asignatura.codigo]["node"].addEventListener("mouseout", (e) => {
    this.nodes[asignatura.codigo]["requisitos"].forEach(req => {
        this.nodes[req]["node"].classList.remove("requisito");
    });

    this.nodes[asignatura.codigo]["apertura"].forEach(req => {
        this.nodes[req]["node"].classList.remove("apertura");
    });

    this.nodes[asignatura.codigo]["node"].classList.remove("focused");
});
            asignaturasHtml.appendChild(asignaturaHTML);

        });
        return asignaturasHtml;
    }
}

// json.org