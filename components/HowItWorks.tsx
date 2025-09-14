export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Add Your\nClients",
      description: "Easily add your clients and create comprehensive profiles for them"
    },
    {
      number: "2", 
      title: "Seamlessly\nPersonalize",
      description: "Easily add your clients and create comprehensive profiles for them"
    },
    {
      number: "3",
      title: "Assign &\nInvite", 
      description: "Easily add your clients and create comprehensive profiles for them"
    },
    {
      number: "4",
      title: "Manage &\nConnect",
      description: "Easily add your clients and create comprehensive profiles for them"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div 
        className="container p-16"
        style={{
          backgroundColor: '#333333',
          clipPath: 'polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative overflow-visible">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-left border-2 border-supercoach-green p-6 relative bg-transparent"
              style={{
                clipPath: 'polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
              }}
            >
              <>
                {/* Top Right */}
                <div 
                  className="absolute w-[100px] bg-supercoach-green transform rotate-45 origin-top-left"
                  style={{
                    height: '2px',
                    top: '-46px',
                    right: '-30px'
                  }}
                ></div>
                {/* Top Left */}
                <div 
                  className="absolute w-[100px] bg-supercoach-green transform -rotate-45 origin-top-right"
                  style={{
                    height: '2px',
                    top: '-46px',
                    left: '-30px'
                  }}
                ></div>
                {/* Bottom Right */}
                <div 
                  className="absolute w-[100px] bg-supercoach-green transform -rotate-45 origin-bottom-left"
                  style={{
                    height: '2px',
                    bottom: '-46px',
                    right: '-30px'
                  }}
                ></div>
                {/* Bottom Left */}
                <div 
                  className="absolute w-[100px] bg-supercoach-green transform rotate-45 origin-bottom-right"
                  style={{
                    height: '2px',
                    bottom: '-46px',
                    left: '-30px'
                  }}
                ></div>
              </>
              <div className="absolute right-4 text-6xl font-bold text-white opacity-10" style={{ top: '-40px' }}>{step.number}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {step.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < step.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p className="text-white leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
