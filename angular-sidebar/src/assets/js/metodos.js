function teste()
{
	alert("Teste com sucesso");
}

function enviaConteudoParaAPI(urlEnvio)
{
  var content, retorno;
  $.ajax({
  type: 'GET',
  timeout: 10000,
  async: false,
  url: urlEnvio,
  }).then(function(response){
  retorno = response;
  }, function(response){
  retorno = response;
  });
  console.log(retorno);
  return retorno;
  }

  function lerCEP()
  {
    alert("lerCep");
    $("#cep").focusout(function()
    {
      alert("focusout CEP");
      //Início do Comando AJAX
		  $.ajax
      ({
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
        dataType: 'json',
        success: function(resposta)
        {
          //Agora basta definir os valores que você deseja preencher
          //automaticamente nos campos acima.
          $("#logradouro").val(resposta.logradouro);
          $("#complemento").val(resposta.complemento);
          $("#bairro").val(resposta.bairro);
          $("#cidade").val(resposta.localidade);
          $("#uf").val(resposta.uf);
          //Vamos incluir para que o Número seja focado automaticamente
          //melhorando a experiência do usuário
          $("#numero").focus();
        }
			});
    });
  }
