const pptxgen = require('pptxgenjs');
const html2pptx = require('./html2pptx.js');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'AI CLI Tools Workshop';
    pptx.title = 'QA Learning Path';
    pptx.subject = 'AI-Assisted Test Automation & Quality Assurance';

    const slides = [
        'slide1-title.html',
        'slide2-overview.html',
        'slide3-week1.html',
        'slide4-week2.html',
        'slide5-week3.html',
        'slide6-week4.html',
        'slide7-week5.html',
        'slide8-week6.html',
        'slide9-week7.html',
        'slide10-week8.html'
    ];

    const workspaceDir = '/Users/mikko/code/ai-cli-tools-workshop/main/workspace';

    for (const slideFile of slides) {
        const htmlPath = path.join(workspaceDir, slideFile);
        console.log(`Processing: ${slideFile}`);
        await html2pptx(htmlPath, pptx);
    }

    const outputPath = path.join(workspaceDir, 'qa-learning-path.pptx');
    await pptx.writeFile({ fileName: outputPath });
    console.log(`Presentation created: ${outputPath}`);
}

createPresentation().catch(console.error);
