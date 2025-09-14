'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export function DashboardSection() {
  const { t, isRTL } = useLanguage()
  const [activeTab, setActiveTab] = useState('manage')

  const tabs = [
    { id: 'overview', label: t('dashboard.tabs.overview') },
    { id: 'progress', label: t('dashboard.tabs.progress') },
    { id: 'schedule', label: t('dashboard.tabs.schedule') },
    { id: 'metrics', label: t('dashboard.tabs.metrics') },
    { id: 'images', label: t('dashboard.tabs.images') },
    { id: 'settings', label: t('dashboard.tabs.settings') }
  ]

  const features = [
    { id: 'manage', label: t('dashboard.features.manage') },
    { id: 'workout', label: t('dashboard.features.workout') },
    { id: 'nutrition', label: t('dashboard.features.nutrition') },
    { id: 'feedback', label: t('dashboard.features.feedback') },
    { id: 'team', label: t('dashboard.features.team') }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="bg-white">
        <div 
          className="container mx-auto px-16 py-16 bg-black"
          style={{
            clipPath: 'polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
          }}
        >
        <div className="grid lg:grid-cols-[30%_70%] gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6" style={{ paddingBottom: '100px' }}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                <span className="block">{t('dashboard.title')}</span>
                <span className="block">{t('dashboard.titleMiddle')}</span>
                <span className="block text-supercoach-green">{t('dashboard.titleHighlight')}</span>
          </h2>
              
              <p className="text-base text-gray-300 leading-relaxed max-w-lg">
                {t('dashboard.description')}
          </p>
        </div>
        
            {/* Feature List - Now Interactive Tabs */}
            <div className="space-y-0">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex items-center w-full text-left transition-all duration-300 border-l-4 py-4 ${
                    activeTab === feature.id 
                      ? 'border-supercoach-green text-supercoach-green text-xl' 
                      : 'border-gray-600 text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <span className="text-lg font-semibold uppercase transition-colors duration-300 ml-4 leading-tight">
                    {feature.id === 'manage' && (
                      <>
                        MANAGE SMARTER,<br />
                        TRAIN BETTER
                      </>
                    )}
                    {feature.id === 'workout' && (
                      <>
                        BUILD CUSTOM<br />
                        WORKOUT PROGRAMS
                      </>
                    )}
                    {feature.id === 'nutrition' && (
                      <>
                        DESIGN TAILORED<br />
                        NUTRITION PLANS
                      </>
                    )}
                    {feature.id === 'feedback' && (
                      <>
                        INSTANT CLIENT<br />
                        FEEDBACK
                      </>
                    )}
                    {feature.id === 'team' && (
                      <>
                        TEAM & BRANCH<br />
                        MANAGEMENT
                      </>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Dashboard UI */}
          <div className="relative space-y-8 h-full overflow-hidden">
            {/* Dashboard Images */}
            <div className="relative">
              {activeTab === 'manage' && (
                <Image
                  src="/images/Manage-Smarter-Train-Better.png"
                  alt="Manage Smarter, Train Better Dashboard"
                  width={1600}
                  height={1200}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
              {activeTab === 'workout' && (
                <Image
                  src="/images/Build-Custom-Workout-Programs.png"
                  alt="Build Custom Workout Programs Dashboard"
                  width={1600}
                  height={1200}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
              {activeTab === 'nutrition' && (
                <Image
                  src="/images/Design-Tailored-Nutrition-Plans.png"
                  alt="Design Tailored Nutrition Plans Dashboard"
                  width={1600}
                  height={1200}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
              {activeTab === 'feedback' && (
                <Image
                  src="/images/Instant-Client-Feedback.png"
                  alt="Instant Client Feedback Dashboard"
                  width={1600}
                  height={1200}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
              {activeTab === 'team' && (
                <Image
                  src="/images/Team--Branch-Management.png"
                  alt="Team & Branch Management Dashboard"
                  width={1600}
                  height={1200}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
            </div>

            {/* Bottom Section - Dynamic content based on active tab */}
            <div className="text-left max-w-[80%]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t(`dashboard.features.${activeTab}`)}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t(`dashboard.featureDescriptions.${activeTab}`)}
              </p>
            </div>

            {/* Tab Content - Hidden since we're using images now */}
            <div className="hidden">
                      {activeTab === 'manage' && (
                        <div className="grid grid-cols-2 gap-6">
                          {/* Client Management */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Client Overview</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Total Clients</span>
                                <span className="text-lg font-bold text-supercoach-green">127</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Active Programs</span>
                                <span className="text-lg font-bold text-blue-600">89</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">This Month</span>
                                <span className="text-lg font-bold text-purple-600">+12</span>
                              </div>
                            </div>
                          </div>

                          {/* Training Stats */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Training Stats</h4>
                            <div className="h-32 bg-gray-200 rounded flex items-end justify-between p-2">
                              {[40, 60, 80, 70, 90, 85, 95].map((height, index) => (
                                <div
                                  key={index}
                                  className="bg-supercoach-green w-4 rounded-t"
                                  style={{ height: `${height}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Recent Activity */}
                          <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</h4>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-supercoach-green rounded-full"></div>
                                <span className="text-sm text-gray-700">Ahmed completed his workout</span>
                                <span className="text-xs text-gray-500 ml-auto">2 min ago</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Sarah updated her progress</span>
                                <span className="text-xs text-gray-500 ml-auto">15 min ago</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">New client registered</span>
                                <span className="text-xs text-gray-500 ml-auto">1 hour ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'workout' && (
                        <div className="grid grid-cols-2 gap-6">
                          {/* Program Builder */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Program Builder</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Total Programs</span>
                                <span className="text-lg font-bold text-supercoach-green">45</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Active Programs</span>
                                <span className="text-lg font-bold text-blue-600">32</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Exercises</span>
                                <span className="text-lg font-bold text-purple-600">1,247</span>
                              </div>
                            </div>
                          </div>

                          {/* Exercise Library */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Exercise Library</h4>
                            <div className="h-32 bg-gray-200 rounded flex items-end justify-between p-2">
                              {[60, 70, 80, 75, 85, 90, 88].map((height, index) => (
                                <div
                                  key={index}
                                  className="bg-blue-500 w-4 rounded-t"
                                  style={{ height: `${height}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Recent Programs */}
                          <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Programs</h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Strength Training Program</span>
                                <span className="text-xs text-gray-500">Created 2 days ago</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Cardio Blast Routine</span>
                                <span className="text-xs text-gray-500">Created 1 week ago</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Beginner's Guide</span>
                                <span className="text-xs text-gray-500">Created 2 weeks ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'nutrition' && (
                        <div className="grid grid-cols-2 gap-6">
                          {/* Nutrition Plans */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Nutrition Plans</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Active Plans</span>
                                <span className="text-lg font-bold text-supercoach-green">28</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Meal Plans</span>
                                <span className="text-lg font-bold text-blue-600">156</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Recipes</span>
                                <span className="text-lg font-bold text-purple-600">89</span>
                              </div>
                            </div>
                          </div>

                          {/* Meal Tracking */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Meal Tracking</h4>
                            <div className="relative w-20 h-20 mx-auto">
                              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-lg font-bold text-gray-700">68</span>
                              </div>
                            </div>
                          </div>

                          {/* Recent Meals */}
                          <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Meals</h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Protein Shake</span>
                                <span className="text-xs text-gray-500">2 hours ago</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Grilled Chicken Salad</span>
                                <span className="text-xs text-gray-500">4 hours ago</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Oatmeal with Berries</span>
                                <span className="text-xs text-gray-500">6 hours ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'feedback' && (
                        <div className="grid grid-cols-2 gap-6">
                          {/* Client Feedback */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Client Feedback</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Total Reviews</span>
                                <span className="text-lg font-bold text-supercoach-green">247</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Average Rating</span>
                                <span className="text-lg font-bold text-blue-600">4.8</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">This Month</span>
                                <span className="text-lg font-bold text-purple-600">+23</span>
                              </div>
                            </div>
                          </div>

                          {/* Rating Chart */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Rating Distribution</h4>
                            <div className="h-32 bg-gray-200 rounded flex items-end justify-between p-2">
                              {[20, 40, 60, 80, 100].map((height, index) => (
                                <div
                                  key={index}
                                  className="bg-yellow-500 w-4 rounded-t"
                                  style={{ height: `${height}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Recent Reviews */}
                          <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Reviews</h4>
                            <div className="space-y-3">
                              <div className="border-l-4 border-supercoach-green pl-3">
                                <p className="text-sm text-gray-700">"Amazing program! I've seen great results in just 4 weeks."</p>
                                <span className="text-xs text-gray-500">- Ahmed Hossam</span>
                              </div>
                              <div className="border-l-4 border-blue-500 pl-3">
                                <p className="text-sm text-gray-700">"The nutrition plans are so easy to follow. Highly recommended!"</p>
                                <span className="text-xs text-gray-500">- Sarah Mohamed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'team' && (
                        <div className="grid grid-cols-2 gap-6">
                          {/* Team Management */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Team Overview</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Team Members</span>
                                <span className="text-lg font-bold text-supercoach-green">12</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Active Branches</span>
                                <span className="text-lg font-bold text-blue-600">5</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Total Clients</span>
                                <span className="text-lg font-bold text-purple-600">1,247</span>
                              </div>
                            </div>
                          </div>

                          {/* Branch Performance */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Branch Performance</h4>
                            <div className="h-32 bg-gray-200 rounded flex items-end justify-between p-2">
                              {[70, 85, 90, 75, 95].map((height, index) => (
                                <div
                                  key={index}
                                  className="bg-purple-500 w-4 rounded-t"
                                  style={{ height: `${height}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Team Members */}
                          <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Team Members</h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Ahmed Hassan - Lead Trainer</span>
                                <span className="text-xs text-gray-500">Online</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Sarah Ali - Nutritionist</span>
                                <span className="text-xs text-gray-500">Online</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">Mohamed Youssef - Branch Manager</span>
                                <span className="text-xs text-gray-500">Away</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'progress' && (
                        <div className="grid grid-cols-2 gap-6">
                          {/* Weight Progress Chart */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Weight Progress</h4>
                            <div className="h-32 bg-gray-200 rounded flex items-end justify-between p-2">
                              {[60, 65, 70, 68, 72, 75, 73].map((height, index) => (
                                <div
                                  key={index}
                                  className="bg-supercoach-green w-4 rounded-t"
                                  style={{ height: `${height}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Body Fats Chart */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Body Fats</h4>
                            <div className="h-32 bg-gray-200 rounded flex items-end justify-between p-2">
                              {[20, 18, 16, 15, 14, 13, 12].map((height, index) => (
                                <div
                                  key={index}
                                  className="bg-blue-500 w-4 rounded-t"
                                  style={{ height: `${height * 4}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Workouts */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Workouts</h4>
                            <div className="text-2xl font-bold text-supercoach-green mb-2">57</div>
                            <div className="h-16 bg-gray-200 rounded flex items-end justify-between p-2">
                              {[40, 60, 80, 70, 90].map((height, index) => (
                                <div
                                  key={index}
                                  className="bg-supercoach-green w-3 rounded-t"
                                  style={{ height: `${height}%` }}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Meals */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Meals</h4>
                            <div className="relative w-20 h-20 mx-auto">
                              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-lg font-bold text-gray-700">68</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'overview' && (
                        <div className="text-center py-12">
                          <div className="text-gray-500">Overview content will be here</div>
                        </div>
                      )}

                      {activeTab === 'schedule' && (
                        <div className="text-center py-12">
                          <div className="text-gray-500">Schedule content will be here</div>
                        </div>
                      )}

                      {activeTab === 'metrics' && (
                        <div className="text-center py-12">
                          <div className="text-gray-500">Metrics content will be here</div>
                        </div>
                      )}

                      {activeTab === 'images' && (
                        <div className="text-center py-12">
                          <div className="text-gray-500">Images content will be here</div>
                        </div>
                      )}

                      {activeTab === 'settings' && (
                        <div className="text-center py-12">
                          <div className="text-gray-500">Settings content will be here</div>
                        </div>
                      )}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}