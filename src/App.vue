<template>
  <div class="app">
    <header>
      <h1>Wikimedia Design Codex - Component Demo</h1>
    </header>
    
    <main>
      <section class="button-container">
        <h2>Button Component</h2>
        <p>Below is an example of the Codex Button component:</p>
        
        <div class="button-group">
          <CdxButton weight="primary" @click="showMessage = true">
            Primary Button
          </CdxButton>
          
          <CdxButton weight="normal" @click="showMessage = false">
            Normal Button
          </CdxButton>
          
          <CdxButton weight="quiet">
            Quiet Button
          </CdxButton>
        </div>
        
        <div v-if="showMessage" class="message">
          You clicked the primary button!
        </div>
      </section>
      
      <section class="accordion-container">
        <h2>Accordion Component</h2>
        <p>Below is an example of the Codex Accordion component for FAQs:</p>
        
        <CdxAccordion 
          v-for="(item, index) in faqItems" 
          :key="index" 
          :title="item.question"
          :is-expanded="expandedItems.includes(index)"
          @update:is-expanded="(expanded) => handleExpand(index, expanded)"
        >
          <div v-html="item.answer"></div>
        </CdxAccordion>
      </section>
    </main>
    
    <footer>
      <p>This demo uses the <a href="https://github.com/wikimedia/design-codex" target="_blank">Wikimedia Design Codex</a> component library</p>
    </footer>
  </div>
</template>

<script>
import { CdxAccordion, CdxButton } from '@wikimedia/codex';

export default {
  name: 'App',
  components: {
    CdxAccordion,
    CdxButton
  },
  data() {
    return {
      showMessage: false,
      expandedItems: [0], // Default to first item expanded
      faqItems: [
        {
          question: 'What is Wikimedia Design Codex?',
          answer: 'Codex is the Design System for Wikimedia. It features a toolkit for building user interfaces, containing design tokens, Vue 3 components and a VitePress documentation site.'
        },
        {
          question: 'How do I install Codex in my project?',
          answer: `<p>You can install it using npm or yarn:</p>
                  <pre>npm install @wikimedia/codex @wikimedia/codex-design-tokens @wikimedia/codex-icons</pre>
                  <p>Then import the components and styles in your application.</p>`
        },
        {
          question: 'What components are available?',
          answer: `<p>Codex includes many common UI components such as:</p>
                  <ul>
                    <li>Accordion</li>
                    <li>Button</li>
                    <li>Checkbox</li>
                    <li>Dialog</li>
                    <li>Table</li>
                    <li>...and many more</li>
                  </ul>`
        },
        {
          question: 'How do I contribute to Codex?',
          answer: 'You can contribute to the Codex project by visiting their <a href="https://github.com/wikimedia/design-codex" target="_blank">GitHub repository</a> and following the contribution guidelines outlined there.'
        },
        {
          question: 'Where can I learn more?',
          answer: 'Check out the <a href="https://doc.wikimedia.org/codex/latest/" target="_blank">official Codex documentation</a> for detailed information on using components, design tokens, and implementation guides.'
        }
      ]
    }
  },
  methods: {
    handleExpand(index, expanded) {
      if (expanded) {
        // Add to expanded items if not already included
        if (!this.expandedItems.includes(index)) {
          this.expandedItems.push(index);
        }
      } else {
        // Remove from expanded items
        this.expandedItems = this.expandedItems.filter(i => i !== index);
      }
    }
  }
};
</script>

<style>
.app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  margin-bottom: 2rem;
  border-bottom: 1px solid #eaecf0;
  padding-bottom: 1rem;
}

header h1 {
  color: #202122;
  font-size: 1.75rem;
}

main {
  margin-bottom: 3rem;
}

.button-container,
.accordion-container {
  margin-bottom: 3rem;
}

.button-container h2,
.accordion-container h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #202122;
}

.button-container p,
.accordion-container p {
  margin-bottom: 1.5rem;
  color: #54595d;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #eaecf0;
  border-radius: 4px;
  color: #202122;
}

.cdx-accordion {
  margin-bottom: 1rem;
}

footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eaecf0;
  font-size: 0.875rem;
  color: #72777d;
}

footer a {
  color: #3366cc;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>
