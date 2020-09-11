<template>
  <div class="login">
    <h4 class="login__heading">Login</h4>
    <form class="form">
      <div class="form__fields">
        <input
          class="form__text"
          type="text"
          name="name"
          id="name"
          placeholder="Nutzername"
          required
        />
        <input
          class="form__text"
          type="password"
          name="pass"
          id="pass"
          placeholder="Passwort"
          required
        />
      </div>
      <div class="form__fields">
        <input class="form__button" type="submit" value="einloggen" />
      </div>
      <div class="form__fields">
        <input class="form__checkbox" type="checkbox" id="save" name="save" />
        <label for="save">Angemeldet bleiben</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
@import "@/styles/_variables";

.login {
  padding: $s 0;

  &__heading {
    margin-bottom: $s;
  }
}

.form {
  &__fields:not(:last-of-type) {
    margin-bottom: $xs;
  }

  &__text {
    border: 1px solid $light;
    width: 100%;
    padding: $xxs;
    margin-bottom: $xs;
  }

  &__button {
    color: $white;
    background: $darkest-50;
    padding: $xxs $xs;
  }

  &__checkbox {
    margin-right: $xs;
  }
}
</style>
