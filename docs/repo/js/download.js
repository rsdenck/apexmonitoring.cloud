function downloadFile(agentName) {
    // Lista de arquivos permitidos (chave: nome exibido, valor: nome do arquivo)
    const allowedFiles = {
        'infra_agent': 'infra_agent.tar.gz',
        'sec_agent': 'sec_agent.tar.gz',
        'tele_agent': 'tele_agent.tar.gz',
        'apex-agent': 'apex-agent.tar.gz',
        'apex-script': 'apex-script.tar.gz'
    };

    const filename = allowedFiles[agentName];
    if (!filename) {
        alert('Agente não encontrado!');
        return;
    }

    // Simula um clique em um link oculto
    const link = document.createElement('a');
    link.href = `arquivos/${filename}`;
    link.download = filename;
    link.click();
}