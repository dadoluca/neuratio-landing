import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import lucaImage from "@assets/luca.jpg";
import andreaImage from "@assets/andrea.png";

export default function About() {
  const { t } = useLanguage();

  const founders = [
    {
      name: "Luca Dadone",
      role: "CEO & AI Expert",
      location: "Fossano (CN), Italy",
      linkedIn: "https://www.linkedin.com/in/luca-dadone-8858a41a9/",
      image: lucaImage
    },
    {
      name: "Andrea Bioddo",
      role: "CTO & AI Expert", 
      location: "Fossano (CN), Italy",
      linkedIn: "https://www.linkedin.com/in/andrea-bioddo/",
      image: andreaImage
    }
  ];

  return (
    <section id="about" className="py-32 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            {t('about.title')}
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {founders.map((founder, index) => (
            <div key={index} className="card-gradient professional-glow p-10 rounded-3xl text-center hover:shadow-2xl transition-all duration-500 transform    group">
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                  <img
                    src={founder.image}
                    alt={`${founder.name}, Co-founder`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      console.error(`Failed to load image: ${founder.image}`);
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0xMDAgODBDMTE2LjU2OSA4MCAxMzAgOTMuNDMxNSAxMzAgMTEwQzEzMCAxMjYuNTY5IDExNi41NjkgMTQwIDEwMCAxNDBDODMuNDMxNSAxNDAgNzAgMTI2LjU2OSA3MCAxMTBDNzAgOTMuNDMxNSA4My40MzE1IDgwIDEwMCA4MFoiIGZpbGw9IiNkMWQ1ZGIiLz4KPHBhdGggZD0iTTEwMCAxNTBDMTM4LjY2IDE1MDE3MCA5OSAxMzguNjYgMTcwIDEwMCAxNzBDNjEuMzQwMSAxNzAgMzAgMTM4LjY2IDMwIDEwMEM3MCA2MS4zNDAxIDEwMSAzMCAxNDAgMzBDMTc4LjY2IDMwIDIxMCA2MS4zNDAxIDIxMCAxMDBDMjEwIDEzOC42NiAxNzguNjYgMTcwIDE0MCAxNzBIMTAwWiIgZmlsbD0iI2QxZDVkYiIvPgo8L3N2Zz4K';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 rounded-full"></div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">{founder.name}</h3>
              <p className="text-primary font-semibold text-lg mb-2">{founder.role}</p>
              <p className="text-muted-foreground mb-8 text-lg">{founder.location}</p>
              <a
                href={founder.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-primary hover:text-primary/80 transition-all duration-300 font-semibold text-lg group-hover:scale-105"
              >
                <ExternalLink className="h-6 w-6" />
                <span>{t('about.linkedin')}</span>
              </a>
            </div>
          ))}
        </div>

        {/*<div className="max-w-5xl mx-auto">
          <div className="card-gradient professional-glow p-12 lg:p-16 rounded-3xl backdrop-blur-xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-10 text-center text-gradient">
              {t('about.storyTitle')}
            </h3>
            <div className="space-y-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                {t('about.story1')}
              </p>
              <p>
                {t('about.story2')}
              </p>
              <p>
                {t('about.story3')}
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}