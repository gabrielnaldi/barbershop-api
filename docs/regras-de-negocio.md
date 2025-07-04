# 📝 REGRAS DE NEGÓCIO

## Barbeiros

* Dias de trabalho devem ser opcionais
* Deve ser possível adicionar e remover dias de trabalho
* Dias de trabalho não podem ser repetidos (Ex: ['MONDAY', 'MONDAY'])
* Especialidades devem ser opcionais
* Deve ser possível adicionar e remover especialidades
* Especialidades não devem se repetir (Ex: ['BARBA', 'BARBA'])

## Serviços

* Deve ser possível adicionar e remover babeiros
* Não deve ser possível adicionar o mesmo barbeiro mais de uma vez no mesmo serviço
  
## Horário de funcionamento

* Segunda a sábado, das 09:00 às 20:00.
* Domingo fechado.

## Intervalo entre agendamentos

* Não pode haver sobreposição de horários para o mesmo barbeiro.
* É possível configurar tempo de respiro entre atendimentos (ex: 10min).

## Agendamento mínimo

* O agendamento deve ser feito com no mínimo 1h de antecedência.

## Serviços simultâneos

* Um barbeiro só pode executar 1 serviço por vez.

## Limite diário de agendamentos por cliente

* Um cliente pode fazer no máximo 2 agendamentos por dia.

## Clientes inadimplentes

* Se um cliente tiver 3 "não comparecimentos", ele é bloqueado para novos agendamentos até resolver com a administração.

## Remarcação

* Só é possível remarcar um agendamento até 2h antes do horário inicial.

## Check-in automático

* O sistema faz check-in automático se o cliente não for marcado como "chegou" até 15min após o início, e marca como "não compareceu".