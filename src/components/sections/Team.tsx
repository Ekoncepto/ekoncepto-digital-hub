import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';
import { teamMembers } from '@/config/team';

export const Team = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Nossa Equipe</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os fundadores experientes e apaixonados por trás do nosso sucesso.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col items-center text-center bg-muted/50 p-6 rounded-xl">
              <CardHeader>
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-muted-foreground">{member.role}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline mt-4 inline-block"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
