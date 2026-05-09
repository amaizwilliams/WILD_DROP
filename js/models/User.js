/* ═══════════════════════════════════════════════════════════════
   CLASE: User
   Corresponde al UML: id, name, email, password, role
═══════════════════════════════════════════════════════════════ */
class User {
  constructor({ id, name, email, password, role = 'customer' }) {
    this.id       = id;
    this.name     = name;
    this.email    = email;
    this.password = password;
    this.role     = role;
  }

  // login(): boolean — método del UML
  login(email, password) {
    return this.email === email && this.password === password;
  }
}
