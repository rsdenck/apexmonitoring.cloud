// downloads.js - Versão corrigida e melhorada
function downloadAgent(agentType) {
    // Mostra o loading
    document.getElementById('loading-overlay').classList.remove('hidden');
    
    // Mapeamento correto dos arquivos
    const agents = {
        'infra': 'infra_agent.tar.gz',
        'security': 'sec_agent.tar.gz',
        'telemetry': 'tele_agent.tar.gz',
        'apex': 'apex-agent.tar.gz'
    };

    // Verifica se o agente existe
    if (!agents[agentType]) {
        alert('Agente não encontrado!');
        document.getElementById('loading-overlay').classList.add('hidden');
        return;
    }

    // Simula delay para visualização do loading (remova em produção)
    setTimeout(() => {
        const fileUrl = `arquivos/${agents[agentType]}`;
        
        // Verifica se o arquivo existe
        fetch(fileUrl, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    // Cria link temporário para download
                    const link = document.createElement('a');
                    link.href = fileUrl;
                    link.download = agents[agentType];
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    alert('Arquivo não encontrado no servidor!');
                }
            })
            .catch(() => {
                alert('Erro ao tentar baixar o arquivo!');
            })
            .finally(() => {
                document.getElementById('loading-overlay').classList.add('hidden');
            });
    }, 800); // Delay proposital para UX
}