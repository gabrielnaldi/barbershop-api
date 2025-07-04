# 🧩 FUNCIONALIDADES PRINCIPAIS

## Cadastro de clientes (clients)

* Nome
* Telefone
* E-mail (opcional)
* Data de nascimento.
* Histórico de atendimentos e agendamentos.

## Cadastro de barbeiros (barbers)

* Nome
* Especialidades
* Dias/horários de trabalho

## Serviços oferecidos (treatments)

* Nome
* Duração
* Preço
* Barbeiros que executam

Ex: Corte de cabelo, Barba, Sobrancelha, Pacote Combo.

## Agendamento de horário

* Cliente escolhe serviço, barbeiro e horário disponível.
* Deve confirmar se o barbeiro está disponível no horário.
* Geração de ID de agendamento.
* Status: agendado, cancelado, concluído, não compareceu.
* Envio de lembrete (simulado via e-mail ou notificação).

## Agenda do dia

* Visualização dos horários ocupados e livres por barbeiro.
* Filtro por data/barbeiro/status.

## Cancelamento de agendamento

* Pode ser feito até 2h antes do horário marcado.
* Histórico de cancelamentos por cliente.
* Check-in e finalização do serviço.
* Quando o cliente chega, marca-se como "em atendimento".
* Finalização marca como "concluído", com horário real de término.

## Dashboard administrativo

Relatórios: agendamentos por dia/semana, barbeiros mais requisitados, serviços mais vendidos, cancelamentos.