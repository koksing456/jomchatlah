import Link from "next/link";

function Feature({ title, description, icon }: any) {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
      {icon}
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
        {title}
      </h4>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

export default function FeaturesBlocks() {
  const icon = (
    <svg
      className="w-16 h-16 p-1 -mt-1 mb-2"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <rect
          className="fill-current text-lime-500"
          width="64"
          height="64"
          rx="32"
        />
        <g strokeWidth="2" strokeLinecap="square">
          <path
            className="stroke-current text-white"
            d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775"
          />
          <path
            className="stroke-current text-lime-200"
            d="M44.571 43.429H34.286M44.571 37.714H34.286"
          />
        </g>
      </g>
    </svg>
  );

  return (
    <section id="feature-blocks" className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore the solutions</h2>
            <p className="text-xl text-gray-600">
              Find out how
              <span className="text-lg md:text-xl font-extrabold leading-tighter tracking-tighter ml-2 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-500">
                JomChatLah
              </span>{" "}
              can make WhatsApp messaging simple and powerful for you
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <Link href="/smart-bulk-messaging">
              <Feature
                title="Smart Bulk Messaging"
                description="Send bulk messages with smart filtering for better reach"
                icon={icon}
              />
            </Link>

            {/* 2nd item */}
            <Link href="/automated-responses">
              <Feature
                title="Automated Responses"
                description="Keep conversations alive automatically, anytime."
                icon={icon}
              />
            </Link>

            {/* 3rd item */}
            <Link href="/group-contact-management">
              <Feature
                title="Group Contact Management"
                description="Arrange your WhatsApp contacts and groups easily."
                icon={icon}
              />
            </Link>

            {/* 6th item */}
            <Link href="/multi-account-management">
              <Feature
                title="Multi-Account Management"
                description="Manage all your WhatsApps in one place, no sweat."
                icon={icon}
              />
            </Link>

            {/* 7th item */}
            <Link href="/send-message-to-groups">
              <Feature
                title="Send Message to Groups"
                description="Send unlimited messages to all your joining groups."
                icon={icon}
              />
            </Link>

            {/* 8th item */}
            <Link href="/grab-group-links">
              <Feature
                title="Grab Group Links"
                description="Grab WhatsApp group links from any website"
                icon={icon}
              />
            </Link>

            {/* 8th item */}
            <Link href="/get-members-number">
              <Feature
                title="Get Members Number"
                description="Grab WhatsApp group members from any group"
                icon={icon}
              />
            </Link>

            <Link href="/bulk-group-joiner">
              <Feature
                title="Bulk Group Joiner"
                description="Join multiple groups easily with a single click"
                icon={icon}
              />
            </Link>

            {/* 8th item */}
            <Link href="/bulk-import">
              <Feature
                title="Bulk Import"
                description="Import you contact number from excel sheet"
                icon={icon}
              />
            </Link>

            {/* 8th item */}
            <Link href="/google-map-data-extractor">
              <Feature
                title="Google Map Data Extractor"
                description="Extract data from Google Maps with targeted location to send messages"
                icon={icon}
              />
            </Link>

            {/* 8th item */}
            <Link href="/scrap-top-active-members">
              <Feature
                title="Scrap Top Active Members"
                description="Scrap top active members from any group"
                icon={icon}
              />
            </Link>

            {/* 8th item */}
            <Link href="/scrap-website-email">
              <Feature
                title="Scrap Website email"
                description="Scrap email and mobile number from any website"
                icon={icon}
              />
            </Link>

            {/* 8th item */}
            <Link href="/dynamic-message">
              <Feature
                title="Dynamic Message"
                description="Send dynamic messages with parameterized message"
                icon={icon}
              />
            </Link>

            <Link href="/phone-number-filter">
              <Feature
                title="Phone number validator"
                description="Filter and validate phone number before sending messages"
                icon={icon}
              />
            </Link>

            <Link href="/whatsapp-warmer">
              <Feature
                title="WhatsApp Warmer"
                description="Warm up your WhatsApp number before sending messages"
                icon={icon}
              />
            </Link>

            <Link href="/whatsapp-warmer">
              <Feature
                title="Get Poll Responses"
                description="Get responses from your polls to make better decisions"
                icon={icon}
              />
            </Link>

            <Link href="/export-social-media-data">
              <Feature
                title="Export social media data"
                description="Export data from social media to send messages"
                icon={icon}
              />
            </Link>

            <Link href="/business-profile-extractor">
              <Feature
                title="Business Profile Extractor"
                description="Extract business profile from any website"
                icon={icon}
              />
            </Link>

            <Feature
              title="Message Scheduling"
              description="Send your messages at the best times, effortlessly."
              icon={icon}
            />

            <Feature
              title="Analytics Report"
              description="See how your messages perform, make smarter moves."
              icon={icon}
            />

            <Feature
              title="Tutorial"
              description="Detailed documents with images and video"
              icon={icon}
            />
            <Feature
              title="Lifetime updates"
              description="Get lifetime updates with new features and bug fixes"
              icon={icon}
            />

            <Feature
              title="Multi Lingual support"
              description="Use JomChatLah in your own language (up to 15 languages)"
              icon={icon}
            />

            <Feature
              title="24/7 Support"
              description="Get help anytime, anywhere, with our 24/7 support"
              icon={icon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
