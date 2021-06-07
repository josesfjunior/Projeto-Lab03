new Vue({
  el: "#formulario",
  data: {
    nomeField: "",
    emailField: "",
    numeroField: "",
    instaField: "",
    agenda: [],
    edicao: false,
    count: 0,
    novoNome: "",
    novoEmail: "",
    novoNumero: "",
    novoInsta: "",
  },
  methods: {
    criarContato: function () {
      this.agenda.push({
        id: Date.now(),
        nome: this.nomeField,
        email: this.emailField,
        numero: this.numeroField,
        insta: this.instaField,
      });
    },
    deleteEvent(id) {
      this.agenda.splice(id, 1);
    },
    editar: function (id) {
      this.count += 1;
      if (this.count % 2 == 1) {
        this.edicao = true;
      } else {
        this.edicao = false;
      }
    },
    eviarEdicao: function (index) {
      if (this.novoNome == "") {
      } else {
        this.agenda[index].nome = this.novoNome;
      }
      if (this.novoEmail == "") {
      } else {
        this.agenda[index].email = this.novoEmail;
      }
      if (this.novoInsta == "") {
      } else {
        this.agenda[index].insta = this.novoInsta;
      }
      if (this.novoNumero == "") {
      } else {
        this.agenda[index].numero = this.novoNumero;
      }
    },
  },
});
