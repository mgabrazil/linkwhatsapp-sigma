import type { GrupoUnidade } from "@/types";

/**
 * Os grupos de WhatsApp por unidade. É o único arquivo que precisa mudar
 * para incluir, editar, reordenar ou remover uma unidade — a lista da
 * página se ajusta sozinha.
 *
 * ATENÇÃO: os links abaixo são PLACEHOLDER e não abrem grupo nenhum.
 * Troque cada `link` pelo convite real (no WhatsApp: abra o grupo >
 * Dados do grupo > Convidar via link > Copiar link).
 */
export const grupos: GrupoUnidade[] = [
  {
    id: "asa-norte",
    nome: "Asa Norte",
    link: "https://chat.whatsapp.com/DH1NRsvT1EjAAw18217zur",
  },
  {
    id: "asa-sul",
    nome: "Asa Sul",
    link: "https://chat.whatsapp.com/H9V0mNnGs82Ho9EtURoHtc",
  },
    {
    id: "Águas Claras",
    nome: "Águas Claras",
    link: "https://chat.whatsapp.com/IqbIGCUWqZCBc8fyKsLTcV",
  },
];
