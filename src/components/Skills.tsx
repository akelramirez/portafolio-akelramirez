export function Skills() {
  const skills = [
    { name: 'HTML5', level: 75 },
    { name: 'CSS3', level: 70 },
    { name: 'JavaScript', level: 65 },
    { name: 'Java', level: 55 },
    { name: 'Python', level: 50 },
    { name: 'GitHub', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Habilidades</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#005461] via-[#018790] to-[#00B7B5] h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              También estoy aprendiendo: React, Node.js, SQL, 
              y principios de desarrollo ágil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}