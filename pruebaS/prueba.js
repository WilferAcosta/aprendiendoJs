const d = document,
            table = d.querySelector(".crud-table"),
            form = d.querySelector(".crud-form"),
            title = d.querySelector(".crud-title"),
            template = d.getElementById("crud-template").content,
            fragment = d.createDocumentFragment();
            console.log(fragment);
        const getAll = async () => {
            try {
                let res =  fetch("http://localhost:4000/reclutas"),
                    json =  res.json();

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                json.forEach(el => {
                    template.querySelector(".name").textContent = el.nombre;
                    template.querySelector(".edad").textContent = el.edad;
                    template.querySelector(".telefono").textContent = el.telefono;
                    template.querySelector(".email").textContent = el.email;
                    template.querySelector(".direccion").textContent = el.direccion;
                    template.querySelector(".fechanaci").textContent = el.fechaNacimiento;
                    template.querySelector(".identidad").textContent = el.numeroIdentidad;
                    template.querySelector(".fechaIngreso").textContent = el.fechaIngreso;
                    template.querySelector(".team").textContent = el.idteam;
                    template.querySelector(".edit").dataset.id = el.id;
                    template.querySelector(".edit").dataset.name = el.nombre;
                    template.querySelector(".edit").dataset.name = el.edad;
                    template.querySelector(".edit").dataset.edad = el.telefono;
                    template.querySelector(".edit").dataset.edad = el.direccion;
                    template.querySelector(".edit").dataset.edad = el.fechaNacimiento;
                    template.querySelector(".edit").dataset.edad = el.numeroIdentidad;
                    template.querySelector(".edit").dataset.edad = el.fechaIngreso;
                    template.querySelector(".edit").dataset.edad = el.idTeam;
                    template.querySelector(".delete").dataset.id = el.id;

                    let clone = d.importNode(template, true);
                    fragment.appendChild(clone);
                });

                table.querySelector("tbody").appendChild(fragment);
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }

        d.addEventListener("DOMContentLoaded", getAll);

        d.addEventListener("submit", async e => {
            if (e.target === form) {
                e.preventDefault();

                if (!e.target.id.value) {
                    //Create - POST
                    try {
                        let options = {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json; charset=utf-8"
                            },
                            body: JSON.stringify({
                                nombre: e.target.nombre.value,
                                edad: e.target.edad.value,
                                telefono:e.target.telefono.value,
                                email:e.target.email.value,
                                direccion:e.target.direccion.value,
                                fechaNacimiento:e.target.fechanaci.value,
                                numeroIdentidad:e.target.identidad.value,
                                fechaIngreso:e.target.fechaIngreso.value,
                                idteam:e.target.team.value
                            })
                        },
                            res = fetch("http://localhost:4000/reclutas", options),
                            json =  res.json();

                        if (!res.ok) throw { status: res.status, statusText: res.statusText };

                        location.reload();
                    } catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
                    }
                } else {
                    //Update - PUT
                    try {
                        let options = {
                            method: "PUT",
                            headers: {
                                "Content-type": "application/json; charset=utf-8"
                            },
                            body: JSON.stringify({
                                nombre: e.target.nombre.value,
                                edad: e.target.edad.value,
                                telefono:e.target.telefono.value,
                                email:e.target.email.value,
                                direccion:e.target.direccion.value,
                                fechaNacimiento:e.target.fechanaci.value,
                                numeroIdentidad:e.target.identidad.value,
                                fechaIngreso:e.target.fechaIngreso.value,
                                idteam:e.target.team.value
                            })
                        },
                            res = fetch(`http://localhost:4000/reclutas/${e.target.id.value}`, options),
                            json =  res.json();

                        if (!res.ok) throw { status: res.status, statusText: res.statusText };

                        location.reload();
                    } catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
                    }
                }
            }
        });

        d.addEventListener("click", async e => {
            if (e.target.matches(".edit")) {
                title.textContent = "Editar Santo";
                form.id.value = e.target.dataset.id;
                form.nombre.value = e.target.dataset.name;
                form.edad.value = e.target.dataset.edad;
                
            }

            if (e.target.matches(".delete")) {
                let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);

                if (isDelete) {
                    //Delete - DELETE
                    try {
                        let options = {
                            method: "DELETE",
                            headers: {
                                "Content-type": "application/json; charset=utf-8"
                            }
                        },
                            res = await fetch(`http://localhost:4000/reclutas/${e.target.dataset.id}`, options),
                            json = await res.json();

                        if (!res.ok) throw { status: res.status, statusText: res.statusText };

                        location.reload();
                    } catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        alert(`Error ${err.status}: ${message}`);
                    }
                }
            }
        })