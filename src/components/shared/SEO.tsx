import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEO({
  title = 'CyberIngeniero - AI Solutions Architect & Developer',
  description = 'Specialized in AI solutions and modern web development. Expert in machine learning, full-stack development, and AI consulting services.',
  keywords = 'AI, Machine Learning, Web Development, React, TypeScript, Python, Full Stack Developer, AI Consultant',
  image = '/assets/og-image.jpg',
  url = import.meta.env.VITE_SITE_URL || 'https://cyberingeniero.dev',
  type = 'website',
  author = 'Nibaldo Pino Araya',
  publishedTime,
  modifiedTime
}: SEOProps) {
  const siteTitle = title.includes('CyberIngeniero') ? title : `${title} | CyberIngeniero`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CyberIngeniero" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@CyberMath4" />
      <meta name="twitter:site" content="@CyberMath4" />

      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme Color */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.github.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": author,
          "jobTitle": "AI Solutions Architect & Developer",
          "description": description,
          "url": url,
          "image": fullImageUrl,
          "sameAs": [
            "https://github.com/cyberingeniero",
            "https://linkedin.com/in/nibaldopinoaraya",
            "https://x.com/CyberMath4"
          ],
          "knowsAbout": [
            "Artificial Intelligence",
            "Machine Learning",
            "Web Development",
            "React",
            "TypeScript",
            "Python",
            "Full Stack Development"
          ]
        })}
      </script>
    </Helmet>
  );
}
