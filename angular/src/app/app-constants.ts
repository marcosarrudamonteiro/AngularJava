export class AppConstants {

  public static get baseServidor(): string {return "localhost:8080"}

  public static get baseCadastro(): string{return this.baseServidor + "/api/cadastro"}


}
